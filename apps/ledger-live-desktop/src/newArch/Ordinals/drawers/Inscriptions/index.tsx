import React from "react";
import styled from "styled-components";
import { space, layout, position, PositionProps, LayoutProps, SpaceProps } from "styled-system";
import Box from "~/renderer/components/Box";
import { Ordinal } from "../../types/Ordinals";
import { Flex, Icons, Text } from "@ledgerhq/react-ui";
import Image from "~/renderer/components/Image";
import { t } from "i18next";
import ToolTip from "~/renderer/components/Tooltip";
import ExternalViewerButton from "../../components/Nft/ExternalViewerButton";

const Container = styled(Flex)`
  align-items: center;
  cursor: pointer;
  padding: 4px;
  color: ${p => p.theme.colors.neutral.c100};
  background-color: ${p => p.theme.colors.neutral.c30};
  border-radius: 50px;
  border: 1px solid ${p => p.theme.colors.neutral.c50};
  &:hover {
    background-color: ${p => p.theme.colors.neutral.c40};
  }
`;

const InscriptionsDrawerContainer = styled.div`
  flex: 1;
  overflow-y: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const InscriptionsDrawerContent = styled.div`
  padding: 0px 40px;
  padding-top: 53px;
  display: flex;
  flex-direction: column;
`;

type StickyWrapperProps = { transparent?: boolean } & PositionProps & LayoutProps & SpaceProps;
const StickyWrapper = styled.div<StickyWrapperProps>`
  background: ${({ theme, transparent }) =>
    transparent
      ? "transparent"
      : `linear-gradient(${theme.colors.palette.background.paper} 0%, ${theme.colors.palette.background.paper}90 75%, transparent 100%);`};
  position: sticky;
  ${position};
  ${layout};
  ${space}
  z-index: 1;
`;

const Separator = styled(Flex)`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.neutral.c60};
  margin: 24px 0px;
`;

const truncate = (word?: string, tooLongChars = 25) => {
  if (!word) return undefined;

  if (word.length < tooLongChars) {
    return word;
  }

  const ellipsis = "...";
  const charsOnEitherSide = Math.floor(tooLongChars / 2) - ellipsis.length;

  return word?.slice(0, charsOnEitherSide) + ellipsis + word?.slice(-charsOnEitherSide);
};

const Attribute = ({
  attribute,
  name,
  tooLongChars = 25,
}: {
  attribute?: string;
  name: string;
  tooLongChars?: number;
}) => {
  if (!attribute) return undefined;
  return (
    <Flex justifyContent="space-between" mb={24}>
      <Text variant="subtitle" color="neutral.c60">
        {t(`account.ordinals.details.${name}`)}
      </Text>
      <ToolTip content={attribute.length > tooLongChars ? attribute : undefined}>
        <Text variant="subtitle" color="neutral.c100">
          {truncate(attribute, tooLongChars)}
        </Text>
      </ToolTip>
    </Flex>
  );
};

type InscriptionsDrawerProps = {
  ordinal: Ordinal;
};
const InscriptionsDrawer = ({ ordinal }: InscriptionsDrawerProps) => {
  const contentType = ordinal.metadata.ordinal_details?.content_type;
  const imageUrl =
    contentType && contentType?.includes("html")
      ? `https://renderer.magiceden.dev/v2/render?id=${ordinal.metadata.ordinal_details?.inscription_id}`
      : ordinal.metadata.image_original_url;

  const collectionName = ordinal.name;
  const name = ordinal.contract.name;

  return (
    <Box>
      <InscriptionsDrawerContainer>
        <InscriptionsDrawerContent>
          <StickyWrapper top={0} pb={3} pt="24px">
            <Flex flexDirection="row" justifyContent="space-between" alignItems="center">
              <Flex flexDirection="column">
                <Text
                  ff="Inter|SemiBold"
                  fontSize={5}
                  lineHeight="18px"
                  color="palette.text.shade50"
                  pb={2}
                >
                  {collectionName || "-"}
                </Text>
                <Text
                  ff="Inter|SemiBold"
                  fontSize={7}
                  lineHeight="29px"
                  color="palette.text.shade100"
                  style={{
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    display: "-webkit-box",
                    wordWrap: "break-word",
                    hyphens: "auto",
                  }}
                  uppercase
                >
                  {name}
                </Text>
              </Flex>
              <ExternalViewerButton ordinal={ordinal}>
                <Container>
                  <Icons.MoreHorizontal size="M" color="neutral.c100" />
                </Container>
              </ExternalViewerButton>
            </Flex>
          </StickyWrapper>
          <Flex borderRadius={6} overflow="hidden" width={420} height={420}>
            <Image resource={imageUrl || ""} alt={ordinal.contract.name} height={420} width={420} />
          </Flex>

          <Flex mt={40} flex={1} flexDirection="column">
            <Text variant="subtitle" color="neutral.c60">
              {t("account.ordinals.details.title")}
            </Text>
            <Separator />
            <Attribute
              attribute={ordinal.metadata.ordinal_details?.inscription_id}
              name="inscriptionId"
            />
            <Attribute
              attribute={ordinal.metadata.ordinal_details?.inscription_number.toString()}
              name="inscriptionNumber"
            />
            <Attribute
              attribute={ordinal.metadata.ordinal_details?.content_type}
              name="contentType"
            />
            <Attribute
              attribute={ordinal.metadata.ordinal_details?.content_length.toString()}
              name="contentLength"
            />
            <Attribute attribute={ordinal.metadata.ordinal_details?.sat_rarity} name="satribute" />
            <Attribute
              attribute={ordinal.metadata.ordinal_details?.sat_number.toString()}
              name="satNumber"
            />
            <Attribute attribute={ordinal.metadata.ordinal_details?.sat_name} name="satName" />
            <Attribute attribute={ordinal.metadata.ordinal_details?.location} name="location" />
          </Flex>
        </InscriptionsDrawerContent>
      </InscriptionsDrawerContainer>
    </Box>
  );
};
export default InscriptionsDrawer;
