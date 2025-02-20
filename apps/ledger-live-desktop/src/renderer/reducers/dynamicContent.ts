import { handleActions } from "redux-actions";
import {
  ActionContentCard,
  NotificationContentCard,
  PortfolioContentCard,
} from "~/types/dynamicContent";
import { Handlers } from "./types";

export type DynamicContentState = {
  portfolioCards: PortfolioContentCard[];
  actionCards: ActionContentCard[];
  notificationsCards: NotificationContentCard[];
};

const state: DynamicContentState = {
  portfolioCards: [],
  actionCards: [],
  notificationsCards: [],
};

type HandlersPayloads = {
  DYNAMIC_CONTENT_SET_PORTFOLIO_CARDS: PortfolioContentCard[];
  DYNAMIC_CONTENT_SET_ACTION_CARDS: ActionContentCard[];
  DYNAMIC_CONTENT_SET_NOTIFICATIONS_CARDS: NotificationContentCard[];
};
type DynamicContentHandlers<PreciseKey = true> = Handlers<
  DynamicContentState,
  HandlersPayloads,
  PreciseKey
>;

const handlers: DynamicContentHandlers = {
  DYNAMIC_CONTENT_SET_PORTFOLIO_CARDS: (
    state: DynamicContentState,
    { payload }: { payload: PortfolioContentCard[] },
  ) => ({
    ...state,
    portfolioCards: payload,
  }),
  DYNAMIC_CONTENT_SET_ACTION_CARDS: (
    state: DynamicContentState,
    { payload }: { payload: ActionContentCard[] },
  ) => ({
    ...state,
    actionCards: payload,
  }),
  DYNAMIC_CONTENT_SET_NOTIFICATIONS_CARDS: (
    state: DynamicContentState,
    { payload }: { payload: NotificationContentCard[] },
  ) => ({
    ...state,
    notificationsCards: payload,
  }),
};

// Selectors

export const portfolioContentCardSelector = (state: { dynamicContent: DynamicContentState }) =>
  state.dynamicContent.portfolioCards;

export const actionContentCardSelector = (state: { dynamicContent: DynamicContentState }) =>
  state.dynamicContent.actionCards;

export const notificationsContentCardSelector = (state: { dynamicContent: DynamicContentState }) =>
  state.dynamicContent.notificationsCards;

// Exporting reducer

export default handleActions<DynamicContentState, HandlersPayloads[keyof HandlersPayloads]>(
  handlers as unknown as DynamicContentHandlers<false>,
  state,
);
