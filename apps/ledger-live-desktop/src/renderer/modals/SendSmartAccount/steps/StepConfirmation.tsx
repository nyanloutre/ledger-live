/* eslint-disable @typescript-eslint/ban-ts-comment */
import { TransactionHasBeenValidatedError } from "@ledgerhq/errors";
import { getMainAccount } from "@ledgerhq/live-common/account/index";
import { SyncOneAccountOnMount } from "@ledgerhq/live-common/bridge/react/index";
import React, { useState } from "react";
import { Log, GlitchText } from "@ledgerhq/react-ui";
import { Trans } from "react-i18next";
import styled from "styled-components";
import TrackPage from "~/renderer/analytics/TrackPage";
import Box from "~/renderer/components/Box";
import BroadcastErrorDisclaimer from "~/renderer/components/BroadcastErrorDisclaimer";
import Button from "~/renderer/components/Button";
import ErrorDisplay from "~/renderer/components/ErrorDisplay";
import SuccessDisplay from "~/renderer/components/SuccessDisplay";
import { OperationDetails } from "~/renderer/drawers/OperationDetails";
import { setDrawer } from "~/renderer/drawers/Provider";
import { multiline } from "~/renderer/styles/helpers";
import { StepProps } from "../types";

const Container = styled(Box).attrs(() => ({
  alignItems: "center",
  color: "palette.text.shade100",
}))<{
  shouldSpace?: boolean;
}>`
  justify-content: ${p => (p.shouldSpace ? "space-between" : "center")};
  min-height: 120px;
`;

function StepConfirmation({
  t,
  optimisticOperation,
  error,
  isNFTSend,
  signed,
  currencyName,
  account,
  parentAccount,
  transaction,
}: StepProps) {
  const [txPending, setTxPending] = useState(true);
  // @ts-expect-error
  transaction.broadcastingTx.then(() => {
    setTxPending(false);
  });

  if (txPending) {
    return (
      <Container>
        <Log width="fit-content">
          <GlitchText delay={0} duration={2000} text="Broadcasting " />
          <GlitchText delay={0} duration={4000} text="the transaction to " />
          <GlitchText delay={0} duration={4000} text="the Blockchain" />.
        </Log>
      </Container>
    );
  } else {
    <Container>
      <Log width="fit-content">
        <GlitchText delay={0} duration={2000} text="Transaction confirmed" />
      </Log>
    </Container>;
  }
  if (optimisticOperation) {
    return (
      <Container>
        <TrackPage
          category="Send Flow"
          name="Step Confirmed"
          currencyName={currencyName}
          isNFTSend={isNFTSend}
        />
        <SyncOneAccountOnMount
          reason="transaction-flow-confirmation"
          priority={10}
          accountId={optimisticOperation.accountId}
        />
        <SuccessDisplay
          title={<Trans i18nKey="send.steps.confirmation.success.title" />}
          description={multiline(t("send.steps.confirmation.success.text"))}
        />
      </Container>
    );
  }
  if (error) {
    // Edit ethereum transaction nonce error because transaction has been validated
    if (error.name === "LedgerAPI4xx" && error.message.includes("nonce too low")) {
      const mainAccount = account ? getMainAccount(account, parentAccount) : null;
      if (mainAccount?.currency?.family === "evm") {
        error = new TransactionHasBeenValidatedError();
      }
    }

    return (
      <Container shouldSpace={signed}>
        <TrackPage
          category="Send Flow"
          name="Step Confirmation Error"
          currencyName={currencyName}
        />
        {signed ? (
          <BroadcastErrorDisclaimer
            title={<Trans i18nKey="send.steps.confirmation.broadcastError" />}
          />
        ) : null}
        <ErrorDisplay error={error} withExportLogs />
      </Container>
    );
  }
  return null;
}
export function StepConfirmationFooter({
  t,
  account,
  parentAccount,
  optimisticOperation,
  closeModal,
}: StepProps) {
  const concernedOperation = optimisticOperation
    ? optimisticOperation.subOperations && optimisticOperation.subOperations.length > 0
      ? optimisticOperation.subOperations[0]
      : optimisticOperation
    : null;
  return (
    <Button
      ml={2}
      id={"send-confirmation-opc-button"}
      onClick={() => {
        closeModal();
        if (account && concernedOperation) {
          setDrawer(OperationDetails, {
            operationId: concernedOperation.id,
            accountId: account.id,
            parentId: (parentAccount && parentAccount.id) || undefined,
          });
        }
      }}
      primary
    >
      {t("send.steps.confirmation.success.cta")}
    </Button>
  );
}
export default StepConfirmation;
