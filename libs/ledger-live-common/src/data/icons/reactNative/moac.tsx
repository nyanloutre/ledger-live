
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function moac({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M11.985 12.0259L7.20826 7.24914L7.10476 7.09313L5.40601 5.43188V18.5681H7.11901V9.48188L10.806 13.2206L12 14.4146L13.194 13.2206L16.881 9.48188V18.5681H18.594V5.43188L16.881 7.09313L11.985 12.0259Z" fill={color} /></Svg>;
}
export default moac;