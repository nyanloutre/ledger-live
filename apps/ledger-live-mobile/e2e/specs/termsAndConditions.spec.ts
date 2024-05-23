import { expect } from "detox";
import { genAccount } from "@ledgerhq/live-common/mock/account";
import {
  getCryptoCurrencyById,
  setSupportedCurrencies,
} from "@ledgerhq/live-common/currencies/index";
import { loadAccounts, loadConfig } from "../bridge/server";
import PortfolioPage from "../models/wallet/portfolioPage";
import AccountPage from "../models/accounts/accountPage";
import AccountsPage from "../models/accounts/accountsPage";

import { scrollToId, tapByElement, tapById } from "../helpers";
import { Account } from "@ledgerhq/types-live";
import { CryptoCurrencyId } from "@ledgerhq/types-cryptoassets";
import { getElementByText, itifAndroid } from "../helpers";

let portfolioPage: PortfolioPage;
let accountPage: AccountPage;
let accountsPage: AccountsPage;

const testedCurrencies: CryptoCurrencyId[] = ["bitcoin"]; //, "ethereum", "cosmos"
const testAccounts = testedCurrencies.map(currencyId =>
  genAccount("mock" + currencyId, { currency: getCryptoCurrencyById(currencyId) }),
);
setSupportedCurrencies(testedCurrencies);

describe("Load accounts", () => {
  beforeAll(async () => {
    loadConfig("onboardingcompleted", true);
    loadAccounts(testAccounts);
    portfolioPage = new PortfolioPage();
    accountPage = new AccountPage();
    accountsPage= new AccountsPage();
    await portfolioPage.waitForPortfolioPageToLoad();
  });

  it("go to terms and conditions", async () => {
   // await sett
    await expect(portfolioPage.portfolioSettingsButton()).toBeVisible();
    await expect(portfolioPage.emptyPortfolioList()).toBeVisible();
  });
});
