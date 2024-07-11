import { Account } from "@ledgerhq/types-live";
import React, { memo } from "react";
import { Layout, LayoutKey } from "~/newArch/Collectibles/types/Layouts";
import RowItem from "./RowItem";
import CardItem from "./CardItem";
import Card from "~/renderer/components/Box/Card";
import styled from "styled-components";
import { Skeleton } from "../../Skeleton";
import { Media } from "../../Media";
import Box from "~/renderer/components/Box";
import { Flex } from "@ledgerhq/react-ui";
import BigNumber from "bignumber.js";

const Wrapper = styled(Card)`
  &.disabled {
    pointer-events: none;
  }

  cursor: pointer;
  border: 1px solid transparent;
  transition: background-color ease-in-out 200ms;
  :hover {
    border-color: ${p => p.theme.colors.palette.text.shade20};
  }
  :active {
    border-color: ${p => p.theme.colors.palette.text.shade20};
    background: ${p => p.theme.colors.palette.action.hover};
  }
`;

type Props = {
  id: string;
  standard: string;
  amount: string | BigNumber;
  tokenName: string;
  previewUri: string;
  mode: LayoutKey;
  account: Account;
  isLoading: boolean;
  withContextMenu: boolean;
  mediaType: string;
  onHideCollection?: () => void;
};

const Item = ({
  id,
  standard,
  amount,
  previewUri,
  mediaType,
  mode,
  tokenName,
  account,
  withContextMenu,
  isLoading,
  onHideCollection,
}: Props) => {
  const isGridLayout = mode === Layout.GRID;
  const Component = isGridLayout ? CardItem : RowItem;

  return (
    <Wrapper
      px={3}
      py={isGridLayout ? 3 : 2}
      className={(isLoading || process.env.ALWAYS_SHOW_SKELETONS) ?? "disabled"}
      horizontal={!isGridLayout}
      alignItems={!isGridLayout ?? "center"}
      onClick={() => {}}
    >
      <Flex
        flexDirection={isGridLayout ? "column" : "row"}
        flex={1}
        pl={isGridLayout ? 0 : "5px"}
        columnGap={"10px"}
      >
        <Skeleton width={40} minHeight={40} full={isGridLayout} show={isLoading}>
          <Media
            isLoading={isLoading}
            useFallback={false}
            contentType="image"
            mediaFormat="preview"
            uri={previewUri}
            mediaType={mediaType}
            size={isGridLayout ? undefined : 40}
            full={isGridLayout}
            backgroundSize={isGridLayout ? undefined : "700%"}
          />
        </Skeleton>
        <Box flex={1}>
          <Component
            isLoading={isLoading}
            tokenId={id}
            standard={standard}
            amount={amount}
            tokenName={tokenName}
            onHideCollection={onHideCollection}
          />
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default memo<Props>(Item);
