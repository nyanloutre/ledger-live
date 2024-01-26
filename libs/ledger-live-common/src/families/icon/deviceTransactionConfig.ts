import type { AccountLike, Account } from "@ledgerhq/types-live";
import type { Transaction, TransactionStatus } from "./types";
import type { DeviceTransactionField } from "../../transaction";
import { getMainAccount } from "../../account";

export type ExtraDeviceTransactionField = {
  type: "icon.fees";
  label: string;
};

function getDeviceTransactionConfig({
  transaction,
  account,
  parentAccount,
  status: { amount },
}: {
  account: AccountLike;
  parentAccount?: Account;
  transaction: Transaction;
  status: TransactionStatus;
}): Array<DeviceTransactionField> {
  const fields: Array<DeviceTransactionField> = [];
  const mainAccount = getMainAccount(account, parentAccount);
  const { mode } = transaction;

  if (!amount.isZero()) {
    fields.push({
      type: "amount",
      label: "Amount",
    });
  }

  if (mode !== "send") {
    fields.push({
      type: "address",
      label: "From Address",
      address: mainAccount.freshAddress,
    });
  }

  return fields;
}

export default getDeviceTransactionConfig;
