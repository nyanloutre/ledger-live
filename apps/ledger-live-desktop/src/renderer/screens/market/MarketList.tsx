import React, { useCallback, memo } from "react";
import { Flex, Text, Icon } from "@ledgerhq/react-ui";
import { TFunction } from "i18next";
import { Trans, useTranslation } from "react-i18next";
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import AutoSizer from "react-virtualized-auto-sizer";
import MarketRowItem from "./MarketRowItem";
import { Button } from ".";
import { useSelector, useDispatch } from "react-redux";
import { localeSelector } from "~/renderer/reducers/settings";
import { addStarredMarketCoins, removeStarredMarketCoins } from "~/renderer/actions/settings";
import Track from "~/renderer/analytics/Track";
import { useRampCatalog } from "@ledgerhq/live-common/platform/providers/RampCatalogProvider/useRampCatalog";
import Image from "~/renderer/components/Image";
import NoResultsFound from "~/renderer/images/no-results-found.png";
import { useFeature } from "@ledgerhq/live-common/featureFlags/index";
import {
  CurrencyData,
  MarketListRequestParams,
  MarketState,
} from "@ledgerhq/live-common/market/types";
import TrackPage from "~/renderer/analytics/TrackPage";
import { useFetchCurrencyFrom } from "@ledgerhq/live-common/exchange/swap/hooks/index";
import { useMarketData as useMarketDataHook } from "@ledgerhq/live-common/market/v2/useMarketDataProvider";
import { marketSelector } from "~/renderer/reducers/market";
import { setMarketOptions } from "~/renderer/actions/market";
import { SortTableCell } from "./components/SortTableCell";
import { TableCell, TableRow, listItemHeight } from "./components/Table";

const NoCryptoPlaceholder = ({
  requestParams,
  t,
  resetSearch,
}: {
  requestParams: MarketListRequestParams;
  t: TFunction;
  resetSearch: () => void;
}) => (
  <Flex
    mt={7}
    mx={"auto"}
    justifyContent="center"
    alignItems="stretch"
    width="400px"
    flexDirection="column"
  >
    <Track event="Page Market Search" success={false} />
    <Flex justifyContent="center" alignItems="center">
      <Image alt="no result found" resource={NoResultsFound} width={192} height={192} />
    </Flex>
    <Text variant="large" my={3} textAlign="center">
      {t("market.warnings.noCryptosFound")}
    </Text>
    <Text variant="paragraph" textAlign="center">
      <Trans
        i18nKey={
          requestParams.search
            ? "market.warnings.noSearchResultsFor"
            : "market.warnings.noSearchResults"
        }
        values={{ search: requestParams.search }}
      >
        <b />
      </Trans>
    </Text>
    <Button mt={3} variant="main" onClick={resetSearch} big width="100%">
      {t("market.goBack")}
    </Button>
  </Flex>
);

const CurrencyRow = memo(function CurrencyRowItem({
  data,
  index,
  counterCurrency,
  loading,
  toggleStar,
  starredMarketCoins,
  locale,
  swapAvailableIds,
  style,
}: {
  data: CurrencyData[]; // NB: CurrencyData.id is different to Currency.id
  index: number;
  counterCurrency?: string;
  loading: boolean;
  toggleStar: (id: string, isStarred: boolean) => void;
  starredMarketCoins: string[];
  locale: string;
  swapAvailableIds: string[];
  range?: string;
  style: React.CSSProperties;
}) {
  const currency = data ? data[index] : null;
  const internalCurrency = currency ? currency.internalCurrency : null;
  const isStarred = currency && starredMarketCoins.includes(currency.id);

  const { isCurrencyAvailable } = useRampCatalog();

  const availableOnBuy =
    !!internalCurrency &&
    !!internalCurrency?.id &&
    isCurrencyAvailable(internalCurrency.id, "onRamp");

  const availableOnSwap = internalCurrency && swapAvailableIds.includes(internalCurrency.id);
  const stakeProgramsFeatureFlag = useFeature("stakePrograms");
  const listFlag = stakeProgramsFeatureFlag?.params?.list ?? [];
  const stakeProgramsEnabled = stakeProgramsFeatureFlag?.enabled ?? false;
  const availableOnStake =
    stakeProgramsEnabled && listFlag.includes(currency?.internalCurrency?.id || "");

  return (
    <MarketRowItem
      loading={!currency || (index === data.length && index > 50 && loading)}
      currency={currency}
      counterCurrency={counterCurrency}
      isStarred={!!isStarred}
      toggleStar={() => currency?.id && toggleStar(currency.id, !!isStarred)}
      key={index}
      locale={locale}
      availableOnBuy={!!availableOnBuy}
      availableOnSwap={!!availableOnSwap}
      availableOnStake={availableOnStake}
      style={{ ...style }}
    />
  );
});

