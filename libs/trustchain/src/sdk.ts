import {
  JWT,
  MemberCredentials,
  TrustchainSDKContext,
  Trustchain,
  TrustchainMember,
  TrustchainSDK,
  TrustchainDeviceCallbacks,
  AuthCachePolicy,
  TrustchainResult,
  TrustchainResultType,
} from "./types";
import {
  crypto,
  Challenge,
  CommandStream,
  CommandStreamEncoder,
  CommandStreamDecoder,
  StreamTree,
  Permissions,
  DerivationPath,
  SoftwareDevice,
  Device,
} from "@ledgerhq/hw-trustchain";
import { KeyPair as CryptoKeyPair } from "@ledgerhq/hw-trustchain/Crypto";
import { log } from "@ledgerhq/logs";
import { LedgerAPI4xx } from "@ledgerhq/errors";
import api from "./api";
import { genericWithJWT } from "./auth";
import { TrustchainEjected } from "./errors";
import { HWDeviceProvider } from "./withHardware";

export class SDK implements TrustchainSDK {
  context: TrustchainSDKContext;
  hwDeviceProvider: HWDeviceProvider;

  jwt: JWT | undefined = undefined;
  deviceJwt: JWT | undefined = undefined;

  constructor(context: TrustchainSDKContext, hwDeviceProvider: HWDeviceProvider) {
    this.context = context;
    this.hwDeviceProvider = hwDeviceProvider;
  }

  withAuth<T>(
    trustchain: Trustchain,
    memberCredentials: MemberCredentials,
    job: (jwt: JWT) => Promise<T>,
    policy?: AuthCachePolicy,
  ): Promise<T> {
    return genericWithJWT(
      jwt => {
        this.jwt = jwt;
        return job(jwt);
      },
      this.jwt,
      () => auth(trustchain, memberCredentials),
      policy,
    );
  }

  async initMemberCredentials(): Promise<MemberCredentials> {
    const kp = await crypto.randomKeypair();
    return convertKeyPairToLiveCredentials(kp);
  }

  async getOrCreateTrustchain(
    memberCredentials: MemberCredentials,
    callbacks?: TrustchainDeviceCallbacks,
    topic?: Uint8Array,
  ): Promise<TrustchainResult> {
    let type = TrustchainResultType.restored;

    const withJwt: WithJwt = this.hwDeviceProvider.withJwt.bind(this.hwDeviceProvider);

    let trustchains = await withJwt(api.getTrustchains);

    if (Object.keys(trustchains).length === 0) {
      log("trustchain", "getOrCreateTrustchain: no trustchain yet, let's create one");
      type = TrustchainResultType.created;
      const streamTree = await this.hwDeviceProvider.withHw(hw =>
        StreamTree.createNewTree(hw, { topic }),
      );
      await streamTree.getRoot().resolve(); // double checks the signatures are correct before sending to the backend
      const commandStream = CommandStreamEncoder.encode(streamTree.getRoot().blocks);
      await withJwt(jwt => api.postSeed(jwt, crypto.to_hex(commandStream)));
      // deviceJwt have changed, proactively refresh it
      this.deviceJwt = await withJwt(api.refreshAuth);
      trustchains = await withJwt(api.getTrustchains);
    }

    // we find our trustchain root id
    let trustchainRootId: string | undefined;
    const trustchainRootPath = "m/";
    for (const [trustchainId, info] of Object.entries(trustchains)) {
      for (const path in info) {
        if (path === trustchainRootPath) {
          trustchainRootId = trustchainId;
        }
      }
    }

    invariant(trustchainRootId, "trustchainRootId should be defined");
    log("trustchain", "getOrCreateTrustchain rootId=" + trustchainRootId);

    // make a stream tree from all the trustchains associated to this root id
    let { streamTree } = await withJwt(jwt => fetchTrustchain(jwt, trustchainRootId));

    const path = streamTree.getApplicationRootPath(this.context.applicationId);
    const child = streamTree.getChild(path);
    let shouldShare = true;
    if (child) {
      const resolved = await child.resolve();
      const members = resolved.getMembers();
      shouldShare = !members.some(m => crypto.to_hex(m) === memberCredentials.pubkey); // not already a member
    }
    if (shouldShare) {
      if (type === TrustchainResultType.restored) type = TrustchainResultType.updated;
      streamTree = await this.hwDeviceProvider.withHw(hw => {
        const member = {
          id: memberCredentials.pubkey,
          name: this.context.name,
          permissions: Permissions.OWNER,
        };
        return pushMember(streamTree, path, trustchainRootId, withJwt, hw, member);
      }, callbacks);
    }

    const walletSyncEncryptionKey = await extractEncryptionKey(streamTree, path, memberCredentials);

    const trustchain = {
      rootId: trustchainRootId,
      walletSyncEncryptionKey,
      applicationPath: path,
    };

    return { type, trustchain };
  }

