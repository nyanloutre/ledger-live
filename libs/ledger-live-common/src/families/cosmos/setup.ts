// Goal of this file is to inject all necessary device/signer dependency to coin-modules

import { CosmosCoinConfig } from "@ledgerhq/coin-cosmos/config";
import Transport from "@ledgerhq/hw-transport";
import type { Bridge } from "@ledgerhq/types-live";
import { CreateSigner, createResolver, executeWithSigner } from "../../bridge/setup";
import { Resolver } from "../../hw/getAddress/types";
import { getCurrencyConfiguration } from "../../config";
import { CosmosApp } from "@zondax/ledger-cosmos-js";
import { Transaction, CosmosAccount, TransactionStatus } from "@ledgerhq/coin-cosmos/types/index";
import { CosmosSigner } from "@ledgerhq/coin-cosmos/types/signer";
import makeCliTools from "@ledgerhq/coin-cosmos/cli";
import { createBridges } from "@ledgerhq/coin-cosmos/bridge/js";
import cosmosResolver from "@ledgerhq/coin-cosmos/hw-getAddress";
import Cosmos from "@ledgerhq/hw-app-cosmos";
import { CryptoCurrency } from "@ledgerhq/types-cryptoassets";

const createSigner: CreateSigner<CosmosSigner> = (transport: Transport) => {
  const cosmos = new CosmosApp(transport);
  const hwCosmos = new Cosmos(transport);
  return {
    getAddressAndPubKey: cosmos.getAddressAndPubKey.bind(cosmos),
    sign: cosmos.sign.bind(cosmos),
    getAddress: hwCosmos.getAddress.bind(hwCosmos),
  };
};
const getCurrencyConfig = (currency: CryptoCurrency): CosmosCoinConfig => {
  return getCurrencyConfiguration(currency);
};

const bridge: Bridge<Transaction, CosmosAccount, TransactionStatus> = createBridges(
  executeWithSigner(createSigner),
  getCurrencyConfig,
);

const resolver: Resolver = createResolver(createSigner, cosmosResolver);

// TODO: type CliTools
const cliTools = makeCliTools();

export { bridge, cliTools, resolver };
