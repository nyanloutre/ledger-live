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
    // getPreloadStrategy: () => {},
    getPreloadStrategy: () => ({
      preloadMaxAge: 1 * 1000, // 1 second cache
    }),
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
      /*
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
      */
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