  async restoreTrustchain(
    trustchain: Trustchain,
    memberCredentials: MemberCredentials,
  ): Promise<Trustchain> {
    const { streamTree, applicationRootPath } = await this.withAuth(
      trustchain,
      memberCredentials,
      jwt => fetchTrustchainAndResolve(jwt, trustchain.rootId, this.context.applicationId),
    );
    const walletSyncEncryptionKey = await extractEncryptionKey(
      streamTree,
      applicationRootPath,
      memberCredentials,
    );

    return {
      rootId: trustchain.rootId,
      walletSyncEncryptionKey,
      applicationPath: applicationRootPath,
    };
  }

  async getMembers(
    trustchain: Trustchain,
    memberCredentials: MemberCredentials,
  ): Promise<TrustchainMember[]> {
    const { resolved } = await this.withAuth(trustchain, memberCredentials, jwt =>
      fetchTrustchainAndResolve(jwt, trustchain.rootId, this.context.applicationId),
    );
    return resolved.getMembersData();
  }

  async removeMember(
    trustchain: Trustchain,
    memberCredentials: MemberCredentials,
    member: TrustchainMember,
    callbacks?: TrustchainDeviceCallbacks,
  ): Promise<Trustchain> {
    const withJwt: WithJwt = this.hwDeviceProvider.withJwt.bind(this.hwDeviceProvider);

    // invariant because the sdk does not support this case, and the UI should not allows it.
    invariant(
      memberCredentials.pubkey !== member.id,
      "removeMember must not be used to remove the current member.",
    );
    const applicationId = this.context.applicationId;
    const trustchainId = trustchain.rootId;
    // eslint-disable-next-line prefer-const
    let { resolved, streamTree, applicationRootPath } = await withJwt(jwt =>
      fetchTrustchainAndResolve(jwt, trustchainId, applicationId),
    );
    const members = resolved.getMembersData();
    const withoutMember = members.filter(m => m.id !== member.id);
    invariant(withoutMember.length < members.length, "member not found"); // invariant because the UI should not allow this case.
    const withoutMemberOrMe = withoutMember.filter(m => m.id !== memberCredentials.pubkey);
    const softwareDevice = getSoftwareDevice(memberCredentials);

    const newPath = streamTree.getApplicationRootPath(applicationId, 1);

    // derive a new branch of the tree on the new path
    streamTree = await this.hwDeviceProvider.withHw(hw => {
      const member = {
        id: memberCredentials.pubkey,
        name: this.context.name,
        permissions: Permissions.OWNER,
      };
      return pushMember(streamTree, newPath, trustchainId, withJwt, hw, member);
    }, callbacks);

    // add the remaining members
    for (const m of withoutMemberOrMe) {
      streamTree = await pushMember(streamTree, newPath, trustchainId, withJwt, softwareDevice, m);
    }
    const walletSyncEncryptionKey = await extractEncryptionKey(
      streamTree,
      newPath,
      memberCredentials,
    );

    // close the previous stream
    streamTree = await closeStream(
      streamTree,
      applicationRootPath,
      trustchainId,
      withJwt,
      softwareDevice,
    );

    // deviceJwt have changed, proactively refresh it
    this.deviceJwt = await withJwt(api.refreshAuth);

    return {
      rootId: trustchainId,
      walletSyncEncryptionKey,
      applicationPath: newPath,
    };
  }

