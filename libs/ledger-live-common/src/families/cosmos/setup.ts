// Goal of this file is to inject all necessary device/signer dependency to coin-modules

// import {
//   CosmosAccount,
//   TransactionStatus,
//   createBridges,
//   type Transaction,
// } from "@ledgerhq/coin-cosmos/lib/";
import { CosmosCoinConfig } from "@ledgerhq/coin-cosmos/config";
import Transport from "@ledgerhq/hw-transport";
import type { Bridge } from "@ledgerhq/types-live";
// import cosmosResolver from "@ledgerhq/coin-cosmos/signer/index";
// import makeCliTools, { type CliTools } from "@ledgerhq/coin-cosmos/test/cli";
import { getCryptoCurrencyById } from "@ledgerhq/cryptoassets/currencies";
import { CreateSigner, createResolver, executeWithSigner } from "../../bridge/setup";
import { Resolver } from "../../hw/getAddress/types";
import { getCurrencyConfiguration } from "../../config";
import { CosmosApp } from "@zondax/ledger-cosmos-js";
// import { Transaction } from "./types";
import { Transaction, CosmosAccount, TransactionStatus, CosmosSigner } from "@ledgerhq/coin-cosmos/types/index";
import makeCliTools from "@ledgerhq/coin-cosmos/cli";
import { createBridges } from "@ledgerhq/coin-cosmos/bridge/js";
import cosmosResolver from "@ledgerhq/coin-cosmos/lib/hw-getAddress"

/*
const createSigner: CreateSigner<CosmosSigner> = (transport: Transport) => {
    const trx = new Trx(transport);

  return {
    getAddress: (path: string, boolDisplay?: boolean) => trx.getAddress(path, boolDisplay),
    sign: (path: string, rawTxHex: string, tokenSignatures: string[]) =>
      trx.signTransaction(path, rawTxHex, tokenSignatures),
  };
  // return new CosmosApp(transport);
  const cosmos =  new CosmosApp(transport);
  return {
    getAddress: (path: number[], boolDisplay?: boolean) => {
      return cosmos.getAddressAndPubKey(path, chainPrefix)
    },
    sign: (path: string, rawTxHex: string, tokenSignatures: string[]) =>
      cosmos.sign(path, rawTxHex, tokenSignatures),
  }
};
*/

const createSigner: CreateSigner<CosmosSigner> = (transport: Transport) => {
  // return new CosmosApp(transport);

  // TODO: this one
  return {
    getAddress: (path: number[], boolDisplay?: boolean) => {
      return cosmos.getAddressAndPubKey(path, chainPrefix)
    },
    sign: (path: string, rawTxHex: string, tokenSignatures: string[]) =>
      cosmos.sign(path, rawTxHex, tokenSignatures),
  }
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

// TODO: type CliTools
const cliTools = makeCliTools();

export { bridge, cliTools, resolver };
