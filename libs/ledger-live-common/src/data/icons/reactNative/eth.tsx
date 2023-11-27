
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function eth({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path opacity={0.6} d="M11.9985 3.00189V9.65439L17.6212 12.1669L11.9985 3.00189Z" fill={color} /><Path d="M11.9985 3.00189L6.375 12.1669L11.9985 9.65439V3.00189Z" fill={color} /><Path opacity={0.6} d="M11.9985 16.4779V20.9981L17.625 13.2139L11.9985 16.4779Z" fill={color} /><Path d="M11.9985 20.9981V16.4771L6.375 13.2139L11.9985 20.9981Z" fill={color} /><Path opacity={0.2} d="M11.9985 15.4316L17.6212 12.1669L11.9985 9.65588V15.4316Z" fill={color} /><Path opacity={0.6} d="M6.375 12.1669L11.9985 15.4316V9.65588L6.375 12.1669Z" fill={color} /></Svg>;
}
export default eth;