  async addMember(
    trustchain: Trustchain,
    memberCredentials: MemberCredentials,
    member: TrustchainMember,
  ): Promise<void> {
    const withJwt: WithJwt = f => this.withAuth(trustchain, memberCredentials, f);
    const { streamTree, applicationRootPath } = await withJwt(jwt =>
      fetchTrustchainAndResolve(jwt, trustchain.rootId, this.context.applicationId),
    );
    const softwareDevice = getSoftwareDevice(memberCredentials);
    await pushMember(
      streamTree,
      applicationRootPath,
      trustchain.rootId,
      withJwt,
      softwareDevice,
      member,
    );
  }

  async destroyTrustchain(
    trustchain: Trustchain,
    memberCredentials: MemberCredentials,
  ): Promise<void> {
    await this.withAuth(trustchain, memberCredentials, jwt =>
      api.deleteTrustchain(jwt, trustchain.rootId),
    );
    this.jwt = undefined;
    this.deviceJwt = undefined;
  }

  async encryptUserData(trustchain: Trustchain, input: Uint8Array): Promise<Uint8Array> {
    const key = crypto.from_hex(trustchain.walletSyncEncryptionKey);
    const encrypted = await crypto.encryptUserData(key, input);
    return encrypted;
  }

  async decryptUserData(trustchain: Trustchain, data: Uint8Array): Promise<Uint8Array> {
    const key = crypto.from_hex(trustchain.walletSyncEncryptionKey);
    const decrypted = await crypto.decryptUserData(key, data);
    return decrypted;
  }
}

type WithJwt = <T>(job: (jwt: JWT) => Promise<T>) => Promise<T>;

async function auth(trustchain: Trustchain, memberCredentials: MemberCredentials): Promise<JWT> {
  const challenge = await api.getAuthenticationChallenge();
  const data = crypto.from_hex(challenge.tlv);
  const [parsed, _] = Challenge.fromBytes(data);
  const hash = await crypto.hash(parsed.getUnsignedTLV());
  const keypair = convertLiveCredentialsToKeyPair(memberCredentials);
  const response = await api
    .postChallengeResponse({
      challenge: challenge.json,
      signature: {
        credential: credentialForPubKey(memberCredentials.pubkey),
        signature: crypto.to_hex(await crypto.sign(hash, keypair)),
        attestation: crypto.to_hex(liveAuthentication(trustchain.rootId)),
      },
    })
    .catch(e => {
      if (e instanceof LedgerAPI4xx && e.message.includes("Not a member of trustchain")) {
        throw new TrustchainEjected(e.message);
      }
      throw e;
    });
  return response;
}

async function pushMember(
  streamTree: StreamTree,
  path: string,
  trustchainId: string,
  withJwt: WithJwt,
  hw: Device,
  member: TrustchainMember,
) {
  const isNewDerivation = !streamTree.getChild(path);
  streamTree = await streamTree.share(
    path,
    hw,
    crypto.from_hex(member.id),
    member.name,
    member.permissions,
  );
  const child = streamTree.getChild(path);
  invariant(child, "StreamTree.share failed to create the child stream.");
  await child.resolve(); // double checks the signatures are correct before sending to the backend
  if (isNewDerivation) {
    const commandStream = CommandStreamEncoder.encode(child.blocks);
    await withJwt(jwt => api.postDerivation(jwt, trustchainId, crypto.to_hex(commandStream)));
  } else {
    const commandStream = CommandStreamEncoder.encode([child.blocks[child.blocks.length - 1]]);
    const request = {
      path,
      blocks: [crypto.to_hex(commandStream)],
    };
    await withJwt(jwt => api.putCommands(jwt, trustchainId, request));
  }
  return streamTree;
}

