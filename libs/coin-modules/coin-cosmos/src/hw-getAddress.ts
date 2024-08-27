import { GetAddressFn } from "@ledgerhq/coin-framework/bridge/getAddressWrapper";
import { SignerContext } from "@ledgerhq/coin-framework/signer";
import { GetAddressOptions, Result  } from "@ledgerhq/coin-framework/derivation";
import cryptoFactory from "./chain/chain";
import { CosmosGetAddressAndPubKeyRes, CosmosAddress, CosmosSigner } from "./types/signer";
import Transport from "@ledgerhq/hw-transport";
import Cosmos from "@ledgerhq/hw-app-cosmos";

// export type Resolver = (transport: Transport, addressOpt: GetAddressOptions) => Promise<Result>;


// const resolver: Resolver = async (transport, { path, verify, currency }) => {
//   const cosmosApiImpl = cryptoFactory(currency.id);
//   const cosmos = new Cosmos(transport);
//   const r = await cosmos.getAddress(path, cosmosApiImpl.prefix, verify || false);
//   return {
//     address: r.address,
//     publicKey: r.publicKey,
//     path,
//   };
// };

// export default resolver;
function resolver(signerContext: SignerContext<CosmosSigner>): GetAddressFn {
  return async (deviceId: string, { path, verify, currency }: GetAddressOptions) => {
    const cosmosApiImpl = cryptoFactory(currency.id);

    const { address, publicKey } = (await signerContext(
      deviceId,
      async signer => {
        // const pathSplit = path.split("/").map(p => parseInt(p.replace("'", "")));
        const { address, publicKey } =
          await signer.getAddress(path, cosmosApiImpl.prefix, verify || false);
          // await signer.getAddressAndPubKey(pathSplit, cosmosApiImpl.prefix, verify || false);
        console.log({ RESOLVERADDRESS: address, publicKey});
        return { address, publicKey };
      },
    )) as CosmosGetAddress;
    // TODO: compressed convertion like in signOperation.ts ?
    //         const pubKey = Buffer.from(compressed_pk).toString("base64");
    return {
      address,
      publicKey, //publicKey.toString("hex"),
      path,
    };
  };
}

export default resolver;
