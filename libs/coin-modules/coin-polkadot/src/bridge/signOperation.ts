import { BigNumber } from "bignumber.js";
import { Observable } from "rxjs";
import { FeeNotLoaded } from "@ledgerhq/errors";
//import { ApiPromise, WsProvider } from '@polkadot/api';
import type {
  PolkadotAccount,
  PolkadotOperation,
  PolkadotOperationExtra,
  PolkadotSigner,
  Transaction,
} from "../types";
import type {
  Account,
  DeviceId,
  OperationType,
  SignOperationEvent,
  SignOperationFnSignature,
} from "@ledgerhq/types-live";
import { encodeOperationId } from "@ledgerhq/coin-framework/operation";
import { SignerContext } from "@ledgerhq/coin-framework/signer";
import { buildTransaction } from "./buildTransaction";
import { calculateAmount, getNonce, isFirstBond } from "./utils";
import { signExtrinsic } from "../logic";
import polkadotAPI from "../network";

const MODE_TO_TYPE = {
  send: "OUT",
  bond: "BOND",
  unbond: "UNBOND",
  rebond: "BOND",
  withdrawUnbonded: "WITHDRAW_UNBONDED",
  nominate: "NOMINATE",
  chill: "CHILL",
  setController: "SET_CONTROLLER",
  claimReward: "REWARD_PAYOUT",
  default: "FEES",
};
const MODE_TO_PALLET_METHOD = {
  send: "balances.transferKeepAlive",
  sendMax: "balances.transferAllowDeath",
  bond: "staking.bond",
  bondExtra: "staking.bondExtra",
  unbond: "staking.unbond",
  rebond: "staking.rebond",
  withdrawUnbonded: "staking.withdrawUnbonded",
  nominate: "staking.nominate",
  chill: "staking.chill",
  setController: "staking.setController",
  claimReward: "staking.payoutStakers",
};

const getExtra = (
  type: string,
  account: PolkadotAccount,
  transaction: Transaction,
): PolkadotOperationExtra => {
  const extra: PolkadotOperationExtra = {
    palletMethod: MODE_TO_PALLET_METHOD[transaction.mode],
  };

  if (transaction.mode == "send" && transaction.useAllAmount) {
    extra.palletMethod = MODE_TO_PALLET_METHOD["sendMax"];
  } else if (transaction.mode === "bond" && !isFirstBond(account)) {
    extra.palletMethod = MODE_TO_PALLET_METHOD["bondExtra"];
  }

  switch (type) {
    case "OUT":
      return { ...extra, transferAmount: new BigNumber(transaction.amount) };

    case "BOND":
      return { ...extra, bondedAmount: new BigNumber(transaction.amount) };

    case "UNBOND":
      return { ...extra, unbondedAmount: new BigNumber(transaction.amount) };

    case "WITHDRAW_UNBONDED":
      return {
        ...extra,
        withdrawUnbondedAmount: new BigNumber(account.polkadotResources?.unlockedBalance || 0),
      };

    case "NOMINATE":
      return { ...extra, validators: transaction.validators };
  }

  return extra;
};

const buildOptimisticOperation = (
  account: PolkadotAccount,
  transaction: Transaction,
  fee: BigNumber,
): PolkadotOperation => {
  const type = (MODE_TO_TYPE[transaction.mode] ?? MODE_TO_TYPE.default) as OperationType;
  const value = type === "OUT" ? new BigNumber(transaction.amount).plus(fee) : new BigNumber(fee);
  const extra = getExtra(type, account, transaction);
  const operation: PolkadotOperation = {
    id: encodeOperationId(account.id, "", type),
    hash: "",
    type,
    value,
    fee,
    blockHash: null,
    blockHeight: null,
    senders: [account.freshAddress],
    recipients: [transaction.recipient].filter(Boolean),
    accountId: account.id,
    transactionSequenceNumber: getNonce(account),
    date: new Date(),
    extra,
  };
  return operation;
};

/**
 * Sign Transaction with Ledger hardware
 */
