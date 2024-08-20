import { GetAddressFn } from "@ledgerhq/coin-framework/bridge/getAddressWrapper";
import { SignerContext } from "@ledgerhq/coin-framework/signer";
import { GetAddressOptions } from "@ledgerhq/coin-framework/derivation";
import { CosmosSigner } from "./types";
import cryptoFactory from "./chain/chain";

function resolver(signerContext: SignerContext<CosmosSigner>): GetAddressFn {
  return async (deviceId: string, { path, verify, currency }: GetAddressOptions) => {
      const cosmosApiImpl = cryptoFactory(currency.id);

    const {address, publicKey} = await signerContext(deviceId, async signer => {
      // TODO: recheck param
      const { address, publicKey } = await signer.getAddress(path, parseInt(cosmosApiImpl.prefix), verify || false);
      return { address, publicKey};
    });
    return {
      address: address,
      publicKey: publicKey, //publicKey.toString("hex"),
      path,
    };
  };
}

export default resolver;