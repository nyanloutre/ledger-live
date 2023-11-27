
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function lend({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M12.8602 15.3345L8.77275 19.5L7.60725 18.2213L10.44 15.3337L7.5 12.339L8.75475 11.0595L12.8602 15.3345ZM15.2452 12.9412L16.5 11.6617L13.56 8.6655L16.3927 5.77875L15.2272 4.5L11.1218 8.6655L15.2452 12.9412ZM9.27525 10.566L13.3987 14.841L14.6535 13.5623L10.53 9.36L9.27525 10.566Z" fill={color} /></Svg>;
}
export default lend;