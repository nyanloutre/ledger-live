import { expect } from "detox";
import PortfolioPage from "../models/wallet/portfolioPage";
import MarketPage from "../models/market/marketPage";
import GetDevicePage from "../models/discover/getDevicePage";
import { loadConfig } from "../bridge/server";
import { getElementByText } from "../helpers";

let portfolioPage: PortfolioPage;
let marketPage: MarketPage;
let getDevicePage: GetDevicePage;

describe("Market page for user with no device", () => {
  beforeAll(async () => {
    await loadConfig("1accountEth", true);
    portfolioPage = new PortfolioPage();
    marketPage = new MarketPage();
    getDevicePage = new GetDevicePage();
    await portfolioPage.waitForPortfolioPageToLoad();
  });

  $TmsLink("B2CQA-1880");
  it("should find the researched crypto", async () => {
    await portfolioPage.openWalletTabMarket();
    await marketPage.searchAsset("btc");
    await expect(getElementByText("Bitcoin (BTC)")).toBeVisible();
  });

  $TmsLink("B2CQA-1879");
  it("should filter starred asset in the list", async () => {
    await marketPage.openAssetPage("Bitcoin (BTC)");
    await marketPage.starFavoriteCoin();
    await marketPage.backToAssetList();
    await marketPage.filterStaredAsset();
    await expect(getElementByText("Bitcoin (BTC)")).toBeVisible();
  });

  $TmsLink("B2CQA-1881");
  it("should redirect to the buy a nano marketplace page", async () => {
    await marketPage.openAssetPage("Bitcoin (BTC)");
    await marketPage.buyAsset();
    await getDevicePage.buyNano();
    // Todo: Fix webview check tests
    // await getDevicePage.expectBuyNanoWebPage();
  });
});
