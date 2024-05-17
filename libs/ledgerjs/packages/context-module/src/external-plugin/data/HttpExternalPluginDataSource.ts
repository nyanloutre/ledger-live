import axios from "axios";
import { ExternalPluginDataSource, GetDappInfos } from "./ExternalPluginDataSource";
import { DappDTO } from "./DappDTO";
import { DappInfos } from "../model/DappInfos";
import { SelectorDetails } from "../model/SelectorDetails";

export class HttpExternalPluginDataSource implements ExternalPluginDataSource {
  constructor() {}

  async getDappInfos({ chainId, address, selector }: GetDappInfos): Promise<DappInfos | undefined> {
    const dappInfos = await axios.request<DappDTO[]>({
      method: "GET",
      url: "https://crypto-assets-service.api.ledger.com/v1/dapps",
      params: { output: "b2c,b2c_signatures,abis", chain_id: chainId, contracts: address },
    });

    const { erc20OfInterest, method, plugin } =
      dappInfos.data[0]?.b2c.contracts?.[0]?.selectors?.[selector] || {};
    const { signature, serialized_data: serializedData } =
      dappInfos.data[0]?.b2c_signatures?.[address]?.[selector] || {};

    if (!erc20OfInterest || !method || !plugin || !signature || !serializedData) {
      return;
    }

    const abi = dappInfos.data[0].abis?.[address];

    if (!abi) {
      return;
    }

    const selectorDetails: SelectorDetails = {
      method,
      plugin,
      erc20OfInterest,
      signature,
      serializedData,
    };

    return { selectorDetails, abi };
  }
}
