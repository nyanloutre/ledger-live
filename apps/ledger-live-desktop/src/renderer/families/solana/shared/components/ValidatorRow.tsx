import { formatCurrencyUnit } from "@ledgerhq/live-common/currencies/index";
import { getAddressExplorer, getDefaultExplorerView } from "@ledgerhq/live-common/explorers";
import { ValidatorsAppValidator } from "@ledgerhq/live-common/families/solana/staking";
import { CryptoCurrency, Unit } from "@ledgerhq/types-cryptoassets";
import { BigNumber } from "bignumber.js";
import React, { useCallback } from "react";
import { Trans } from "react-i18next";
import styled from "styled-components";
import Box from "~/renderer/components/Box";
import ValidatorRow, {
  ValidatorRowProps,
  IconContainer,
} from "~/renderer/components/Delegation/ValidatorRow";
import FirstLetterIcon from "~/renderer/components/FirstLetterIcon";
import Image from "~/renderer/components/Image";
import Text from "~/renderer/components/Text";
import Check from "~/renderer/icons/Check";
import { openURL } from "~/renderer/linking";

type Props = {
  currency: CryptoCurrency;
  validator: ValidatorsAppValidator;
  active?: boolean;
  onClick?: (v: { address: string }) => void;
  disableHover?: boolean;
  unit: Unit;
};
function SolanaValidatorRow({ validator, active, onClick, unit, currency, disableHover }: Props) {
  const explorerView = getDefaultExplorerView(currency);
  const onExternalLink = useCallback(() => {
    const url = validator.wwwUrl || getAddressExplorer(explorerView, validator.voteAccount);
    if (url) {
      openURL(url);
    }
  }, [explorerView, validator]);
  return (
    <StyledValidatorRow
      disableHover={disableHover ?? false}
      onClick={onClick}
      key={validator.voteAccount}
      validator={{
        address: validator.voteAccount,
      }}
      icon={
        <IconContainer isSR>
          {validator.avatarUrl === undefined && <FirstLetterIcon label={validator.voteAccount} />}
          {validator.avatarUrl !== undefined && (
            <Image resource={validator.avatarUrl} alt="" width={32} height={32} />
          )}
        </IconContainer>
      }
      title={validator.name || validator.voteAccount}
      onExternalLink={onExternalLink}
      unit={unit}
      subtitle={
        <>
          <Trans i18nKey="solana.delegation.commission" />
          <Text
            style={{
              marginLeft: 5,
              fontSize: 11,
            }}
          >{`${validator.commission} %`}</Text>
        </>
      }
      sideInfo={
        <Box
          ml={5}
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Box>
            <Text
              textAlign="right"
              ff="Inter|SemiBold"
              style={{
                fontSize: 13,
              }}
            >
              {formatCurrencyUnit(unit, new BigNumber(validator.activeStake), {
                showCode: true,
              })}
            </Text>
            <TotalStakeTitle>
              <Trans i18nKey="solana.delegation.totalStake"></Trans>
            </TotalStakeTitle>
          </Box>
          <Box ml={3}>
            <ChosenMark active={active ?? false} />
          </Box>
        </Box>
      }
    ></StyledValidatorRow>
  );
}
const StyledValidatorRow = styled(ValidatorRow)<
  ValidatorRowProps & {
    disableHover: boolean;
  }
>`
  border-color: transparent;
  margin-bottom: 0;
  ${p => (p.disableHover ? "&:hover { border-color: transparent; }" : "")}
`;
const ChosenMark = styled(Check).attrs<{
  active?: boolean;
}>(p => ({
  color: p.active ? p.theme.colors.palette.primary.main : "transparent",
  size: 14,
}))<{
  active?: boolean;
}>``;
const TotalStakeTitle = styled(Text)`
  font-size: 11px;
  font-weight: 500;
  text-align: right;
  color: ${p => p.theme.colors.palette.text.shade60};
`;
export default SolanaValidatorRow;