const buildSignOperation =
  (signerContext: SignerContext<PolkadotSigner>): SignOperationFnSignature<Transaction> =>
  ({
    account,
    deviceId,
    transaction,
  }: {
    account: Account;
    deviceId: DeviceId;
    transaction: Transaction;
  }): Observable<SignOperationEvent> =>
    new Observable(o => {
      async function main() {
        o.next({
          type: "device-signature-requested",
        });

        if (!transaction.fees) {
          throw new FeeNotLoaded();
        }

        // Ensure amount is filled when useAllAmount
        const transactionToSign = {
          ...transaction,
          amount: calculateAmount({
            a: account as PolkadotAccount,
            t: transaction,
          }),
        };
        const { unsigned, registry } = await buildTransaction(
          account as PolkadotAccount,
          transactionToSign,
          true,
        );
        const metadataHash = await polkadotAPI.getMetadataHash();
        console.log("metadataHash", metadataHash);

        const payload = registry
          .createType("ExtrinsicPayload", unsigned, {
            version: unsigned.version,
          })
          .toU8a({
            method: true,
          });

        const payloadString = Buffer.from(payload).toString("hex");
        const metadata = await polkadotAPI.shortenMetadata(payloadString);
        console.log("metadata", metadata);
        //const payloadBuffer = Buffer.from(payloadString, "hex");
        const r = await signerContext(deviceId, signer =>
          signer.sign(account.freshAddressPath, payload, metadata),
        );
        console.log("r", r);
        //r.signature
        console.log("r signature", r.signature);
        let lll = r.signature ?? "";
        //lll = lll.substring(0, lll.length - 2);
        const signed = await signExtrinsic(unsigned, lll, registry);

        o.next({
          type: "device-signature-granted",
        });
        console.log("unsigned", unsigned);
        console.log("signed", signed);

        /*
        const wsProvider = new WsProvider("wss://rococo-rpc.polkadot.io");
        const api = await ApiPromise.create({ provider: wsProvider });

        const transfer = api.tx.balances.transferKeepAlive("5Eeo2upzLarLcVbx7L6MwggAxUGfaaPXvVxfy84JDdM9Vthw", 1000000000000);
        //const { nonce } = await api.query.system.account();*/
        /*
        const accountInfo = await api.query.system.account(
          "5DMzTbkrvkhNRg5x8L73kzVh5C9WRG9ukrJNXssJ1kMZp8XV",
        );*/
        //const nonce = accountInfo.nonce;
        // 获取所需参数
        /*
        const signedBlock = await api.rpc.chain.getBlock();
        const blockHash = signedBlock.block.header.hash;
        const genesisHash = api.genesisHash;
        const runtimeVersion = await api.rpc.state.getRuntimeVersion();
        
        //console.log("nonce", nonce);
        console.log("signedBlock", signedBlock);
        console.log("blockHash", blockHash);
        console.log("genesisHash", genesisHash);
        console.log("runtimeVersion", runtimeVersion);
        
        const payload1 = api.createType('ExtrinsicPayload', {
            method: transfer.method,
            era: api.createType('ExtrinsicEra', { current: signedBlock.block.header.number.toNumber(), period: 64 }),
            nonce: 0,
            genesisHash,
            blockHash,
            specVersion: runtimeVersion.specVersion,
            transactionVersion: runtimeVersion.transactionVersion,
        });
        console.log("compare payload", payload1);
        const signature = lll;
        console.log("new signature", signature);
        // 添加签名
        transfer.addSignature(
          "5DMzTbkrvkhNRg5x8L73kzVh5C9WRG9ukrJNXssJ1kMZp8XV",
          `0x${signature}`,
          payload1.toU8a(true),
        );
        const finalsigned = transfer.toHex();
        console.log("finalsigned", finalsigned);
        */
        const operation = buildOptimisticOperation(
          account as PolkadotAccount,
          transactionToSign,
          transactionToSign.fees ?? new BigNumber(0),
        );
        o.next({
          type: "signed",
          signedOperation: {
            operation,
            signature: signed,
          },
        });
      }

      main().then(
        () => o.complete(),
        e => o.error(e),
      );
    });

export default buildSignOperation;
