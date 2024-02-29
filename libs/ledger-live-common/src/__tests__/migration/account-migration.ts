import { readFileSync, existsSync } from "fs";
import BigNumber from "bignumber.js";
import { CryptoCurrencyId } from "@ledgerhq/types-cryptoassets";
import { Account } from "@ledgerhq/types-live";
import { argv } from "yargs";
import {
  findCryptoCurrencyById,
  getCryptoCurrencyById,
  setSupportedCurrencies,
} from "../../currencies";
import { encodeAccountId, toAccountRaw } from "../../account";
import { firstValueFrom, reduce } from "rxjs";
import { getAccountBridgeByFamily } from "../../bridge/impl";
import { migrationAddresses as defaultAddresses } from "./addresses";
import { LiveConfig } from "@ledgerhq/live-config/LiveConfig";
import { liveConfig } from "../../config/sharedConfig";

// mandatory to run the script
setSupportedCurrencies([
  "bitcoin",
  "ethereum",
  "bsc",
  "polkadot",
  "ripple",
  "litecoin",
  "polygon",
  "bitcoin_cash",
  "stellar",
  "dogecoin",
  "cosmos",
  "dash",
  "tron",
  "tezos",
  "elrond",
  "ethereum_classic",
  "zcash",
  "decred",
  "digibyte",
  "algorand",
  "avalanche_c_chain",
  "qtum",
  "bitcoin_gold",
  "komodo",
  "pivx",
  "zencash",
  "vertcoin",
  "peercoin",
  "viacoin",
  "bitcoin_testnet",
  "ethereum_ropsten",
  "ethereum_goerli",
  "ethereum_sepolia",
  "ethereum_holesky",
  "crypto_org",
  "crypto_org_croeseid",
  "celo",
  "hedera",
  "cardano",
  "solana",
  "osmosis",
  "fantom",
  "moonbeam",
  "cronos",
  "songbird",
  "flare",
  "near",
  "optimism",
  "optimism_goerli",
  "arbitrum",
  "arbitrum_sepolia",
  "rsk",
  "bittorrent",
  "energy_web",
  "astar",
  "metis",
  "boba",
  "moonriver",
  "velas_evm",
  "syscoin",
  "axelar",
  "stargaze",
  "secret_network",
  "umee",
  "desmos",
  "dydx",
  "onomy",
  "sei_network",
  "persistence",
  "quicksilver",
  "vechain",
  "internet_computer",
  "klaytn",
  "polygon_zk_evm",
  "polygon_zk_evm_testnet",
  "base",
  "base_sepolia",
  "stacks",
  "telos_evm",
  "coreum",
  "injective",
  "casper",
  "neon_evm",
  "lukso",
  "filecoin",
  "linea",
  "linea_goerli",
]);

LiveConfig.setConfig(liveConfig);
LiveConfig.setAppinfo({
  environment: "ci",
  platform: "headless-linux",
});

const args = argv;

type Args = {
  /**
   * comma seperated currencyId
   * eg --currencies ethereum,polygon,bitcoin
   */
  currencies?: CryptoCurrencyId;
  /**
   * absolute path to the input json file
   * must only contain an array of raw accounts
   */
  inputFile?: string;
};

const { currencies, inputFile } = args as Args;

const getMockAccount = (currencyId: string, address: string): Account => {
  const currency = getCryptoCurrencyById(currencyId);

  return {
    name: "mockAccount",
    type: "Account",
    id: encodeAccountId({
      type: "js",
      version: "",
      currencyId: currencyId,
      xpubOrAddress: address,
      derivationMode: "",
    }),
    freshAddress: address,
    xpub: address,
    derivationMode: "",
    operations: [],
    currency,
    creationDate: new Date(0),
    unit: currency.units[0],
    balance: new BigNumber(0),
    spendableBalance: new BigNumber(0),
    blockHeight: 0,
    freshAddressPath: "",
    freshAddresses: [],
    seedIdentifier: "",
    index: 0,
    starred: false,
    used: true,
    operationsCount: 0,
    pendingOperations: [],
    lastSyncDate: new Date(0),
    balanceHistoryCache: {
      HOUR: { latestDate: 0, balances: [] },
      DAY: { latestDate: 0, balances: [] },
      WEEK: { latestDate: 0, balances: [] },
    },
    swapHistory: [],
  };
};

export const testSync = async (currencyId: string, xpubOrAddress: string) => {
  const mockAccount = getMockAccount(currencyId, xpubOrAddress);
  const accountBrige = getAccountBridgeByFamily(mockAccount.currency!.family, mockAccount.id);

  const syncedAccount = await firstValueFrom(
    accountBrige
      .sync(mockAccount, { paginationConfig: {}, blacklistedTokenIds: [] })
      .pipe(reduce((acc, f: (arg0: Account) => Account) => f(acc), mockAccount)),
  );

  const accountRaw = toAccountRaw(syncedAccount);

  return accountRaw;
};

(async () => {
  if (inputFile && !existsSync(inputFile)) {
    throw new Error("Incorrect file path: file does not exist");
  }

  // list of addresses from input file
  const inputFileAddresses = [];

  // if there's a input file we parse it
  if (inputFile && existsSync(inputFile)) {
    const content = JSON.parse(readFileSync(inputFile, "utf8"));
    inputFileAddresses.concat(
      content.map(account => ({
        currencyId: account.currencyId,
        address: account.freshAddress,
      })),
    );
  }

  // we only read --currencies options if there's no input file
  const currencyIds = !inputFile && currencies?.split(",");

  // throw error if there's invalid currency ids passed in the cli
  if (currencyIds && !currencyIds.every(findCryptoCurrencyById)) {
    throw new Error("Invalid currency id");
  }

  // if --inputFile we use the addresses from the input file otherwise from `addresses.ts`
  const migrationAddresses = inputFileAddresses.length ? inputFileAddresses : defaultAddresses;

  const syncedAccounts = await Promise.allSettled(
    migrationAddresses
      .filter(addresses => {
        if (currencyIds) {
          return currencyIds.includes(addresses.currencyId);
        }

        return true;
      })
      .map(async migrationAddress => {
        return testSync(
          migrationAddress.currencyId,
          migrationAddress.address ?? migrationAddress.xpub,
        );
      }),
  );

  const response = syncedAccounts.map(account => {
    if (account.status === "fulfilled") {
      return account.value;
    } else {
      return account.reason;
    }
  });

  // eslint-disable-next-line no-console
  console.log(JSON.stringify(response, null, 3));

  return response;
})();
