import { BigNumber } from "bignumber.js";
import {
  AmountRequired,
  NotEnoughBalance,
  RecipientRequired,
  InvalidAddress,
  FeeTooHigh,
} from "@ledgerhq/errors";
import type {
  CosmosAccount,
  CosmosValidatorItem,
  StatusErrorMap,
  Transaction,
  CosmosCurrencyConfig,
} from "@ledgerhq/coin-cosmos/types/index";
import {
  scanAccounts,
  signOperation,
  broadcast,
  sync,
  isInvalidRecipient,
  makeAccountBridgeReceive,
} from "../../../bridge/mockHelpers";
import { defaultUpdateTransaction } from "@ledgerhq/coin-framework/bridge/jsHelpers";
import { setCosmosPreloadData, asSafeCosmosPreloadData } from "@ledgerhq/coin-cosmos/preloadedData";
import { getMainAccount } from "@ledgerhq/coin-framework/account/index";
import mockPreloadedData from "@ledgerhq/coin-cosmos/preloadedData.mock";
import type { Account, AccountBridge, CurrencyBridge } from "@ledgerhq/types-live";
// import { assignFromAccountRaw, assignToAccountRaw } from "../serialization";
// import {
//   assignFromAccountRaw,
//   assignToAccountRaw,
//   createBridges,
//   // type Transaction,
// } from "@ledgerhq/coin-cosmos";
// import { CosmosValidatorsManager } from "../CosmosValidatorsManager";
// import { getCryptoCurrencyById } from "../../../currencies";
import { CryptoCurrency } from "@ledgerhq/types-cryptoassets";
import { getCurrencyConfiguration } from "../../../config";
import cryptoFactory from "@ledgerhq/coin-cosmos/chain/chain";
import { assignFromAccountRaw, assignToAccountRaw } from "@ledgerhq/coin-cosmos/serialization";
// import { CosmosValidatorsManager } from "@ledgerhq/coin-cosmos/CosmosValidatorsManager";
// import cryptoFactory from "../chain/chain";

const receive = makeAccountBridgeReceive();

const defaultGetFees = (a, t) => (t.fees || new BigNumber(0)).times(t.gas || new BigNumber(0));

const createTransaction = (): Transaction => ({
  family: "cosmos",
  mode: "send",
  amount: new BigNumber(0),
  recipient: "",
  fees: null,
  gas: null,
  memo: null,
  validators: [],
  sourceValidator: null,
  networkInfo: null,
  useAllAmount: false,
});

const estimateMaxSpendable = ({ account, parentAccount, transaction }) => {
  const mainAccount = getMainAccount(account, parentAccount);
  const estimatedFees = transaction
    ? defaultGetFees(mainAccount, transaction)
    : new BigNumber(5000);
  return Promise.resolve(BigNumber.max(0, account.balance.minus(estimatedFees)));
};

const getTransactionStatus = (account: Account, t: Transaction) => {
  const errors: StatusErrorMap = {};
  const warnings: StatusErrorMap = {};
  const useAllAmount = !!t.useAllAmount;
  const estimatedFees = defaultGetFees(account, t);
  const totalSpent = useAllAmount ? account.balance : new BigNumber(t.amount).plus(estimatedFees);
  const amount = useAllAmount ? account.balance.minus(estimatedFees) : new BigNumber(t.amount);

  if (amount.gt(0) && estimatedFees.times(10).gt(amount)) {
    warnings.feeTooHigh = new FeeTooHigh();
  }

  // Fill up transaction errors...
  if (totalSpent.gt(account.balance)) {
    errors.amount = new NotEnoughBalance();
  }

  // Fill up recipient errors...
  if (t.mode === "send") {
    if (!t.recipient) {
      errors.recipient = new RecipientRequired("");
    } else if (isInvalidRecipient(t.recipient)) {
      errors.recipient = new InvalidAddress("");
    }
  }

  if (amount.eq(0)) {
    errors.amount = new AmountRequired();
  }

  return Promise.resolve({
    errors,
    warnings,
    estimatedFees,
    amount,
    totalSpent,
  });
};

const prepareTransaction = async (a: CosmosAccount, t: Transaction): Promise<Transaction> => {
  if (!t.networkInfo) {
    return {
      ...t,
      gas: new BigNumber(1),
      fees: new BigNumber(375),
      networkInfo: {
        family: "cosmos",
        fees: new BigNumber(500),
      },
    };
  }

  return t;
};

const accountBridge: AccountBridge<Transaction> = {
  estimateMaxSpendable,
  createTransaction,
  updateTransaction: defaultUpdateTransaction,
  getTransactionStatus,
  prepareTransaction,
  sync,
  receive,
  signOperation,
  broadcast,
  assignFromAccountRaw,
  assignToAccountRaw,
};
const currencyBridge: CurrencyBridge = {
  scanAccounts,
  preload: (currency: CryptoCurrency) => {
    const config = getCurrencyConfiguration(currency);
    setCosmosPreloadData("cosmos", mockPreloadedData);
    return Promise.resolve({ validators: mockPreloadedData, config });
  },
  hydrate: (
    data: { validators?: CosmosValidatorItem[]; config: CosmosCurrencyConfig },
    currency: CryptoCurrency,
  ) => {
    if (!data || typeof data !== "object") return;
    const relatedImpl = cryptoFactory(currency.id);
    relatedImpl.lcd = data.config.lcd;
    relatedImpl.minGasPrice = data.config.minGasPrice;
    relatedImpl.ledgerValidator = data.config.ledgerValidator;
    const { validators } = data;
    if (!validators || typeof validators !== "object" || !Array.isArray(validators)) return;
    // TODO : uncomment both
    // const cosmosValidatorsManager = new CosmosValidatorsManager(getCryptoCurrencyById("cosmos"));
    // cosmosValidatorsManager.hydrateValidators(validators);
    setCosmosPreloadData("cosmos", asSafeCosmosPreloadData(data));
  },
};
export default {
  currencyBridge,
  accountBridge,
};