function MarketList({
  starredMarketCoins,
  toggleStarredAccounts,
}: {
  starredMarketCoins: string[];
  toggleStarredAccounts: () => void;
}) {
  const marketParams = useSelector(marketSelector);
  const dispatch = useDispatch();

  const { t } = useTranslation();
  const locale = useSelector(localeSelector);

  const onLoadNextPage = useCallback(() => {
    dispatch(setMarketOptions({ page: (marketParams?.page || 1) + 1 }));
  }, [dispatch, marketParams?.page]);

  const refresh = useCallback(
    (payload: MarketState) => {
      dispatch(setMarketOptions(payload));
    },
    [dispatch],
  );

  const { orderBy, order, starred, search, range, counterCurrency } = marketParams;

  const res = useMarketDataHook(marketParams);

  const currenciesLength = res.data.length;
  const loading = res.loading;
  const freshLoading = loading && !currenciesLength;

  const { data: fromCurrencies } = useFetchCurrencyFrom();

  const resetSearch = useCallback(() => refresh({ search: "" }), [refresh]);

  const toggleStar = useCallback(
    (id: string, isStarred: boolean) => {
      if (isStarred) {
        dispatch(removeStarredMarketCoins(id));
      } else {
        dispatch(addStarredMarketCoins(id));
      }
    },
    [dispatch],
  );

  const toggleSortBy = useCallback(
    (newOrderBy: string) => {
      const isFreshSort = newOrderBy !== orderBy;
      refresh(
        isFreshSort
          ? { orderBy: newOrderBy, order: "desc" }
          : {
              orderBy: newOrderBy,
              order: order === "asc" ? "desc" : "asc",
            },
      );
    },
    [order, orderBy, refresh],
  );

  const isItemLoaded = useCallback((index: number) => !!res.data[index], [res.data]);
  const itemCount = currenciesLength + 1;

  return (
    <Flex flex="1" flexDirection="column">
      {!currenciesLength && !loading ? (
        <NoCryptoPlaceholder requestParams={marketParams} t={t} resetSearch={resetSearch} />
      ) : (
        <>
          {search && currenciesLength > 0 && <TrackPage category="Market Search" success={true} />}
          <TableRow header>
            <SortTableCell
              data-test-id="market-sort-button"
              onClick={toggleSortBy}
              orderByKey="market_cap"
              orderBy={orderBy}
              order={order}
            >
              #
            </SortTableCell>
            <TableCell disabled>{t("market.marketList.crypto")}</TableCell>
            <TableCell disabled>{t("market.marketList.price")}</TableCell>
            <TableCell disabled>{t("market.marketList.change")}</TableCell>

            <TableCell disabled>{t("market.marketList.marketCap")}</TableCell>

            <TableCell disabled>{t("market.marketList.last7d")}</TableCell>
            <TableCell
              data-test-id="market-star-button"
              disabled={starredMarketCoins.length <= 0 && (!starred || starred.length <= 0)}
              onClick={toggleStarredAccounts}
            >
              <Icon name={starred && starred.length > 0 ? "StarSolid" : "Star"} size={18} />
            </TableCell>
          </TableRow>
          <Flex flex="1">
            <AutoSizer style={{ height: "100%", width: "100%" }}>
              {({ height }: { height: number }) =>
                freshLoading ? (
                  <List
                    height={height}
                    width="100%"
                    itemCount={Math.floor(height / listItemHeight)}
                    itemData={[]}
                    itemSize={listItemHeight}
                    style={{ overflowY: "hidden" }}
                  >
                    {props => (
                      <CurrencyRow
                        {...props}
                        counterCurrency={counterCurrency}
                        loading={loading}
                        toggleStar={toggleStar}
                        starredMarketCoins={starredMarketCoins}
                        locale={locale}
                        swapAvailableIds={fromCurrencies ?? []}
                        range={range}
                      />
                    )}
                  </List>
                ) : currenciesLength ? (
                  <InfiniteLoader
                    isItemLoaded={isItemLoaded}
                    itemCount={itemCount}
                    loadMoreItems={onLoadNextPage}
                  >
                    {/* @ts-expect-error react-window-infinite-loader bindings are too strict here. */}
                    {({
                      onItemsRendered,
                      ref,
                    }: {
                      onItemsRendered: (_: unknown) => void;
                      ref: React.RefObject<List>;
                    }) => (
                      <List
                        height={height}
                        width="100%"
                        itemCount={itemCount}
                        onItemsRendered={onItemsRendered}
                        itemSize={listItemHeight}
                        itemData={res.data}
                        style={{ overflowX: "hidden" }}
                        ref={ref}
                        overscanCount={10}
                      >
                        {props => (
                          <CurrencyRow
                            {...props}
                            counterCurrency={counterCurrency}
                            loading={loading}
                            toggleStar={toggleStar}
                            starredMarketCoins={starredMarketCoins}
                            locale={locale}
                            swapAvailableIds={fromCurrencies ?? []}
                            range={range}
                          />
                        )}
                      </List>
                    )}
                  </InfiniteLoader>
                ) : (
                  <NoCryptoPlaceholder
                    requestParams={marketParams}
                    t={t}
                    resetSearch={resetSearch}
                  />
                )
              }
            </AutoSizer>
          </Flex>
        </>
      )}
    </Flex>
  );
}

export default memo(MarketList);
