import { getMainAccount } from "@ledgerhq/coin-framework/account/index";
import type { Account, AccountLike } from "@ledgerhq/types-live";
import { BigNumber } from "bignumber.js";
import { fetchAccountInfo } from "./bridge/bridgeHelpers/api";
import type { Transaction } from "./types";
import { getAddress, getTonEstimatedFees, transactionToHwParams } from "./utils";

const estimateMaxSpendable = async ({
  account,
  parentAccount,
  transaction,
}: {
  account: AccountLike;
  parentAccount?: Account | null | undefined;
  transaction?: Transaction | null | undefined;
}): Promise<BigNumber> => {
  const a = getMainAccount(account, parentAccount);
  let balance = a.spendableBalance;

  if (balance.eq(0)) return balance;

  const accountInfo = await fetchAccountInfo(getAddress(a).address);
  const estimatedFees = transaction
    ? transaction.fees ??
      (await getTonEstimatedFees(
        a,
        accountInfo.status === "uninit",
        transactionToHwParams(transaction, accountInfo.seqno),
      ))
    : BigNumber(0);

  if (balance.lte(estimatedFees)) return new BigNumber(0);

  balance = balance.minus(estimatedFees);

  return balance;
};

export default estimateMaxSpendable;
