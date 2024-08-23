import { GetAddressFn } from "@ledgerhq/coin-framework/bridge/getAddressWrapper";
import { SignerContext } from "@ledgerhq/coin-framework/signer";
import { GetAddressOptions } from "@ledgerhq/coin-framework/derivation";
import cryptoFactory from "./chain/chain";
import { CosmosAddress, CosmosSigner } from "./types/signer";

function resolver(signerContext: SignerContext<CosmosSigner>): GetAddressFn {
  return async (deviceId: string, { path, verify, currency }: GetAddressOptions) => {
      const cosmosApiImpl = cryptoFactory(currency.id);

    const {address, publicKey} = (await signerContext(deviceId, async signer => {
      const pathSplit = path.split("/").map(p => parseInt(p.replace("'", "")));
      const { address, publicKey } = await signer.getAddressAndPubKey(pathSplit, cosmosApiImpl.prefix, verify || false);
      console.log({RESOLVERADDRESS: address, publicKey})
      return { address, publicKey};
    })) as CosmosAddress;
    return {
      address: address,
      publicKey: publicKey, //publicKey.toString("hex"),
      path,
    };
  };
}

export default resolver;