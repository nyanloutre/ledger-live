import React, { memo, useState, useEffect, useCallback, useMemo } from "react";
import styled, { useTheme } from "styled-components";
import { Trans } from "react-i18next";
import { DrawerTitle } from "../DrawerTitle";
import Box from "~/renderer/components/Box";
import Text from "~/renderer/components/Text";
import FormattedVal from "~/renderer/components/FormattedVal";
import CryptoCurrencyIcon from "~/renderer/components/CryptoCurrencyIcon";
import { AccountLike } from "@ledgerhq/types-live";
import { getAccountCurrency, getAccountName } from "@ledgerhq/live-common/account/index";
import Check from "~/renderer/icons/Check";
import { SwapTransactionType } from "@ledgerhq/live-common/exchange/swap/types";
import Tabbable from "~/renderer/components/Box/Tabbable";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "~/renderer/actions/modals";
import Plus from "~/renderer/icons/Plus";
import { rgba } from "~/renderer/styles/helpers";
import { shallowAccountsSelector } from "~/renderer/reducers/accounts";
import { context } from "~/renderer/drawers/Provider";
import { track } from "~/renderer/analytics/segment";
import { useGetSwapTrackingProperties } from "../../utils/index";
import { useAccountUnit } from "~/renderer/hooks/useAccountUnit";

const AccountWrapper = styled(Tabbable)<{ selected?: boolean }>`
  cursor: pointer;
  &:hover {
    background-color: ${p => p.theme.colors.palette.text.shade10};
  }
  ${p =>
    p.selected
      ? `
    background-color: ${p.theme.colors.palette.background.default};
  `
      : ""};
`;
const AddAccountIconContainer = styled(Tabbable)`
  padding: 5px;
  border-radius: 9999px;
  color: ${p => p.theme.colors.palette.primary.main};
  background: ${p => rgba(p.theme.colors.palette.primary.main, 0.2)};
`;

function AddAccountIcon() {
  return (
    <AddAccountIconContainer justifyContent="center" alignItems="center">
      <Plus size={10} />
    </AddAccountIconContainer>
  );
}

const TargetAccount = memo(function TargetAccount({
  account,
  selected,
  setAccount,
  isChild,
}: {
  account: AccountLike;
  selected?: boolean;
  setAccount?: Props["setToAccount"];
  isChild?: boolean;
}) {
  const swapDefaultTrack = useGetSwapTrackingProperties();
  const allAccounts = useSelector(shallowAccountsSelector);
  const theme = useTheme();
  const currency = getAccountCurrency(account);
  const unit = useAccountUnit(account);
  const name = getAccountName(account);
  const parentAccount =
    account?.type !== "Account" ? allAccounts?.find(a => a.id === account?.parentId) : null;
  const parentName = parentAccount ? getAccountName(parentAccount) : undefined;
  const balance = account.spendableBalance || account.balance;

  const onClick = useCallback(() => {
    track("button_clicked2", {
      page: "Swap accounts",
      ...swapDefaultTrack,
      button: "account",
      currency,
      account: name,
      parentAccount: parentName,
    });
    setAccount && setAccount(currency, account, parentAccount || undefined);
  }, [swapDefaultTrack, currency, name, parentName, setAccount, account, parentAccount]);

  const Wrapper: React.ComponentType<
    React.ComponentProps<typeof Box> & React.ComponentProps<typeof AccountWrapper>
  > = setAccount ? AccountWrapper : Box;

  return (
    <Wrapper
      horizontal
      p={3}
      justifyContent="space-between"
      selected={selected}
      onClick={onClick}
      data-test-id={`target-account-container-${("name" in account && account.name) || ""}`}
    >
      <Box horizontal alignItems="center" pl={isChild ? "8px" : 0}>
        {isChild && (
          <Box
            pr={3}
            style={{
              borderLeft: `1px solid ${theme.colors.palette.divider}`,
            }}
            height="200%"
          />
        )}
        <Box mr={3}>
          <CryptoCurrencyIcon currency={currency} size={16} />
        </Box>
        <Text ff="Inter|SemiBold" fontSize={5}>
          {name}
        </Text>
      </Box>
      <Box position="relative" pr={5}>
        <FormattedVal
          color="palette.text.shade50"
          ff="Inter|Medium"
          fontSize={5}
          val={balance}
          unit={unit}
          showCode
        />
        {selected && (
          <Box
            position="absolute"
            height="100%"
            justifyContent="center"
            style={{
              right: 0,
            }}
          >
            <Check size={16} color={theme.colors.palette.primary.main} />
          </Box>
        )}
      </Box>
    </Wrapper>
  );
});
type Props = {
  accounts: AccountLike[] | undefined;
  selectedAccount: AccountLike | undefined;
  setToAccount: SwapTransactionType["setToAccount"];
  setDrawerStateRef: {
    current:
      | ((a: { selectedAccount: AccountLike; targetAccounts: AccountLike[] }) => void)
      | undefined
      | null;
  };
};

