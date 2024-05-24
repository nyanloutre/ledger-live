import BigNumber from "bignumber.js";
import { NetworkDown } from "@ledgerhq/errors";
import { Account } from "@ledgerhq/types-live";
import { getServerInfos, parseAPIValue } from "./api";
import { NetworkInfo, Transaction } from "./types";

// FIXME this could be cleaner
const remapError = (error: Error) => {
  const msg = error.message;

  if (msg.includes("Unable to resolve host") || msg.includes("Network is down")) {
    return new NetworkDown();
  }

  return error;
};

export const prepareTransaction = async (a: Account, t: Transaction): Promise<Transaction> => {
  let networkInfo: NetworkInfo | null | undefined = t.networkInfo;

  if (!networkInfo) {
    try {
      const info = await getServerInfos();
      const serverFee = parseAPIValue(info.info.validated_ledger.base_fee_xrp.toString());
      networkInfo = {
        family: "xrp",
        serverFee,
        baseReserve: new BigNumber(0), // NOT USED. will refactor later.
      };
    } catch (e) {
      if (e instanceof Error) {
        throw remapError(e);
      }
      throw e;
    }
  }

  const fee = t.fee || networkInfo.serverFee;

  if (t.networkInfo !== networkInfo || t.fee !== fee) {
    return { ...t, networkInfo, fee };
  }

  return t;
};
