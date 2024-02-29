import React from "react";
import { Flex, Button as BaseButton, Text, SearchInput, Dropdown } from "@ledgerhq/react-ui";
import styled from "styled-components";
import CounterValueSelect from "./CountervalueSelect";
import MarketList from "./MarketList";
import SideDrawerFilter from "./SideDrawerFilter";
import TrackPage from "~/renderer/analytics/TrackPage";
import { useMarket } from "./useMarket";

const Container = styled(Flex).attrs({
  flex: "1",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "flex-start",
  overflow: "hidden",
  px: 1,
  mx: -1,
})``;

const SearchContainer = styled(Flex).attrs({ flexShrink: "1" })`
  > div {
    width: 100%;
  }
`;

export const Button = styled(BaseButton)<{ big?: boolean }>`
  border-radius: 44px;

  ${p =>
    p.Icon
      ? `
      height: 40px;
      width: 40px;
      `
      : `
          font-size:  ${p.big ? 14 : 12}px;
          height: ${p.big ? 48 : 32}px;
          line-height: ${p.big ? 48 : 32}px;
          padding: 0 ${p.big ? 25 : 15}px;
      `}

  ${p =>
    p.variant === "shade"
      ? `background-color: transparent!important;border-color: currentColor;`
      : ``}
`;

const Title = styled(Text).attrs({ variant: "h3" })`
  font-size: 28px;
  line-height: 33px;
`;

const SelectBarContainer = styled(Flex)`
  font-size: 13px;
`;

export default function Market() {
  const {
    marketParams,
    toggleFilterByStarredAccounts,
    timeRangeValue,
    toggleLiveCompatible,
    updateSearch,
    updateTimeRange,
    t,
    setCounterCurrency,
    supportedCounterCurrencies,
    refresh,
    liveCompatible,
    starFilterOn,
    starredMarketCoins,
    timeRanges,
  } = useMarket();

  const { order, range, counterCurrency, search = "" } = marketParams;

  return (
    <Container>
      <TrackPage
        category="Market"
        sort={order !== "desc"}
        timeframe={range}
        countervalue={counterCurrency}
      />
      <Title>{t("market.title")}</Title>
      <Flex flexDirection="row" pr="6px" my={2} alignItems="center" justifyContent="space-between">
        <SearchContainer>
          <SearchInput
            data-test-id="market-search-input"
            value={search}
            onChange={updateSearch}
            placeholder={t("common.search")}
            clearable
          />
        </SearchContainer>
        <SelectBarContainer flexDirection="row" alignItems="center" justifyContent="flex-end">
          <Flex data-test-id="market-countervalue-select" justifyContent="flex-end" mx={4}>
            <CounterValueSelect
              counterCurrency={String(counterCurrency)}
              setCounterCurrency={setCounterCurrency}
              supportedCounterCurrencies={supportedCounterCurrencies}
            />
          </Flex>
          <Flex data-test-id="market-range-select" mx={2}>
            <Dropdown
              label={t("common.range")}
              menuPortalTarget={document.body}
              onChange={updateTimeRange}
              options={timeRanges}
              value={timeRangeValue}
              styles={{
                control: () => ({
                  display: "flex",
                  padding: 0,
                }),
              }}
            />
          </Flex>
          <Flex ml={4} mr={3}>
            <SideDrawerFilter
              refresh={refresh}
              filters={{
                starred: {
                  toggle: toggleFilterByStarredAccounts,
                  value: starFilterOn,
                  disabled: !starredMarketCoins?.length,
                },
                liveCompatible: {
                  toggle: toggleLiveCompatible,
                  value: Boolean(liveCompatible),
                },
              }}
              t={t}
            />
          </Flex>
        </SelectBarContainer>
      </Flex>
      <MarketList
        starredMarketCoins={starredMarketCoins}
        toggleStarredAccounts={toggleFilterByStarredAccounts}
      />
    </Container>
  );
}
