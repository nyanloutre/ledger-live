import { Flex, Text } from "@ledgerhq/react-ui";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { rgba } from "~/renderer/styles/helpers";
import { Ordinal, Satributes } from "../../types/Ordinals";
import { mappingKeysWithIconAndName } from "../../types/mappingKeys";
import { SatributesIcons } from "../Satributes";

type CardProps = {
  ordinal: Ordinal;
  isLast: boolean;
};

export const SatsRow = ({ ordinal, isLast }: CardProps) => {
  if (!ordinal.metadata.utxo_details) return null;

  return (
    <Row py={"10px"} px="20px" alignItems={"center"} justifyContent="space-between" isLast={isLast}>
      <Flex flexDirection={"column"} width={"90%"} mr={2}>
        {ordinal.metadata.utxo_details.sat_ranges.map((element, index) => (
          <SatributesComponent
            keySats={element.subranges[0]?.sat_types || []}
            nbSats={element.value}
            satributes={ordinal.metadata.utxo_details?.satributes || {}}
            year={ordinal.metadata.utxo_details?.sat_ranges[0]?.year}
            key={index}
          />
        ))}
      </Flex>

      <Flex width={"10%"} alignItems="center" justifyContent="center">
        <Text variant="small" fontWeight="medium" color="neutral.c100" fontSize={3}>
          {ordinal.metadata.utxo_details?.value || 0}
        </Text>
      </Flex>
    </Row>
  );
};

type SubProps = {
  keySats: string[];
  satributes: Satributes;
  nbSats: number;
  year?: number;
  withMore?: boolean;
};
export function SatributesComponent({ keySats, satributes, nbSats, year, withMore }: SubProps) {
  const { t } = useTranslation();

  return (
    <Flex flexDirection="row" justifyContent="space-between" alignItems="center" my={"8px"}>
      <Flex flexDirection="row" alignItems={"center"}>
        <SatributesIcons keySats={keySats} withMore={withMore} satributes={satributes} />

        <Flex flexDirection="column" ml={2}>
          <Flex flexDirection="column">
            <Text
              variant="body"
              fontWeight="semiBold"
              color="neutral.c100"
              mr={1}
              fontSize={"12px"}
            >
              {keySats
                .map(
                  key =>
                    mappingKeysWithIconAndName[key as keyof typeof mappingKeysWithIconAndName].name,
                )
                .join(" - ")}
            </Text>
            <Text variant="tiny" fontWeight="medium" fontSize={"10px"} color="neutral.c70">
              {t("account.ordinals.rareSats.list.component.total", {
                count: nbSats,
              })}
            </Text>
          </Flex>
        </Flex>
      </Flex>

      {year && (
        <Text variant="paragraph" fontWeight="medium" color="neutral.c70" fontSize={3}>
          {year}
        </Text>
      )}
    </Flex>
  );
}

const Row = styled(Flex)<{ isLast: boolean }>`
  border-bottom: ${p => (p.isLast ? undefined : `1px solid ${p.theme.colors.palette.divider}`)};
  cursor: pointer;
  &:hover {
    background: ${p => rgba(p.theme.colors.wallet, 0.04)};
  }
`;
