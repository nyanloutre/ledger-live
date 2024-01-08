import { BigNumber } from "bignumber.js";
import type { IconAccount, Transaction } from "./types";
import { defaultUpdateTransaction } from "@ledgerhq/coin-framework/bridge/jsHelpers";
import getEstimatedFees from "./js-getFeesForTransaction";
import estimateMaxSpendable from "./js-estimateMaxSpendable";

/**
 * Create an empty transaction
 *
 * @returns {Transaction}
 */
export const createTransaction = (): Transaction => ({
  family: "icon",
  mode: "send",
  amount: new BigNumber(0),
  recipient: "",
  useAllAmount: false,
  fees: null,
});

/**
 * Prepare transaction before checking status
 *
 * @param {IconAccount} a
 * @param {Transaction} t
 */
export const prepareTransaction = async (a: IconAccount, t: Transaction): Promise<Transaction> => {
  const fees = await getEstimatedFees({ a, t });

  const amount = t.useAllAmount
    ? await estimateMaxSpendable({
        account: a,
        transaction: t,
      })
    : t.amount;

  return defaultUpdateTransaction(t, { fees, amount });
};
