
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function bsd({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M21 11.3861H3L13.473 7.86863L14.9452 3.04088L21 11.3861ZM3.0825 12.5321H20.9175L10.4453 15.9679L8.973 20.9591L3.08175 12.5321H3.0825Z" fill={color} /></Svg>;
}
export default bsd;