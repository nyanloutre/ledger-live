import { BigNumber } from "bignumber.js";
import {
  makeSync,
  makeScanAccounts,
  GetAccountShape,
  mergeOps,
  AccountShapeInfo,
} from "../../bridge/jsHelpers";
import { encodeAccountId } from "../../account";
import { CosmosAPI } from "./api/Cosmos";
import { encodeOperationId } from "../../operation";
import { CosmosOperation, CosmosMessage, CosmosTx } from "./types";
import type { OperationType } from "@ledgerhq/types-live";
import { getMainMessage } from "./helpers";
import { parseAmountStringToNumber } from "./logic";

const getBlankOperation = (tx: CosmosTx, fees: BigNumber, accountId: string): CosmosOperation => {
  return {
    id: "",
    hash: tx.txhash,
    type: "" as OperationType,
    value: new BigNumber(0),
    fee: fees,
    blockHash: null,
    blockHeight: parseInt(tx.height),
    senders: [] as string[],
    recipients: [] as string[],
    accountId,
    date: new Date(tx.timestamp),
    extra: {},
    transactionSequenceNumber: parseInt(tx?.tx?.auth_info?.signer_infos[0]?.sequence || "0"),
  };
};

const txToOps = (info: AccountShapeInfo, accountId: string, txs: CosmosTx[]): CosmosOperation[] => {
  const { address, currency } = info;
  const unitCode = currency.units[1].code;
  const ops: CosmosOperation[] = [];
  for (const tx of txs) {
    const amounts = tx?.tx?.auth_info?.fee?.amount;

    const fees = !amounts
      ? new BigNumber(0)
      : amounts.reduce((acc: BigNumber, curr: { denom: string; amount: string }) => {
          if (curr.denom === unitCode) {
            return acc.plus(curr.amount);
          }
          return acc;
        }, new BigNumber(0));

    const op: CosmosOperation = getBlankOperation(tx, fees, accountId);

    const messages: CosmosMessage[] = tx.logs.map(log => log.events).flat(1);

    const mainMessage = getMainMessage(messages);

    if (mainMessage === undefined) {
      // happens when we don't know this message type in our implementation, example : proposal_vote
      continue;
    }

    const correspondingMessages = messages.filter(m => m.type === mainMessage.type);

    switch (mainMessage.type) {
      case "transfer":
        // TODO: handle IBC transfers here
        for (const message of correspondingMessages) {
          const amount = message.attributes.find(attr => attr.key === "amount")?.value;
          const sender = message.attributes.find(attr => attr.key === "sender")?.value;
          const recipient = message.attributes.find(attr => attr.key === "recipient")?.value;
          if (amount && sender && recipient && amount.endsWith(unitCode)) {
            if (op.senders.indexOf(sender) === -1) op.senders.push(sender);
            if (op.recipients.indexOf(recipient) === -1) op.recipients.push(recipient);
            op.value = op.value.plus(parseAmountStringToNumber(amount, unitCode));
            if (sender === address) {
              op.type = "OUT";
            } else if (recipient === address) {
              op.type = "IN";
            }
          }
        }
        if (op.type === "OUT") {
          op.value = op.value.plus(fees);
        }
        break;

      case "withdraw_rewards": {
        op.type = "REWARD";
        const rewardShards: { amount: BigNumber; address: string }[] = [];
        let txRewardValue = new BigNumber(0);
        for (const message of correspondingMessages) {
          const validator = message.attributes.find(attr => attr.key === "validator")?.value;
          const amount = message.attributes.find(attr => attr.key === "amount")?.value;
          if (validator && amount && amount.endsWith(unitCode)) {
            const amountString = parseAmountStringToNumber(amount, unitCode);
            rewardShards.push({
              amount: new BigNumber(amountString),
              address: validator,
            });
            txRewardValue = txRewardValue.plus(amountString);
          }
        }
        op.value = txRewardValue;
        op.extra.validators = rewardShards;
        break;
      }
      case "delegate": {
        op.type = "DELEGATE";
        op.value = new BigNumber(fees);
        const delegateShards: { amount: BigNumber; address: string }[] = [];
        for (const message of correspondingMessages) {
          const amount = message.attributes.find(attr => attr.key === "amount")?.value;
          const validator = message.attributes.find(attr => attr.key === "validator")?.value;
          if (amount && validator && amount.endsWith(unitCode)) {
            delegateShards.push({
              amount: new BigNumber(parseAmountStringToNumber(amount, unitCode)),
              address: validator,
            });
          }
        }
        op.extra.validators = delegateShards;
        break;
      }
      case "redelegate": {
        op.type = "REDELEGATE";
        op.value = new BigNumber(fees);
        const redelegateShards: { amount: BigNumber; address: string }[] = [];
        for (const message of correspondingMessages) {
          const amount = message.attributes.find(attr => attr.key === "amount")?.value;
          const validatorDst = message.attributes.find(attr => attr.key === "destination_validator")
            ?.value;
          const validatorSrc = message.attributes.find(attr => attr.key === "source_validator")
            ?.value;
          if (amount && validatorDst && validatorSrc && amount.endsWith(unitCode)) {
            op.extra.sourceValidator = validatorSrc;
            redelegateShards.push({
              amount: new BigNumber(parseAmountStringToNumber(amount, unitCode)),
              address: validatorDst,
            });
          }
        }
        op.extra.validators = redelegateShards;
        break;
      }
      case "unbond": {
        op.type = "UNDELEGATE";
        op.value = new BigNumber(fees);
        const unbondShards: { amount: BigNumber; address: string }[] = [];
        for (const message of correspondingMessages) {
          const amount = message.attributes.find(attr => attr.key === "amount")?.value;
          const validator = message.attributes.find(attr => attr.key === "validator")?.value;
          if (amount && validator && amount.endsWith(unitCode)) {
            unbondShards.push({
              amount: new BigNumber(parseAmountStringToNumber(amount, unitCode)),
              address: validator,
            });
          }
        }
        op.extra.validators = unbondShards;
        break;
      }
    }

    if (tx.tx.body.memo != null) {
      op.extra.memo = tx.tx.body.memo;
    }
    op.id = encodeOperationId(accountId, tx.txhash, op.type);

    if (op.type) {
      ops.push(op);
    }
  }

  return ops;
};

