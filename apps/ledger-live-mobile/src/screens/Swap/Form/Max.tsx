import React, { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Flex, Text, Switch } from "@ledgerhq/native-ui";
import { SwapTransactionType } from "@ledgerhq/live-common/exchange/swap/types";
import { isAccount } from "@ledgerhq/live-common/account/index";
import { useAnalytics } from "~/analytics";
import { sharedSwapTracking } from "../utils";

export function Max({ swapTx }: { swapTx: SwapTransactionType }) {
  const { t } = useTranslation();
  const { track } = useAnalytics();

  const isMaxButtonHidden = useMemo(
    () => isAccount(swapTx.swap.from.account),
    [swapTx.swap.from.account],
  );

  useEffect(() => {
    if (isMaxButtonHidden && swapTx.swap.isMaxEnabled) {
      swapTx.toggleMax();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMaxButtonHidden, swapTx.swap.isMaxEnabled]);

  const onToggle = (event: boolean) => {
    track("button_clicked", {
      ...sharedSwapTracking,
      button: "max",
      state: event,
    });
    swapTx.toggleMax();
  };

  return (
    !isMaxButtonHidden && (
      <Flex alignSelf="flex-end" flexDirection="row" alignItems="center">
        <Flex flexDirection="row" alignItems="center" paddingY={4}>
          <Text variant="small" paddingRight={2}>
            {t("transfer.swap2.form.amount.useMax")}
          </Text>

          <Switch
            testID="exchange-send-max-toggle"
            checked={swapTx.swap.isMaxEnabled}
            onChange={onToggle}
          />
        </Flex>
      </Flex>
    )
  );
}
