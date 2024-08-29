import React from "react";
import { Trans } from "react-i18next";
import Box from "~/renderer/components/Box";
import { Separator } from "~/renderer/screens/exchange/Swap2/Form/Separator";
import Button from "~/renderer/components/Button";
import SwapCompleted from "~/renderer/screens/exchange/Swap2/Form/ExchangeDrawer/SwapCompleted";
import { useGetSwapTrackingProperties } from "~/renderer/screens/exchange/Swap2/utils";
import { useGetSellTrackingProperties } from "~/renderer/screens/exchange/Sell/utils";
import TrackPage from "~/renderer/analytics/TrackPage";
import { Currency } from "@ledgerhq/types-cryptoassets";
import SellCompleted from "~/renderer/screens/exchange/Sell/SellCompleted";

type TransactionBroadcastedContentProps = {
  swapId?: string;
  isSell?: boolean;
  provider: string;
  sourceCurrency: Currency;
  targetCurrency?: Currency;
  onViewDetails: (id: string) => void;
};

export function TransactionBroadcastedContent(props: TransactionBroadcastedContentProps) {
  const { swapId, provider, sourceCurrency, targetCurrency, onViewDetails, isSell } = props;
  const swapDefaultTrack = useGetSwapTrackingProperties();
  const sellDefaultTrack = useGetSellTrackingProperties();

  return (
    <Box height="100%" justifyContent="space-between" paddingTop={62} paddingBottom={15}>
      <TrackPage
        category="Swap"
        name={`ModalStep-finished`}
        sourceCurrency={sourceCurrency?.name}
        targetCurrency={targetCurrency?.name}
        provider={provider}
        {...(swapId ? swapDefaultTrack : sellDefaultTrack)}
      />
      {swapId && targetCurrency && (
        <>
          <Box justifyContent="center" flex={1}>
            <SwapCompleted
              swapId={swapId}
              provider={provider}
              targetCurrency={targetCurrency.name}
            />
          </Box>
          <Box flex={0}>
            <Separator noMargin />
            <Box flexDirection="row-reverse" pt={16}>
              <Button primary onClick={() => swapId && onViewDetails(swapId)}>
                <Trans i18nKey="swap2.exchangeDrawer.completed.seeDetails" />
              </Button>
            </Box>
          </Box>
        </>
      )}
      {isSell && sourceCurrency && (
        <>
          <Box>
            <SellCompleted />
          </Box>
        </>
      )}
    </Box>
  );
}
