import network from "@ledgerhq/live-network/network";
import { fetchCurrencyToMock } from "./__mocks__/fetchCurrencyTo.mocks";
import { isIntegrationTestEnv } from "../../utils/isIntegrationTestEnv";
import { DEFAULT_SWAP_TIMEOUT_MS } from "../../const/timeout";
import axios from "axios";
import { LedgerAPI4xx } from "@ledgerhq/errors";
import { flattenV5CurrenciesToAndFrom } from "../../utils/flattenV5CurrenciesToAndFrom";
import { getSwapAPIBaseURL, getSwapUserIP } from "../..";

type Props = {
  baseUrl?: string;
  currencyFromId?: string;
  providers: string[];
  additionalCoinsFlag?: boolean;
};

export type ResponseData = {
  currencyGroups: CurrencyGroup[];
};
type CurrencyGroup = {
  network: string;
  supportedCurrencies: string[];
};

export async function fetchCurrencyTo({
  baseUrl = getSwapAPIBaseURL(),
  currencyFromId,
  providers,
  additionalCoinsFlag = false,
}: Props) {
  if (isIntegrationTestEnv())
    return Promise.resolve(flattenV5CurrenciesToAndFrom(fetchCurrencyToMock));

  const url = new URL(`${baseUrl}/currencies/to`);

  url.searchParams.append("providers-whitelist", providers.join(","));
  url.searchParams.append("additional-coins-flag", additionalCoinsFlag.toString());
  url.searchParams.append("currency-from", currencyFromId!);
  const headers = getSwapUserIP();

  try {
    const { data } = await network<ResponseData>({
      method: "GET",
      url: url.toString(),
      timeout: DEFAULT_SWAP_TIMEOUT_MS,
      ...(headers !== undefined ? { headers } : {}),
    });
    return flattenV5CurrenciesToAndFrom(data);
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      if (e.code === "ECONNABORTED") {
        // TODO: LIVE-8901 (handle request timeout)
      }
    }
    if (e instanceof LedgerAPI4xx) {
      // TODO: LIVE-8901 (handle 4xx)
    }
    throw e;
  }
}
