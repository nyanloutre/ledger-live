import { MarketItemPerformer } from "@ledgerhq/live-common/market/types";
import { ABTestingVariants, PortfolioRange } from "@ledgerhq/types-live";
import { Dispatch, SetStateAction } from "react";

/**
 * MarketPerformanceWidget Hook
 */

export type Props = {
  variant: ABTestingVariants;
  list: MarketItemPerformer[];
  order: Order;
  range: PortfolioRange;
  setOrder: Dispatch<SetStateAction<Order>>;
  isLoading: boolean;
  hasError: boolean;
};

/**
 * MarketPerformanceWidgetHeader
 */
export type HeaderProps = {
  onChangeOrder: React.Dispatch<React.SetStateAction<Order>>;
  order: Order;
};

/**
 * MarketPerformanceWidgetBody
 */
export type PropsBody = {
  data: MarketItemPerformer[];
  order: Order;
  range: PortfolioRange;
};

export type PropsBodyElem = {
  data: MarketItemPerformer;
  index: number;
  isFirst: boolean;
  range: PortfolioRange;
};

/**
 * Enums
 */

export enum Order {
  asc = "asc",
  desc = "desc",
}