export default function TargetAccountDrawer({
  accounts,
  selectedAccount: initialSelectedAccount,
  setToAccount,
  setDrawerStateRef,
}: Props) {
  const swapDefaultTrack = useGetSwapTrackingProperties();
  const allAccounts = useSelector(shallowAccountsSelector);
  const dispatch = useDispatch();
  const { setDrawer } = React.useContext(context);
  const [{ selectedAccount, targetAccounts }, setState] = useState({
    selectedAccount: initialSelectedAccount,
    targetAccounts: accounts,
  });
  const currency = getAccountCurrency(selectedAccount);
  useEffect(() => {
    setDrawerStateRef.current = setState;
    return () => {
      setDrawerStateRef.current = null;
    };
  }, [setDrawerStateRef]);
  const handleAddAccount = () =>
    dispatch(
      openModal("MODAL_ADD_ACCOUNTS", {
        currency,
        ...swapDefaultTrack,
      }),
    );
  const handleAccountPick: Props["setToAccount"] = (currency, account, parentAccount) => {
    setToAccount(currency, account, parentAccount);
    setDrawer(undefined);
  };

  const accountsList:
    | {
        account: AccountLike;
        subAccounts: AccountLike[];
      }[]
    | undefined = useMemo(
    () =>
      targetAccounts &&
      Object.values(
        targetAccounts.reduce(
          (result, account) => {
            const parentId = "parentId" in account && account.parentId;
            if (parentId) {
              result[parentId] = result[parentId] ?? {
                account: allAccounts.find(acc => acc.id === parentId),
                subAccounts: [],
              };
              result[parentId].subAccounts.push(account);
              return result;
            } else {
              result[account.id] = result[account.id] ?? {
                account,
                subAccounts: [],
              };
              return result;
            }
          },
          {} as Record<
            string,
            {
              account: AccountLike;
              subAccounts: AccountLike[];
            }
          >,
        ),
      ),
    [targetAccounts, allAccounts],
  );

  return (
    <Box height="100%">
      <DrawerTitle i18nKey="swap2.form.to.title" />
      <Box mx={3}>
        {accountsList?.map(({ account, subAccounts }) => (
          <>
            <TargetAccount
              key={account.id}
              account={account}
              selected={selectedAccount?.id === account.id}
              setAccount={subAccounts.length === 0 ? handleAccountPick : undefined}
            />
            {subAccounts.map(account => (
              <TargetAccount
                key={account.id}
                account={account}
                selected={selectedAccount?.id === account.id}
                setAccount={handleAccountPick}
                isChild
              />
            ))}
          </>
        ))}
        <Tabbable
          onClick={handleAddAccount}
          horizontal
          py={3}
          px={12}
          alignItems="center"
          style={{
            cursor: "pointer",
          }}
        >
          <Box mr={12}>
            <AddAccountIcon />
          </Box>
          <Text ff="Inter|SemiBold" color="palette.primary.main" fontSize={5}>
            <Trans i18nKey="swap2.form.details.noAccountCTA" />
          </Text>
        </Tabbable>
      </Box>
    </Box>
  );
}
