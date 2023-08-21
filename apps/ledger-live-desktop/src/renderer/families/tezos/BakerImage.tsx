import React from "react";
import styled from "styled-components";
import { Baker } from "@ledgerhq/live-common/families/tezos/bakers";
import Box from "~/renderer/components/Box";
import CustomValidator from "~/renderer/icons/CustomValidator";
import Image from "~/renderer/components/Image";
const Circle = styled(Box).attrs((props: { size: number }) => ({
  style: {
    width: props.size,
    height: props.size,
  },
}))`
  border-radius: 50%;
  overflow: hidden;
`;
type Props = {
  size?: number;
  baker: Baker | undefined | null;
};
const BakerImage = ({ size = 24, baker }: Props) => (
  <Circle size={size}>
    {baker ? (
      <Image resource={baker.logoURL} alt="" width={size} height={size} />
    ) : (
      <CustomValidator size={size} />
    )}
  </Circle>
);
export default BakerImage;
