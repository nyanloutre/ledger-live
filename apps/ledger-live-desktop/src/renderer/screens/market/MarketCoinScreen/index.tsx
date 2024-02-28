import React from "react";
import { Flex, Text, Icon } from "@ledgerhq/react-ui";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import TrackPage from "~/renderer/analytics/TrackPage";
import { localeSelector } from "~/renderer/reducers/settings";
import { useSingleCoinMarketData } from "@ledgerhq/live-common/market/MarketDataProvider";
import styled from "styled-components";
import CryptoCurrencyIcon from "~/renderer/components/CryptoCurrencyIcon";
import { Button } from "..";
import MarketCoinChart from "./MarketCoinChart";
import MarketInfo from "./MarketInfo";
import { useMarketCoin } from "./useMarketCoin";

const CryptoCurrencyIconWrapper = styled.div`
  height: 56px;
  width: 56px;
  position: relative;
  border-radius: 56px;
  overflow: hidden;
  img {
    object-fit: cover;
  }
`;

const Container = styled(Flex).attrs({
  flex: "1",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "flex-start",
})``;

const StarContainer = styled(Flex).attrs({
  ml: 3,
  pb: 1,
})`
  cursor: pointer;
`;

const Title = styled(Text).attrs({ variant: "h3" })`
  font-size: 28px;
  line-height: 33px;
`;

export default function MarketCoinScreen() {
  const { t } = useTranslation();
  const locale = useSelector(localeSelector);

  const { supportedCounterCurrencies } = useSingleCoinMarketData();

  const {
    isStarred,
    onSwap,
    onBuy,
    onStake,
    toggleStar,
    availableOnBuy,
    availableOnStake,
    availableOnSwap,
    color,
    dataChart,
    dataCurrency,
    isLoadingData,
    isLoadingDataChart,
    changeRange,
    range,
    changeCounterCurrency,
    counterCurrency,
    currency,
  } = useMarketCoin();

  const {
    marketcap,
    marketcapRank,
    totalVolume,
    high24h,
    low24h,
    marketCapChangePercentage24h,
    circulatingSupply,
    totalSupply,
    maxSupply,
    ath,
    athDate,
    atl,
    atlDate,
    price,
    priceChangePercentage,
  } = dataCurrency || {};

  const { name, ticker, image, internalCurrency } = currency || {};
  return (
    <Container data-test-id="market-coin-page-container">
      <TrackPage
        category="Page Market Coin"
        currencyName={name}
        starred={isStarred}
        timeframe={range}
        countervalue={counterCurrency}
      />
      <Flex flexDirection="row" my={2} alignItems="center" justifyContent="space-between">
        <Flex flexDirection="row" alignItems="center" justifyContent="flex-start">
          <CryptoCurrencyIconWrapper>
            {internalCurrency ? (
              <CryptoCurrencyIcon
                currency={internalCurrency}
                size={56}
                circle
                fallback={<img width="56px" height="56px" src={image} alt={"currency logo"} />}
              />
            ) : (
              <img width="56px" height="56px" src={image} alt={"currency logo"} />
            )}
          </CryptoCurrencyIconWrapper>
          <Flex pl={3} flexDirection="column" alignItems="left" pr={16}>
            <Flex flexDirection="row" alignItems="center" justifyContent={"center"}>
              <Title>{name}</Title>
              <StarContainer data-test-id="market-coin-star-button" onClick={toggleStar}>
                <Icon name={isStarred ? "StarSolid" : "Star"} size={28} />
              </StarContainer>
            </Flex>
            <Text variant="small" color="neutral.c60">
              {ticker?.toUpperCase()}
            </Text>
          </Flex>
        </Flex>
        <Flex flexDirection="row" alignItems="center" justifyContent="flex-end">
          {internalCurrency && (
            <>
              {availableOnBuy && (
                <Button
                  data-test-id="market-coin-buy-button"
                  variant="color"
                  mr={1}
                  onClick={onBuy}
                >
                  {t("accounts.contextMenu.buy")}
                </Button>
              )}
              {availableOnSwap && (
                <Button
                  data-test-id="market-coin-swap-button"
                  variant="color"
                  onClick={onSwap}
                  mr={1}
                >
                  {t("accounts.contextMenu.swap")}
                </Button>
              )}
              {availableOnStake && (
                <Button variant="color" onClick={onStake} data-test-id="market-coin-stake-button">
                  {t("accounts.contextMenu.stake")}
                </Button>
              )}
            </>
          )}
        </Flex>
      </Flex>
      <MarketCoinChart
        price={price}
        priceChangePercentage={priceChangePercentage}
        chartData={dataChart}
        range={range}
        counterCurrency={counterCurrency}
        refreshChart={changeRange}
        color={color}
        locale={locale}
        loading={isLoadingDataChart}
        setCounterCurrency={changeCounterCurrency}
        supportedCounterCurrencies={supportedCounterCurrencies}
      />
      <MarketInfo
        marketcap={marketcap}
        marketcapRank={marketcapRank}
        totalVolume={totalVolume}
        high24h={high24h}
        low24h={low24h}
        price={price}
        priceChangePercentage={priceChangePercentage}
        marketCapChangePercentage24h={marketCapChangePercentage24h}
        circulatingSupply={circulatingSupply}
        totalSupply={totalSupply}
        maxSupply={maxSupply}
        ath={ath}
        athDate={athDate}
        atl={atl}
        atlDate={atlDate}
        locale={locale}
        counterCurrency={counterCurrency}
        loading={isLoadingData}
      />
    </Container>
  );
}
