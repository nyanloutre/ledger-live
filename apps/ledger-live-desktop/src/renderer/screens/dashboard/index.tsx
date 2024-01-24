import React, { useCallback, useMemo } from "react";
import { useFeature } from "@ledgerhq/live-config/featureFlags/index";
import { isAddressPoisoningOperation } from "@ledgerhq/live-common/operation";
import Box, { Card } from "~/renderer/components/Box";
import { accountsSelector, currenciesSelector } from "~/renderer/reducers/accounts";
import BalanceSummary from "./GlobalSummary";
import { colors } from "~/renderer/styles/theme";
import {
  counterValueCurrencySelector,
  hasInstalledAppsSelector,
  selectedTimeRangeSelector,
  hiddenNftCollectionsSelector,
} from "~/renderer/reducers/settings";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import TrackPage from "~/renderer/analytics/TrackPage";
import OperationsList from "~/renderer/components/OperationsList";
import AssetDistribution from "./AssetDistribution";
import ClearCacheBanner from "~/renderer/components/ClearCacheBanner";
import RecoverBanner from "~/renderer/components/RecoverBanner/RecoverBanner";
import { usePostOnboardingEntryPointVisibleOnWallet } from "@ledgerhq/live-common/postOnboarding/hooks/index";
import { useFilterTokenOperationsZeroAmount } from "~/renderer/actions/settings";
import { useSelector } from "react-redux";
import uniq from "lodash/uniq";
import EmptyStateInstalledApps from "~/renderer/screens/dashboard/EmptyStateInstalledApps";
import EmptyStateAccounts from "~/renderer/screens/dashboard/EmptyStateAccounts";
import { useRefreshAccountsOrderingEffect } from "~/renderer/actions/general";
import CurrencyDownStatusAlert from "~/renderer/components/CurrencyDownStatusAlert";
import PostOnboardingHubBanner from "~/renderer/components/PostOnboardingHub/PostOnboardingHubBanner";
import FeaturedButtons from "~/renderer/screens/dashboard/FeaturedButtons";
import { AccountLike, Operation } from "@ledgerhq/types-live";
import ActionCard from "~/renderer/components/ContentCards/ActionCard";
import { Carousel } from "@ledgerhq/react-ui";
import useTheme from "~/renderer/hooks/useTheme";

// This forces only one visible top banner at a time
export const TopBannerContainer = styled.div`
  z-index: 19;

  & > *:not(:first-child) {
    display: none;
  }
`;
export default function DashboardPage() {
  const { t } = useTranslation();
  const accounts = useSelector(accountsSelector);
  const currencies = useSelector(currenciesSelector);

  const theme = useTheme();

  const counterValue = useSelector(counterValueCurrencySelector);
  const selectedTimeRange = useSelector(selectedTimeRangeSelector);
  const hasInstalledApps = useSelector(hasInstalledAppsSelector);
  const totalAccounts = accounts.length;
  const portfolioExchangeBanner = useFeature("portfolioExchangeBanner");
  const totalCurrencies = useMemo(() => uniq(accounts.map(a => a.currency.id)).length, [accounts]);
  const totalOperations = useMemo(
    () => accounts.reduce((sum, a) => sum + a.operations.length, 0),
    [accounts],
  );
  const isPostOnboardingBannerVisible = usePostOnboardingEntryPointVisibleOnWallet();

  const showCarousel = hasInstalledApps && totalAccounts >= 0;
  useRefreshAccountsOrderingEffect({
    onMount: true,
  });
  const [shouldFilterTokenOpsZeroAmount] = useFilterTokenOperationsZeroAmount();
  const hiddenNftCollections = useSelector(hiddenNftCollectionsSelector);
  const filterOperations = useCallback(
    (operation: Operation, account: AccountLike) => {
      // Remove operations linked to address poisoning
      const removeZeroAmountTokenOp =
        shouldFilterTokenOpsZeroAmount && isAddressPoisoningOperation(operation, account);
      // Remove operations coming from an NFT collection considered spam
      const opFromBlacklistedNftCollection = operation?.nftOperations?.find(op =>
        hiddenNftCollections.includes(`${account.id}|${op?.contract}`),
      );
      return !opFromBlacklistedNftCollection && !removeZeroAmountTokenOp;
    },
    [hiddenNftCollections, shouldFilterTokenOpsZeroAmount],
  );
  return (
    <>
      <TopBannerContainer>
        <ClearCacheBanner />
        <CurrencyDownStatusAlert currencies={currencies} hideStatusIncidents />
      </TopBannerContainer>
      {showCarousel ? (
        <div
          style={{
            position: "fixed",
            bottom: "30px",
            left: "20px",
            width: "97.5%",
            zIndex: 10000,
            backdropFilter: "blur(15px)",
            borderRadius: "8px",
            backgroundColor: theme.colors.opacityPurple.c10,
          }}
        >
          <Carousel
            footerVariant="content-card"
            slides={[
              {
                id: 1,
                Component: () => (
                  <ActionCard
                    img=""
                    title="You're almost there !"
                    subtitle="Verify your identity to get your backup secure"
                    actions={{
                      cta: { label: "Maybe later", fct: () => {} },
                      secondary: { label: "Verify now", fct: () => {} },
                    }}
                  />
                ),
              },
              {
                id: 2,
                Component: () => (
                  <ActionCard
                    img=""
                    title="MyTitle"
                    subtitle="My Subtitle"
                    actions={{
                      cta: { label: "Do Some", fct: () => {} },
                      secondary: { label: "Do Some", fct: () => {} },
                    }}
                  />
                ),
              },
              {
                id: 3,
                Component: () => (
                  <ActionCard
                    img=""
                    title="MyTitle"
                    subtitle="My Subtitle"
                    actions={{
                      cta: { label: "Do Some", fct: () => {} },
                      secondary: { label: "Do Some", fct: () => {} },
                    }}
                  />
                ),
              },
            ]}
          />
        </div>
      ) : null}
      <RecoverBanner />
      {isPostOnboardingBannerVisible && <PostOnboardingHubBanner />}
      <FeaturedButtons />
      <TrackPage
        category="Portfolio"
        totalAccounts={totalAccounts}
        totalOperations={totalOperations}
        totalCurrencies={totalCurrencies}
        hasExchangeBannerCTA={!!portfolioExchangeBanner?.enabled}
      />
      <Box flow={7} id="portfolio-container" data-test-id="portfolio-container">
        {!hasInstalledApps ? (
          <EmptyStateInstalledApps />
        ) : totalAccounts > 0 ? (
          <>
            <BalanceSummary
              counterValue={counterValue}
              chartColor={colors.wallet}
              range={selectedTimeRange}
            />
            <AssetDistribution />
            {totalOperations > 0 && (
              <OperationsList
                t={t}
                accounts={accounts}
                title={t("dashboard.recentActivity")}
                withAccount
                withSubAccounts
                filterOperation={filterOperations}
              />
            )}
          </>
        ) : (
          <EmptyStateAccounts />
        )}
      </Box>
    </>
  );
}
