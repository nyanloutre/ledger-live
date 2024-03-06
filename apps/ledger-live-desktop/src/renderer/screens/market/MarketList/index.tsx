import React, { memo } from "react";
import { Flex, Icon } from "@ledgerhq/react-ui";
import { TFunction } from "i18next";
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import AutoSizer from "react-virtualized-auto-sizer";
import {
  MarketListRequestParams,
  MarketListRequestResult,
} from "@ledgerhq/live-common/market/types";
import TrackPage from "~/renderer/analytics/TrackPage";
import { SortTableCell } from "../components/SortTableCell";
import { TableCell, TableRow, listItemHeight } from "../components/Table";
import { NoCryptoPlaceholder } from "./NoCryptoPlaceholder";
import { CurrencyRow } from "./MarketRowItem";

type MarketListProps = {
  starredMarketCoins: string[];
  loading: boolean;
  freshLoading: boolean;
  currenciesLength: number;
  marketParams: MarketListRequestParams;
  itemCount: number;
  locale: string;
  fromCurrencies?: string[];
  marketResult: MarketListRequestResult;
  resetSearch: () => void;
  toggleFilterByStarredAccounts: () => void;
  toggleSortBy: (newOrderBy: string) => void;
  toggleStar: (id: string, isStarred: boolean) => void;
  t: TFunction;
  isItemLoaded: (index: number) => boolean;
  onLoadNextPage: (startIndex: number, stopIndex: number) => void;
};

function MarketList({
  starredMarketCoins,
  marketParams,
  loading,
  freshLoading,
  itemCount,
  currenciesLength,
  locale,
  fromCurrencies,
  marketResult,
  resetSearch,
  isItemLoaded,
  toggleFilterByStarredAccounts,
  toggleSortBy,
  toggleStar,
  onLoadNextPage,
  t,
}: MarketListProps) {
  const { order, orderBy, search, starred, range, counterCurrency } = marketParams;
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
              onClick={toggleFilterByStarredAccounts}
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
                        itemData={marketResult.data}
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
