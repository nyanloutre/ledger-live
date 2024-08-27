import { GetAddressFn } from "@ledgerhq/coin-framework/bridge/getAddressWrapper";
import { SignerContext } from "@ledgerhq/coin-framework/signer";
import { GetAddressOptions } from "@ledgerhq/coin-framework/derivation";
import cryptoFactory from "./chain/chain";
import { CosmosAddress, CosmosGetAddressAndPubKeyRes, CosmosSigner } from "./types/signer";

function resolver(signerContext: SignerContext<CosmosSigner>): GetAddressFn {
  return async (deviceId: string, { path, verify, currency }: GetAddressOptions) => {
    const cosmosApiImpl = cryptoFactory(currency.id);

    const { address, publicKey } = (await signerContext(deviceId, async signer => {
      const { address, publicKey } = await signer.getAddress(
        path,
        cosmosApiImpl.prefix,
        verify || false,
      );
      return { address, publicKey };
    })) as CosmosAddress;
    // TODO: compressed convertion like in signOperation.ts ?
    //         const pubKey = Buffer.from(compressed_pk).toString("base64");
    return {
      address,
      publicKey, //publicKey.toString("hex"),
      path,
    };
  };
}


// function resolver(signerContext: SignerContext<CosmosSigner>): GetAddressFn {
//   return async (deviceId: string, { path, verify, currency }: GetAddressOptions) => {
//     const cosmosApiImpl = cryptoFactory(currency.id);

//     const { bech32_address, compressed_pk, return_code, error_message } = (await signerContext(
//       deviceId,
//       async signer => {
//         const pathSplit = path.split("/").map(p => parseInt(p.replace("'", "")));
//         const { bech32_address, compressed_pk, return_code, error_message } =
//           await signer.getAddressAndPubKey(pathSplit, cosmosApiImpl.prefix, verify || false);
//         console.log({ RESOLVERADDRESS: bech32_address, compressed_pk, return_code, error_message });
//         return { bech32_address, compressed_pk };
//       },
//     )) as CosmosGetAddressAndPubKeyRes;
//     // TODO: compressed convertion like in signOperation.ts ?
//     //         const pubKey = Buffer.from(compressed_pk).toString("base64");
//     return {
//       address: bech32_address,
//       publicKey: compressed_pk, //publicKey.toString("hex"),
//       return_code,
//       error_message,
//       path,
//     };
//   };
// }

export default resolver;
