import type { AccountBridge } from "@ledgerhq/types-live";
import { defaultUpdateTransaction } from "@ledgerhq/coin-framework/bridge/jsHelpers";
import type { NearAccount, Transaction, TransactionStatus } from "./types";
import getEstimatedFees from "./getFeesForTransaction";
import estimateMaxSpendable from "./estimateMaxSpendable";

export const prepareTransaction: AccountBridge<
  Transaction,
  TransactionStatus,
  NearAccount
>["prepareTransaction"] = async (account, transaction) => {
  const amount = transaction.useAllAmount
    ? await estimateMaxSpendable({
        account,
        transaction,
      })
    : transaction.amount;

  const fees = await getEstimatedFees(transaction);
  return defaultUpdateTransaction(transaction, { fees, amount });
};