async function closeStream(
  streamTree: StreamTree,
  path: string,
  trustchainId: string,
  withJwt: WithJwt,
  softwareDevice: Device,
) {
  streamTree = await streamTree.close(path, softwareDevice);
  const child = streamTree.getChild(path);
  invariant(child, "StreamTree.close failed to create the child stream.");
  await child.resolve(); // double checks the signatures are correct before sending to the backend
  const commandStream = CommandStreamEncoder.encode([child.blocks[child.blocks.length - 1]]);
  const request = {
    path,
    blocks: [crypto.to_hex(commandStream)],
  };
  await withJwt(jwt => api.putCommands(jwt, trustchainId, request));
  return streamTree;
}

export function convertKeyPairToLiveCredentials(keyPair: CryptoKeyPair): MemberCredentials {
  return {
    pubkey: crypto.to_hex(keyPair.publicKey),
    privatekey: crypto.to_hex(keyPair.privateKey),
  };
}

export function convertLiveCredentialsToKeyPair(
  memberCredentials: MemberCredentials,
): CryptoKeyPair {
  return {
    publicKey: crypto.from_hex(memberCredentials.pubkey),
    privateKey: crypto.from_hex(memberCredentials.privatekey),
  };
}

function getSoftwareDevice(memberCredentials: MemberCredentials): SoftwareDevice {
  const kp = convertLiveCredentialsToKeyPair(memberCredentials);
  return new SoftwareDevice(kp);
}

async function fetchTrustchain(jwt: JWT, trustchainId: string) {
  const trustchainData = await api.getTrustchain(jwt, trustchainId);
  const streams = Object.values(trustchainData).map(
    data => new CommandStream(CommandStreamDecoder.decode(crypto.from_hex(data))),
  );
  const streamTree = StreamTree.from(...streams);
  return { streamTree };
}

async function fetchTrustchainAndResolve(jwt: JWT, trustchainId: string, applicationId: number) {
  const { streamTree } = await fetchTrustchain(jwt, trustchainId);
  const applicationRootPath = streamTree.getApplicationRootPath(applicationId);
  const applicationNode = streamTree.getChild(applicationRootPath);
  invariant(applicationNode, "could not find the application stream.");
  const resolved = await applicationNode.resolve();
  return { resolved, streamTree, applicationRootPath, applicationNode };
}

async function extractEncryptionKey(
  streamTree: StreamTree,
  path: string,
  memberCredentials: MemberCredentials,
): Promise<string> {
  const softwareDevice = getSoftwareDevice(memberCredentials);
  const pathNumbers = DerivationPath.toIndexArray(path);
  try {
    const key = await softwareDevice.readKey(streamTree, pathNumbers);
    // private key is in the first 32 bytes
    return crypto.to_hex(key.slice(0, 32));
  } catch (e) {
    if (e instanceof Error) {
      throw new TrustchainEjected(e.message);
    }
    throw e;
  }
}

// spec https://ledgerhq.atlassian.net/wiki/spaces/TA/pages/4335960138/ARCH+LedgerLive+Auth+specifications
function liveAuthentication(rootId: string): Uint8Array {
  const trustchainId = new TextEncoder().encode(rootId);
  const att = new Uint8Array(2 + trustchainId.length);
  att[0] = 0x02; // Prefix tag
  att[1] = trustchainId.length;
  att.set(trustchainId, 2);
  return att;
}

function credentialForPubKey(publicKey: string) {
  return { version: 0, curveId: 33, signAlgorithm: 1, publicKey };
}

function invariant(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}
