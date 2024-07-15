import test from "../../fixtures/common";
import { specs } from "../../utils/speculos";
import { Application } from "tests/page";
import { Account } from "tests/enum/Account";

const accounts: Account[][] = [[Account.ETH_1, Account.BTC_1]];

for (const [i, account] of accounts.entries()) {
  test.describe.parallel("Swap", () => {
    test.use({
      userdata: "speculos-tests-app",
      testName: `Swap from (${account[0].accountName}) to (${account[1].accountName})`,
      speculosCurrency: specs[account[0].currency.deviceLabel.replace(/ /g, "_")],
      speculosOffset: i,
    });

    test(`Swap ${account[0].currency.uiName} to ${account[1].currency.uiName}`, async ({
      page,
    }) => {
      const app = new Application(page);

      await app.layout.goToSwap();
      await app.swap.selectAccountToSwapFrom(account[0].accountName);
      await app.swap.sendMax();
      await app.swap.selectCurrencyToSwapTo(account[1].currency.uiName);
      //find a way to retrieve each target currency accounts name & balance to verify selected one
      await app.swap.selectExchangeQuote("changelly", "fixed");
      //await app.swap.confirmExchange();
      await new Promise(resolve => setTimeout(resolve, 1000));
      //await app.swap.selectCurrencyToSwapTo(account[1].currency.uiName);
    });
  });
}
