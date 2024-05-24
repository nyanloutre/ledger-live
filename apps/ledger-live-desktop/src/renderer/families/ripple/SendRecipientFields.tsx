import React, { useCallback } from "react";
import { BigNumber } from "bignumber.js";
import { Trans, useTranslation } from "react-i18next";
import { Account } from "@ledgerhq/types-live";
import { Transaction } from "@ledgerhq/live-common/families/xrp/types";
import { getAccountBridge } from "@ledgerhq/live-common/bridge/index";
import Box from "~/renderer/components/Box";
import Input from "~/renderer/components/Input";
import Label from "~/renderer/components/Label";
type Props = {
  onChange: (a: Transaction) => void;
  transaction: Transaction;
  account: Account;
};
const uint32maxPlus1 = BigNumber(2).pow(32);
const TagField = ({ onChange, account, transaction }: Props) => {
  const { t } = useTranslation();
  const onChangeTag = useCallback(
    (str: string) => {
      const bridge = getAccountBridge(account);
      const tag = BigNumber(str.replace(/[^0-9]/g, ""));
      const patch = {
        tag:
          !tag.isNaN() &&
          tag.isFinite() &&
          tag.isInteger() &&
          tag.isPositive() &&
          tag.lt(uint32maxPlus1)
            ? tag.toNumber()
            : str === ""
              ? undefined
              : transaction.tag,
      };
      onChange(bridge.updateTransaction(transaction, patch));
    },
    [onChange, account, transaction],
  );
  return (
    <Box flow={5}>
      <Box grow>
        <Label mb={5}>
          <span>
            <Trans i18nKey="send.steps.details.rippleTag" />
          </span>
        </Label>
        <Input
          placeholder={t("send.steps.details.rippleTagPlaceholder")}
          ff="Inter"
          value={String(transaction.tag || "")}
          onChange={onChangeTag}
        />
      </Box>
    </Box>
  );
};
export default {
  component: TagField,
  fields: ["tag"],
};
