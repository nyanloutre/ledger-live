import { decodeAccountId, encodeAccountId } from "@ledgerhq/coin-framework/account/index";
import { GetAccountShape, makeSync, mergeOps } from "@ledgerhq/coin-framework/bridge/jsHelpers";
import { log } from "@ledgerhq/logs";
import { Account } from "@ledgerhq/types-live";
import BigNumber from "bignumber.js";
import flatMap from "lodash/flatMap";
import { fetchAccountInfo, fetchLastBlockNumber } from "./bridge/bridgeHelpers/api";
import { TonTransactionsList } from "./bridge/bridgeHelpers/api.types";
import { getTransactions, mapTxToOps } from "./bridge/bridgeHelpers/txn";
import { TonOperation } from "./types";

export const getAccountShape: GetAccountShape = async info => {
  const { address, rest, currency, derivationMode, initialAccount } = info;

  const publicKey = reconciliatePubkey(rest?.publicKey, initialAccount);

  const accountId = encodeAccountId({
    type: "js",
    version: "2",
    currencyId: currency.id,
    xpubOrAddress: publicKey,
    derivationMode,
  });

  log("debug", `Generation account shape for ${address}`);

  const newTxs: TonTransactionsList = { transactions: [], address_book: {} };
  const oldOps = (initialAccount?.operations ?? []) as TonOperation[];
  const { last_transaction_lt, balance } = await fetchAccountInfo(address);
  // if last_transaction_lt is empty, then there are no transactions in account
  if (last_transaction_lt != null) {
    if (oldOps.length === 0) {
      const tmpTxs = await getTransactions(address);
      newTxs.transactions.push(...tmpTxs.transactions);
      newTxs.address_book = { ...newTxs.address_book, ...tmpTxs.address_book };
    } else {
      // if they are the same, we have no new ops
      if (oldOps[0].extra.lt !== last_transaction_lt) {
        const tmpTxs = await getTransactions(address, oldOps[0].extra.lt);
        newTxs.transactions.push(...tmpTxs.transactions);
        newTxs.address_book = { ...newTxs.address_book, ...tmpTxs.address_book };
      }
    }
  }

  const operations = mergeOps(
    oldOps,
    flatMap(newTxs.transactions, mapTxToOps(accountId, address, newTxs.address_book)),
  );

  const blockHeight = await fetchLastBlockNumber();

  return {
    id: accountId,
    balance: new BigNumber(balance),
    spendableBalance: new BigNumber(balance),
    operations,
    blockHeight,
    xpub: publicKey,
  };
};

const postSync = (_initial: Account, synced: Account): Account => {
  const operations = synced.operations || [];
  const initialPendingOps = synced.pendingOperations || [];
  const pendingOperations = initialPendingOps.filter(pOp => !operations.some(o => o.id === pOp.id));
  return { ...synced, pendingOperations };
};

function reconciliatePubkey(publicKey?: string, initialAccount?: Account): string {
  if (publicKey?.length === 64) return publicKey;
  if (initialAccount) {
    if (initialAccount.xpub?.length === 64) return initialAccount.xpub;
    const { xpubOrAddress } = decodeAccountId(initialAccount.id);
    if (xpubOrAddress.length === 64) return xpubOrAddress;
  }
  throw Error("[ton] pubkey was not properly restored");
}

export const sync = makeSync({ getAccountShape, postSync });
