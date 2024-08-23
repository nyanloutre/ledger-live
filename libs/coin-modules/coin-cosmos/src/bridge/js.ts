import { CryptoCurrency } from "@ledgerhq/types-cryptoassets";
import { getCryptoCurrencyById } from "@ledgerhq/cryptoassets";
import type { AccountBridge, CurrencyBridge } from "@ledgerhq/types-live";
import type {
  CosmosAccount,
  CosmosCurrencyConfig,
  // CosmosSigner,
  CosmosValidatorItem,
  Transaction,
  TransactionStatus,
} from "../types";
import { asSafeCosmosPreloadData, setCosmosPreloadData } from "../preloadedData";
import { CosmosValidatorsManager } from "../CosmosValidatorsManager";
import { estimateMaxSpendable } from "../estimateMaxSpendable";
import getTransactionStatus from "../getTransactionStatus";
import { prepareTransaction } from "../prepareTransaction";
import { updateTransaction } from "../updateTransaction";
import { createTransaction } from "../createTransaction";
import { getAccountShape } from "../synchronisation";
import { buildSignOperation } from "../signOperation";
import cryptoFactory from "../chain/chain";
import { CosmosAPI } from "../api/Cosmos";
import {
  assignFromAccountRaw,
  assignToAccountRaw,
  fromOperationExtraRaw,
  toOperationExtraRaw,
} from "../serialization";
import {
  makeAccountBridgeReceive,
  makeScanAccounts,
  makeSync,
} from "@ledgerhq/coin-framework/bridge/jsHelpers";
import { CosmosCoinConfig, getCoinConfig, setCoinConfig } from "../config";
import getAddressWrapper from "@ledgerhq/coin-framework/bridge/getAddressWrapper";
import { CoinConfig } from "@ledgerhq/coin-framework/config";
import { SignerContext } from "@ledgerhq/coin-framework/signer";
import resolver from "../hw-getAddress";
import { CosmosSigner } from "../types/signer";

const sync = makeSync({ getAccountShape });

function buildCurrencyBridge(signerContext: SignerContext<CosmosSigner>): CurrencyBridge {
  console.log({ signerContextFromBuildCurrencyBridge: signerContext });

  const getAddress = resolver(signerContext);
  // const getAddress = signerGetAddress(signerContext);
  // const receive = makeAccountBridgeReceive(getAddressWrapper(getAddress));

  const scanAccounts = makeScanAccounts({
    getAccountShape,
    // getAddressFn: getAddress
    getAddressFn: getAddressWrapper(getAddress),
  });

  const getPreloadStrategy = () => ({
    preloadMaxAge: 30 * 1000,
  });

  return {
    getPreloadStrategy,
    preload: async (currency: CryptoCurrency) => {
      const config = getCoinConfig();
      const cosmosValidatorsManager = new CosmosValidatorsManager(
        getCryptoCurrencyById(currency.id),
        { endPoint: (config as unknown as CosmosCurrencyConfig).lcd },
      );
      const validators = await cosmosValidatorsManager.getValidators();
      setCosmosPreloadData(currency.id, {
        validators,
      });

      return Promise.resolve({
        validators,
        config,
      });
    },
    hydrate: (
      data: { validators?: CosmosValidatorItem[]; config: CosmosCurrencyConfig },
      currency: CryptoCurrency,
    ) => {
      if (!data || typeof data !== "object") return;
      const relatedImpl = cryptoFactory(currency.id);
      relatedImpl.lcd = data.config.lcd;
      relatedImpl.minGasPrice = data.config.minGasPrice;
      relatedImpl.ledgerValidator = data.config?.ledgerValidator;
      const { validators } = data;
      if (!validators || typeof validators !== "object" || !Array.isArray(validators)) return;
      const cosmosValidatorsManager = new CosmosValidatorsManager(
        getCryptoCurrencyById(currency.id),
      );
      cosmosValidatorsManager.hydrateValidators(validators);
      setCosmosPreloadData(currency.id, asSafeCosmosPreloadData(data));
    },
    scanAccounts,
  };
}

