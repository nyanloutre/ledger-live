import network from "@ledgerhq/live-network/network";
import { BigNumber } from "bignumber.js";
import type { Operation, OperationType } from "@ledgerhq/types-live";
import { getEnv } from "@ledgerhq/live-env";
import { encodeOperationId } from "../../../operation";
import { CryptoCurrency } from "@ledgerhq/types-cryptoassets";
import { LIMIT } from "../constants";
import { isTestnet } from "../logic";
import { AccountType, IconTransactionType } from "./api-type";
import { log } from "@ledgerhq/logs";
import { IconOperation } from "../types";
import querystring from "querystring";

/**
 * Returns Testnet API URL if the current currency is testnet
 *
 * @param {currency} currency
 */
function getApiUrl(currency: CryptoCurrency): string {
  let apiUrl = getEnv("ICON_INDEXER_ENDPOINT");
  if (isTestnet(currency)) {
    apiUrl = getEnv("ICON_TESTNET_INDEXER_ENDPOINT");
  }
  return apiUrl;
}

async function post(url: string, body: Record<string, any>) {
  const { data } = await network({
    method: "POST",
    url,
    data: body,
  });

  if (data.Error) {
    log("icon-error", data.Error, {
      url,
      body,
    });
    throw new Error(data.Error);
  }

  return data;
}

async function fetch(url: string) {
  const { data } = await network({
    method: "GET",
    url,
  });

  if (data.Error) {
    log("icon-error", data.Error, {
      url,
    });
    throw new Error(data.Error);
  }

  return data;
}

export const getAccount = async (
  addr: string,
  currency: CryptoCurrency,
): Promise<AccountType | null> => {
  try {
    const query = querystring.stringify({
      address: addr,
    });
    const data = await fetch(`${getApiUrl(currency)}/addresses/details/${addr}?${query}`);
    return data;
  } catch (error) {
    return null;
  }
};

export const getCurrentBlockHeight = async (currency: CryptoCurrency): Promise<number> => {
  const data = await fetch(`${getApiUrl(currency)}/blocks`);
  return data?.[0].number;
};

/**
 * Returns true if account is the signer
 */
function isSender(transaction: IconTransactionType, addr: string): boolean {
  return transaction.from_address === addr;
}

/**
 * Map transaction to an Operation Type
 */
function getOperationType(transaction: IconTransactionType, addr: string): OperationType {
  return isSender(transaction, addr) ? "OUT" : "IN";
}

/**
 * Map transaction to a correct Operation Value (affecting account balance)
 */
function getOperationValue(transaction: IconTransactionType, addr: string): BigNumber {
  if (isSender(transaction, addr)) {
    return transaction.value
      ? new BigNumber(transaction.value).plus(transaction.transaction_fee)
      : new BigNumber(0);
  } else {
    return transaction.value ? new BigNumber(transaction.value) : new BigNumber(0);
  }
}

/**
 * Map the ICON history transaction to a Ledger Live Operation
 */
function txToOperation(
  accountId: string,
  addr: string,
  transaction: IconTransactionType,
): IconOperation {
  const type = getOperationType(transaction, addr);

  return {
    id: encodeOperationId(accountId, transaction.hash, type),
    accountId,
    fee: new BigNumber(transaction.transaction_fee),
    value: getOperationValue(transaction, addr),
    type,
    hash: transaction.hash,
    blockHash: null,
    blockHeight: transaction.block_number,
    date: new Date(transaction.block_timestamp / 1000),
    senders: [transaction.from_address],
    recipients: [transaction.to_address],
    extra: {},
    hasFailed: transaction.status !== "0x1",
  };
}

/**
 * Fetch operation list
 */
export const getOperations = async (
  accountId: string,
  addr: string,
  skip: number,
  currency: CryptoCurrency,
): Promise<Operation[]> => {
  return await fetchOperationList(accountId, addr, skip, currency);
};

export const fetchOperationList = async (
  accountId: string,
  addr: string,
  skip: number,
  currency: CryptoCurrency,
  prevOperations: IconOperation[] = [],
): Promise<IconOperation[]> => {
  const data = await getTxHistory(addr, skip, currency);
  const operations = data.map((transaction: IconTransactionType) =>
    txToOperation(accountId, addr, transaction),
  );

  const mergedOp = [...prevOperations, ...operations];
  if (operations.length < LIMIT) {
    return mergedOp.filter(Boolean).sort((a: any, b: any) => b.date - a.date);
  }

  return await fetchOperationList(accountId, addr, skip + LIMIT, currency, mergedOp);
};

export const getTxHistory = async (
  addr: string,
  skip: number,
  currency: CryptoCurrency,
  limit: number = LIMIT,
): Promise<IconTransactionType[]> => {
  const query = querystring.stringify({
    address: addr,
    skip: skip,
    limit: limit,
  });

  const data = await fetch(`${getApiUrl(currency)}/transactions/address/${addr}?${query}`);
  return data;
};
