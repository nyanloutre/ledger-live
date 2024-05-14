import { findSubAccountById, isTokenAccount } from "@ledgerhq/coin-framework/account/index";
import { SignerContext } from "@ledgerhq/coin-framework/signer";
import type {
  Account,
  DeviceId,
  SignOperationEvent,
  SignOperationFnSignature,
} from "@ledgerhq/types-live";
import { Observable } from "rxjs";
import { fetchAccountInfo } from "./bridge/bridgeHelpers/api";
import type { TonAddress, TonSignature, TonSigner } from "./signer";
import type { TonOperation, Transaction } from "./types";
import { getAddress, getLedgerTonPath, packTransaction, transactionToHwParams } from "./utils";

/**
 * Sign Transaction with Ledger hardware
 */
export const buildSignOperation =
  (
    signerContext: SignerContext<TonSigner, TonAddress | TonSignature>,
  ): SignOperationFnSignature<Transaction> =>
  ({
    account,
    transaction,
    deviceId,
  }: {
    account: Account;
    transaction: Transaction;
    deviceId: DeviceId;
  }): Observable<SignOperationEvent> =>
    new Observable(o => {
      let cancelled = false;
      async function main() {
        const { address, derivationPath } = getAddress(account);
        const accountInfo = await fetchAccountInfo(address);

        const tonTx = transactionToHwParams(transaction, accountInfo.seqno, account);

        const ledgerPath = getLedgerTonPath(derivationPath);

        o.next({ type: "device-signature-requested" });
        const sig = (await signerContext(deviceId, signer =>
          signer.signTransaction(ledgerPath, tonTx),
        )) as TonSignature;

        if (cancelled) return;

        o.next({ type: "device-signature-granted" });

        if (!sig) {
          throw new Error("No signature");
        }

        const signature = packTransaction(account, accountInfo.status === "uninit", sig);

        const operation = buildOptimisticOperation(account, transaction, address);

        o.next({
          type: "signed",
          signedOperation: {
            operation,
            signature,
          },
        });
      }

      main().then(
        () => o.complete(),
        e => o.error(e),
      );

      return () => {
        cancelled = true;
      };
    });

const buildOptimisticOperation = (
  account: Account,
  transaction: Transaction,
  address: string,
): TonOperation => {
  const { recipient, amount, fees, comment, useAllAmount, subAccountId } = transaction;
  const { id: accountId } = account;

  const subAccount = findSubAccountById(account, subAccountId ?? "");
  const tokenTransfer = Boolean(subAccount && isTokenAccount(subAccount));

  const value = tokenTransfer ? fees : amount.plus(fees);

  const op: TonOperation = {
    id: "",
    hash: "",
    type: "OUT",
    senders: [address],
    recipients: [recipient],
    accountId,
    value,
    fee: fees,
    blockHash: null,
    blockHeight: null,
    date: new Date(),
    extra: {
      // we don't know yet, will be patched in final operation
      lt: "",
      explorerHash: "",
      comment: comment,
    },
  };
  if (tokenTransfer && subAccount) {
    op.subOperations = [
      {
        id: "",
        hash: "",
        type: "OUT",
        value: useAllAmount ? subAccount.balance : amount,
        fee: fees,
        blockHash: null,
        blockHeight: null,
        senders: [address],
        recipients: [recipient],
        accountId: subAccount.id,
        date: new Date(),
        extra: {
          lt: "",
          explorerHash: "",
          comment: comment,
        },
        contract: subAccount.token.contractAddress,
      },
    ];
  }
  return op;
};

export default buildSignOperation;