export const getAccountShape: GetAccountShape = async info => {
  const { address, currency, derivationMode, initialAccount } = info;
  const accountId = encodeAccountId({
    type: "js",
    version: "2",
    currencyId: currency.id,
    xpubOrAddress: address,
    derivationMode,
  });

  const {
    accountInfo,
    balances,
    blockHeight,
    txs,
    delegations,
    redelegations,
    unbondings,
    withdrawAddress,
  } = await new CosmosAPI(currency.id).getAccountInfo(address, currency);

  const oldOperations = initialAccount?.operations || [];
  const newOperations = txToOps(info, accountId, txs);
  const operations = mergeOps(oldOperations, newOperations);
  let balance = balances;
  let delegatedBalance = new BigNumber(0);
  let pendingRewardsBalance = new BigNumber(0);
  let unbondingBalance = new BigNumber(0);

  for (const delegation of delegations) {
    delegatedBalance = delegatedBalance.plus(delegation.amount);
    balance = balance.plus(delegation.amount);

    pendingRewardsBalance = pendingRewardsBalance.plus(delegation.pendingRewards);
  }

  for (const unbonding of unbondings) {
    unbondingBalance = unbondingBalance.plus(unbonding.amount);
    balance = balance.plus(unbonding.amount);
  }

  let spendableBalance = balance.minus(unbondingBalance.plus(delegatedBalance));

  if (spendableBalance.lt(0)) {
    spendableBalance = new BigNumber(0);
  }

  const shape = {
    id: accountId,
    xpub: address,
    balance: balance,
    spendableBalance,
    operationsCount: operations.length,
    blockHeight,
    cosmosResources: {
      delegations,
      redelegations,
      unbondings,
      delegatedBalance,
      pendingRewardsBalance,
      unbondingBalance,
      withdrawAddress,
      sequence: accountInfo.sequence,
    },
  };

  if (shape.spendableBalance && shape.spendableBalance.lt(0)) {
    shape.spendableBalance = new BigNumber(0);
  }

  return { ...shape, operations };
};

export const scanAccounts = makeScanAccounts({ getAccountShape });
export const sync = makeSync({ getAccountShape });
