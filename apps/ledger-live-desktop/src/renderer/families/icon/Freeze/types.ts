// @flow
import type { TFunction } from "i18next";
import type { Device } from "@ledgerhq/live-common/hw/actions/types";
import type { Step } from "~/renderer/components/Stepper";

import type { Operation } from "@ledgerhq/types-live";

import type {
  IconAccount,
  Transaction,
  TransactionStatus,
} from "@ledgerhq/live-common/families/icon/types";
import { OpenModal } from "~/renderer/actions/modals";
export type StepId = "amount" | "connectDevice" | "confirmation";

export type StepProps = {
  t: TFunction;
  transitionTo: (string: string) => void;
  device: Device | undefined | null;
  account: IconAccount | undefined | null;
  parentAccount: IconAccount | undefined | null;
  onRetry: (a: void) => void;
  onClose: () => void;
  openModal: OpenModal;
  optimisticOperation: Operation | undefined;
  error: Error | undefined;
  signed: boolean;
  transaction: Transaction;
  status: TransactionStatus;
  onChangeTransaction: (a: Transaction) => void;
  onTransactionError: (a: Error) => void;
  onOperationBroadcasted: (a: Operation) => void;
  setSigned: (a: boolean) => void;
  bridgePending: boolean;
};

export type St = Step<StepId, StepProps>;
