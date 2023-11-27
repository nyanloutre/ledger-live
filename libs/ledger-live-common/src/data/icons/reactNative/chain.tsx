
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function chain({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path fillRule="evenodd" clipRule="evenodd" d="M4.5 7.2855V10.3425L11.9212 14.6287L16.7362 11.8425V14.3287L19.3282 15.8572V7.2855L11.9145 11.5717L4.5 7.2855Z" fill={color} /><Path opacity={0.7} fillRule="evenodd" clipRule="evenodd" d="M11.9145 3L4.5 7.2855V15.8573L11.9145 20.1427L19.3073 15.8573L16.686 14.3287L11.9145 17.0858L7.122 14.3287V8.814L11.9145 6.057L16.686 8.814L19.3073 7.2855L11.9145 3Z" fill={color} /></Svg>;
}
export default chain;