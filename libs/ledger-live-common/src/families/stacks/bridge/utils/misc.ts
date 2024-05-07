import { BigNumber } from "bignumber.js";
import flatMap from "lodash/flatMap";
import { Account, Operation, OperationType } from "@ledgerhq/types-live";
import {
  makeUnsignedSTXTokenTransfer,
  UnsignedTokenTransferOptions,
  createMessageSignature,
  getAddressFromPublicKey,
} from "@stacks/transactions";

import { GetAccountShape } from "../../../../bridge/jsHelpers";
import { decodeAccountId, encodeAccountId } from "../../../../account";
import {
  fetchBalances,
  fetchBlockHeight,
  fetchFullMempoolTxs,
  fetchFullTxs,
  fetchNonce,
} from "../../bridge/utils/api";
import { StacksNetwork, TransactionResponse } from "./api.types";
import { getCryptoCurrencyById } from "../../../../currencies";
import { encodeOperationId, encodeSubOperationId } from "../../../../operation";
import { StacksOperation } from "../../types";
import invariant from "invariant";
import { log } from "@ledgerhq/logs";

export const getTxToBroadcast = async (
  operation: StacksOperation,
  signature: string,
  rawData: Record<string, any>,
): Promise<Buffer> => {
  const {
    value,
    recipients,
    fee,
    extra: { memo },
  } = operation;

  const { anchorMode, network, xpub } = rawData;

  const options: UnsignedTokenTransferOptions = {
    amount: BigNumber(value).minus(fee).toFixed(),
    recipient: recipients[0],
    anchorMode,
    memo,
    network: StacksNetwork[network],
    publicKey: xpub,
    fee: BigNumber(fee).toFixed(),
    nonce: operation.transactionSequenceNumber ?? 0,
  };

  const tx = await makeUnsignedSTXTokenTransfer(options);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore need to ignore the TS error here
  tx.auth.spendingCondition.signature = createMessageSignature(signature);

  return Buffer.from(tx.serialize());
};

export const getUnit = () => getCryptoCurrencyById("stacks").units[0];

export const getAddress = (
  a: Account,
): {
  address: string;
  derivationPath: string;
} => ({ address: a.freshAddress, derivationPath: a.freshAddressPath });

export const mapTxToOps =
  (accountID: string) =>
  (tx: TransactionResponse): StacksOperation[] => {
    try {
      const {
        tx_id,
        fee_rate,
        nonce,
        block_height,
        burn_block_time,
        sender_address,
        block_hash: blockHash,
      } = tx.tx;
      const { stx_received: receivedValue, stx_sent: sentValue, stx_transfers } = tx;

      const allRecipients = stx_transfers.map(t => t.recipient);
      const recipients = allRecipients.length === 1 ? [allRecipients[0]] : [];

      const memoHex = tx.tx.token_transfer?.memo;
      let memo: string = "";
      if (memoHex?.substring(0, 2) === "0x") {
        memo = Buffer.from(memoHex.substring(2), "hex").toString().replaceAll("\x00", "");
      }

      const ops: StacksOperation[] = [];

      const date = new Date(burn_block_time * 1000);
      const feeToUse = new BigNumber(fee_rate || "0");

      const isSending = sentValue !== "0" && receivedValue === "0";
      const isReceiving = receivedValue !== "0" && sentValue === "0";

      const operationCommons = {
        hash: tx_id,
        blockHeight: block_height,
        blockHash,
        fee: feeToUse,
        accountId: accountID,
        senders: [sender_address],
        transactionSequenceNumber: nonce,
        date,
        extra: {
          memo,
        },
      };

      if (isSending) {
        const type: OperationType = "OUT";
        ops.push({
          ...operationCommons,
          id: encodeOperationId(accountID, tx_id, type),
          value: new BigNumber(sentValue),
          recipients,
          type,
          internalOperations:
            stx_transfers.length > 1
              ? stx_transfers.map((t, idx) => {
                  return {
                    ...operationCommons,
                    id: encodeSubOperationId(accountID, tx_id, type, idx),
                    contract: "send-many",
                    type,
                    value: new BigNumber(t.amount),
                    senders: [t.sender],
                    recipients: [t.recipient],
                  };
                })
              : undefined,
        });
      }

      if (isReceiving) {
        const type: OperationType = "IN";
        ops.push({
          ...operationCommons,
          id: encodeOperationId(accountID, tx_id, type),
          value: new BigNumber(receivedValue),
          recipients,
          type,
          internalOperations:
            stx_transfers.length > 1
              ? stx_transfers.map((t, idx) => {
                  return {
                    ...operationCommons,
                    id: encodeSubOperationId(accountID, tx_id, type, idx),
                    type,
                    value: new BigNumber(t.amount),
                    senders: [t.sender],
                    recipients: [t.recipient],
                  };
                })
              : undefined,
        });
      }

      return ops;
    } catch (err) {
      log("warn", "mapTxToOps failed for stacks", err);
      return [];
    }
  };

