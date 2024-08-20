// import Cosmos from "@ledgerhq/hw-app-cosmos";
// import type { Resolver } from "../../hw/getAddress/types";
// import cryptoFactory from "../chain/chain";

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

import { GetAddressFn } from "@ledgerhq/coin-framework/bridge/getAddressWrapper";
import { SignerContext } from "@ledgerhq/coin-framework/signer";
import { GetAddressOptions } from "@ledgerhq/coin-framework/derivation";
// import { StrKey } from "@stellar/stellar-sdk";
// import { StellarSigner } from "./types/signer";
import { CosmosSigner } from "./types";
import cryptoFactory from "./chain/chain";

function resolver(signerContext: SignerContext<CosmosSigner>): GetAddressFn {
  return async (deviceId: string, { path, verify, currency }: GetAddressOptions) => {
      const cosmosApiImpl = cryptoFactory(currency.id);

    const publicKey = await signerContext(deviceId, async signer => {
      const { address, publicKey } = await signer.getAddress(path, parseInt(cosmosApiImpl.prefix), verify || false);
      return publicKey;
    });
    // const publicKey = StrKey.encodeEd25519PublicKey(rawPublicKey);

    return {
      path,
      address: publicKey,
      publicKey: publicKey.toString("hex"),
    };
  };
}

export default resolver;