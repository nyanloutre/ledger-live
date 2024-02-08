import { getCryptoCurrencyById } from "@ledgerhq/cryptoassets";
import { BigNumber } from "bignumber.js";
import IconService from "icon-sdk-js";
import type { CryptoCurrency } from "@ledgerhq/types-cryptoassets";
import type { Account } from "@ledgerhq/types-live";
import type { IconAccount, Transaction } from "./types";
const { IconAmount } = IconService;
import { BERLIN_TESTNET_NID, MAINNET_NID } from "./constants";
import { formatCurrencyUnit } from "@ledgerhq/coin-framework/currencies/index";

/**
 * @param {string|number|BigNumber} value value as loop
 * @returns {BigNumber} value as ICX
 */
export const convertLoopToIcx = (value: any): BigNumber => {
  return new BigNumber(IconAmount.fromLoop(value, IconAmount.Unit.ICX.toString()));
};

/**
 * @param {string|number|BigNumber} value value as ICX
 * @returns {BigNumber} value as loop
 */
export const convertICXtoLoop = (value: any): BigNumber => {
  return new BigNumber(IconAmount.toLoop(value, IconAmount.Unit.ICX.toString()));
};

export const EXISTENTIAL_DEPOSIT = convertICXtoLoop(0.00125);
export const EXISTENTIAL_DEPOSIT_RECOMMENDED_MARGIN = convertICXtoLoop(0);
export const FEES_SAFETY_BUFFER = convertICXtoLoop(0.00125); // Arbitrary buffer for paying fees of next transactions
export const MAX_AMOUNT_INPUT = convertICXtoLoop(5000);
/**
 * Returns true if address is a valid md5
 *
 * @param {string} address
 */
export const isValidAddress = (address: string): boolean => {
  if (!address) return false;
  return !!address.match(/^[a-z0-9]{42}$/);
};

/**
 * Returns true if transaction is a self transaction
 *
 * @param {Account} a
 * @param {Transaction} t
 */
export const isSelfTransaction = (a: Account, t: Transaction): boolean => {
  return t.recipient === a.freshAddress;
};

/**
 * Returns nonce for an account
 *
 * @param {Account} a
 */
export const getNonce = (a: IconAccount): number => {
  const lastPendingOp = a.pendingOperations[0];

  const nonce = Math.max(
    a.iconResources?.nonce || 0,
    lastPendingOp && typeof lastPendingOp.transactionSequenceNumber === "number"
      ? lastPendingOp.transactionSequenceNumber + 1
      : 0,
  );

  return nonce;
};

/**
 * Returns true if the current currency is testnet
 *
 * @param {currency} CryptoCurrency
 */
export function isTestnet(currency: CryptoCurrency): boolean {
  return getCryptoCurrencyById(currency.id).isTestnetFor ? true : false;
}

export function getNid(currency: CryptoCurrency): number {
  let nid = MAINNET_NID;
  if (isTestnet(currency)) {
    nid = BERLIN_TESTNET_NID;
  }
  return nid;
}

export const roundedLoopAmount = (a: Account, amount: BigNumber | string | number): BigNumber => {
  const number = formatCurrencyUnit(a.unit, new BigNumber(amount));
  return convertICXtoLoop(number);
};

/**
 * Calculate the real spendable
 *
 * @param {*} a
 * @param {*} t
 */
const calculateMaxSend = (a: Account, t: Transaction): BigNumber => {
  const amount = a.spendableBalance.minus(t.fees || 0);
  return amount.lt(0) ? new BigNumber(0) : roundedLoopAmount(a, amount);
};

/**
 * Calculates correct amount if useAllAmount
 *
 * @param {*} param
 */
export const calculateAmount = ({ a, t }: { a: IconAccount; t: Transaction }): BigNumber => {
  let amount = t.amount;

  if (t.useAllAmount) {
    switch (t.mode) {
      case "send":
        amount = calculateMaxSend(a, t);
        break;

      default:
        amount = a.spendableBalance.minus(t.fees || 0);
        break;
    }
  } else if (t.amount.gt(MAX_AMOUNT_INPUT)) {
    return new BigNumber(MAX_AMOUNT_INPUT);
  }

  return amount.lt(0) ? new BigNumber(0) : amount;
};

export const getMinimumBalance = (a: Account): BigNumber => {
  const lockedBalance = a.balance.minus(a.spendableBalance);
  return lockedBalance.lte(EXISTENTIAL_DEPOSIT)
    ? EXISTENTIAL_DEPOSIT.minus(lockedBalance)
    : new BigNumber(0);
};
