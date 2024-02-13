import { useSelector } from "react-redux";
import {
  Account,
  AccountLike,
  AccountLikeArray,
  PortfolioRange,
  SubAccount,
} from "@ledgerhq/types-live";
import { CryptoCurrency, TokenCurrency } from "@ledgerhq/types-cryptoassets";
import {
  usePortfolio as usePortfolioRaw,
  useBalanceHistoryWithCountervalue as useBalanceHistoryWithCountervalueRaw,
  useCurrencyPortfolio as useCurrencyPortfolioRaw,
} from "@ledgerhq/live-common/portfolio/v2/react";
import {
  blacklistedTokenIdsSelector,
  selectedTimeRangeSelector,
} from "~/renderer/reducers/settings";
import { counterValueCurrencySelector } from "../reducers/settings";
import { accountsSelector } from "../reducers/accounts";
import { useMemo } from "react";
import { getAccountCurrency, listSubAccounts } from "@ledgerhq/live-common/account/index";

// provide redux states via custom hook wrapper

export function useBalanceHistoryWithCountervalue({
  account,
  range,
}: {
  account: AccountLike;
  range: PortfolioRange;
}) {
  const accountFiltered = useAccount(account);
  const to = useSelector(counterValueCurrencySelector);
  return useBalanceHistoryWithCountervalueRaw({
    account: accountFiltered,
    range,
    to,
  });
}
export function usePortfolio() {
  const to = useSelector(counterValueCurrencySelector);
  const range = useSelector(selectedTimeRangeSelector);
  const accounts = useAccounts();

  return usePortfolioRaw({
    accounts,
    range,
    to,
  });
}
export function useCurrencyPortfolio({
  currency,
  range,
}: {
  currency: CryptoCurrency | TokenCurrency;
  range: PortfolioRange;
}) {
  const accounts = useAccounts();
  const to = useSelector(counterValueCurrencySelector);
  return useCurrencyPortfolioRaw({
    accounts: accounts as Account[],
    range,
    to,
    currency,
  });
}

export function useAccounts(localAccounts: AccountLikeArray = []): AccountLikeArray {
  const accounts = useSelector(accountsSelector);
  const accountsToUse = localAccounts.length ? localAccounts : accounts;

  const blacklistedTokenIds = useSelector(blacklistedTokenIdsSelector);
  const blacklistedTokenIdsSet = useMemo(() => new Set(blacklistedTokenIds), [blacklistedTokenIds]);
  const filteredAccounts = accountsToUse.map(acc => {
    const subAccounts = filterSubAccounts(listSubAccounts(acc), blacklistedTokenIdsSet);
    return { ...acc, subAccounts };
  });

  return filteredAccounts;
}

export function useAccount(account: AccountLike) {
  const blacklistedTokenIds = useSelector(blacklistedTokenIdsSelector);
  const blacklistedTokenIdsSet = useMemo(() => new Set(blacklistedTokenIds), [blacklistedTokenIds]);

  const subAccounts = filterSubAccounts(listSubAccounts(account), blacklistedTokenIdsSet);
  return { ...account, subAccounts };
}

export function filterSubAccounts(subAccounts: SubAccount[], blacklistedTokenIdsSet: Set<string>) {
  return subAccounts.filter(
    subAccount => !blacklistedTokenIdsSet.has(getAccountCurrency(subAccount).id),
  );
}