function buildAccountBridge(
  signerContext: SignerContext<CosmosSigner>,
): AccountBridge<Transaction, CosmosAccount, TransactionStatus> {
  const getAddress = resolver(signerContext);

  // const getAddress = signerGetAddress(signerContext);

  const receive = makeAccountBridgeReceive(getAddressWrapper(getAddress));
  const signOperation = buildSignOperation(signerContext);
  console.log({ signerContext });

  return {
    createTransaction,
    updateTransaction,
    prepareTransaction,
    estimateMaxSpendable,
    getTransactionStatus,
    sync,
    receive,
    signOperation,
    assignFromAccountRaw,
    assignToAccountRaw,
    broadcast: async ({ account, signedOperation }) => {
      return new CosmosAPI(account.currency.id).broadcast({
        signedOperation,
      });
    },
    fromOperationExtraRaw,
    toOperationExtraRaw,
  };
}

export function createBridges(
  signerContext: SignerContext<CosmosSigner>,
  coinConfig: CoinConfig<CosmosCoinConfig>,
) {
  setCoinConfig(coinConfig);

  return {
    currencyBridge: buildCurrencyBridge(signerContext),
    accountBridge: buildAccountBridge(signerContext),
  };
}
/*
OLD
import { CryptoCurrency } from "@ledgerhq/types-cryptoassets";
import { getCryptoCurrencyById } from "@ledgerhq/cryptoassets";
import type { AccountBridge, CurrencyBridge } from "@ledgerhq/types-live";
import type {
  CosmosAccount,
  CosmosCurrencyConfig,
  CosmosValidatorItem,
  Transaction,
  TransactionStatus,
} from "../types";
import { asSafeCosmosPreloadData, setCosmosPreloadData } from "../preloadedData";
import { makeAccountBridgeReceive } from "../../../bridge/jsHelpers";
import { CosmosValidatorsManager } from "../CosmosValidatorsManager";
import { estimateMaxSpendable } from "../estimateMaxSpendable";
import getTransactionStatus from "../getTransactionStatus";
import { getCurrencyConfiguration } from "../../../config";
import { prepareTransaction } from "../prepareTransaction";
import { updateTransaction } from "../updateTransaction";
import { createTransaction } from "../createTransaction";
import { sync, scanAccounts } from "../synchronisation";
import { signOperation } from "../signOperation";
import cryptoFactory from "../chain/chain";
import { CosmosAPI } from "../api/Cosmos";
import {
  assignFromAccountRaw,
  assignToAccountRaw,
  fromOperationExtraRaw,
  toOperationExtraRaw,
} from "../serialization";

const receive = makeAccountBridgeReceive();

const getPreloadStrategy = _currency => ({
  preloadMaxAge: 30 * 1000,
});

const currencyBridge: CurrencyBridge = {
  getPreloadStrategy,
  preload: async (currency: CryptoCurrency) => {
    const config = getCurrencyConfiguration(currency);
    const cosmosValidatorsManager = new CosmosValidatorsManager(
      getCryptoCurrencyById(currency.id),
      { endPoint: (config as unknown as CosmosCurrencyConfig).lcd },
    );
    const validators = await cosmosValidatorsManager.getValidators();
    setCosmosPreloadData(currency.id, {
      validators,
    });

    return Promise.resolve({
      validators,
      config,
    });
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
    const cosmosValidatorsManager = new CosmosValidatorsManager(getCryptoCurrencyById(currency.id));
    cosmosValidatorsManager.hydrateValidators(validators);
    setCosmosPreloadData(currency.id, asSafeCosmosPreloadData(data));
  },
  scanAccounts,
};

const accountBridge: AccountBridge<Transaction, CosmosAccount, TransactionStatus> = {
  createTransaction,
  updateTransaction,
  prepareTransaction,
  estimateMaxSpendable,
  getTransactionStatus,
  sync,
  receive,
  signOperation,
  assignFromAccountRaw,
  assignToAccountRaw,
  broadcast: async ({ account, signedOperation }) => {
    return new CosmosAPI(account.currency.id).broadcast({
      signedOperation,
    });
  },
  fromOperationExtraRaw,
  toOperationExtraRaw,
};

export default {
  currencyBridge,
  accountBridge,
};


*/