export const getAccountShape: GetAccountShape = async info => {
  const { initialAccount, currency, rest = {}, derivationMode } = info;
  // for bridge tests specifically the `rest` object is empty and therefore the publicKey is undefined
  // reconciliatePublicKey tries to get pubKey from rest object and then from accountId
  const pubKey = reconciliatePublicKey(rest.publicKey, initialAccount);
  invariant(pubKey, "publicKey is required");

  const accountId: string = encodeAccountId({
    type: "js",
    version: "2",
    currencyId: currency.id,
    xpubOrAddress: pubKey,
    derivationMode,
  });

  const address = getAddressFromPublicKey(pubKey);

  const blockHeight = await fetchBlockHeight();
  const balanceResp = await fetchBalances(address);
  const rawTxs = await fetchFullTxs(address);
  const mempoolTxs = await fetchFullMempoolTxs(address);

  const balance = new BigNumber(balanceResp.balance);
  let spendableBalance = new BigNumber(balanceResp.balance);
  for (const tx of mempoolTxs) {
    spendableBalance = spendableBalance
      .minus(new BigNumber(tx.fee_rate))
      .minus(new BigNumber(tx.token_transfer.amount));
  }

  const result: Partial<Account> = {
    id: accountId,
    xpub: pubKey,
    freshAddress: address,
    balance,
    spendableBalance,
    operations: flatMap(rawTxs, mapTxToOps(accountId)),
    blockHeight: blockHeight.chain_tip.block_height,
  };

  return result;
};

function reconciliatePublicKey(
  publicKey: string | undefined,
  initialAccount: Account | undefined,
): string {
  if (publicKey) return publicKey;
  if (initialAccount) {
    const { xpubOrAddress } = decodeAccountId(initialAccount.id);
    return xpubOrAddress;
  }
  throw new Error("publicKey wasn't properly restored");
}

export const findNextNonce = async (
  senderAddress: string,
  pendingOps: Operation[],
): Promise<BigNumber> => {
  let nextNonce = BigNumber(0);

  for (const op of pendingOps) {
    const nonce = op.transactionSequenceNumber
      ? new BigNumber(op.transactionSequenceNumber)
      : new BigNumber(0);

    if (nonce.gt(nextNonce)) {
      nextNonce = nonce;
    }
  }

  const allMempoolTxns = await fetchFullMempoolTxs(senderAddress);
  for (const tx of allMempoolTxns) {
    const nonce = BigNumber(tx.nonce);
    if (nonce.gt(nextNonce)) {
      nextNonce = nonce;
    }
  }

  if (!nextNonce.eq(0)) {
    nextNonce = nextNonce.plus(1);
  }

  const nonceResp = await fetchNonce(senderAddress);
  const possibleNextNonce = new BigNumber(nonceResp.possible_next_nonce);
  if (possibleNextNonce.gt(nextNonce)) {
    nextNonce = possibleNextNonce;
  }

  return nextNonce;
};
