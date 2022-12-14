import { BigNumber } from "bignumber.js";
import {
  NotEnoughBalance,
  RecipientRequired,
  InvalidAddress,
  FeeNotLoaded,
  InvalidAddressBecauseDestinationIsAlsoSource,
  AmountRequired,
} from "@ledgerhq/errors";
import type { Account } from "@ledgerhq/types-live";
import type { Transaction, TransactionStatus } from "./types";

import { isSelfTransaction, isValidAddress } from "./logic";
import { IconVoteRequired } from "../../errors";

const getTransactionStatus = async (
  a: Account,
  t: Transaction
): Promise<TransactionStatus> => {
  const errors: any = {};
  const warnings: any = {};
  const useAllAmount = !!t.useAllAmount;

  if (!t.fees) {
    errors.fees = new FeeNotLoaded();
  }

  const estimatedFees = t.fees || new BigNumber(0);

  if (estimatedFees.gt(a.balance)) {
    errors.amount = new NotEnoughBalance();
  }

  const totalSpent = useAllAmount
    ? a.balance
    : new BigNumber(t.amount).plus(estimatedFees);

  const amount = useAllAmount
    ? a.balance.minus(estimatedFees)
    : new BigNumber(t.amount);



  if (totalSpent.gt(a.balance)) {
    errors.amount = new NotEnoughBalance();
  }

  if (t.mode === 'send') {
    if (amount.lte(0) && !t.useAllAmount) {
      errors.amount = new AmountRequired();
    }

    if (!t.recipient) {
      errors.recipient = new RecipientRequired();
    } else if (isSelfTransaction(a, t)) {
      errors.recipient = new InvalidAddressBecauseDestinationIsAlsoSource();
    } else if (!isValidAddress(t.recipient)) {
      errors.recipient = new InvalidAddress();
    }
  } else if (t.mode === 'freeze' || t.mode === 'unfreeze' ) {
    if (amount.lte(0) && !t.useAllAmount) {
      errors.amount = new AmountRequired();
    }
  }

  if (t.mode === 'vote') {
    if (t.votes?.length === 0) {
      errors.vote = new IconVoteRequired();
    }
  }


  return Promise.resolve({
    errors,
    warnings,
    estimatedFees,
    amount,
    totalSpent,
  });
};

export default getTransactionStatus;
