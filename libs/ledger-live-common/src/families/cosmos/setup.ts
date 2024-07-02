// Goal of this file is to inject all necessary device/signer dependency to coin-modules

import {
  CosmosAccount,
  TransactionStatus,
  createBridges,
  type Transaction,
} from "@ledgerhq/coin-cosmos";
import { CosmosCoinConfig } from "@ledgerhq/coin-cosmos/config";
import Transport from "@ledgerhq/hw-transport";
import type { Bridge } from "@ledgerhq/types-live";
import cosmosResolver from "@ledgerhq/coin-cosmos/signer/index";
import makeCliTools, { type CliTools } from "@ledgerhq/coin-cosmos/test/cli";
import { getCryptoCurrencyById } from "@ledgerhq/cryptoassets/currencies";
import { CreateSigner, createResolver, executeWithSigner } from "../../bridge/setup";
import { Resolver } from "../../hw/getAddress/types";
import { getCurrencyConfiguration } from "../../config";
import { CosmosApp } from "@zondax/ledger-cosmos-js";

const createSigner: CreateSigner<CosmosApp> = (transport: Transport) => {
  return new CosmosApp(transport);
};

const cosmos = getCryptoCurrencyById("cosmos");
const getCurrencyConfig = (): CosmosCoinConfig => {
  return getCurrencyConfiguration(cosmos);
};

const bridge: Bridge<Transaction, CosmosAccount, TransactionStatus> = createBridges(
  executeWithSigner(createSigner),
  getCurrencyConfig,
);

const resolver: Resolver = createResolver(createSigner, cosmosResolver);

const cliTools: CliTools = makeCliTools();

export { bridge, cliTools, resolver };
