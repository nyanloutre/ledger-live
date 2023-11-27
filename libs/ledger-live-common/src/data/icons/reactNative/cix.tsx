
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function cix({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M17.7174 13.911L16.9231 13.4138L18.6556 13.3935L18.6916 13.374V13.3928L19.4071 13.3853L18.1929 15.3608L18.0841 14.4083L12.5611 17.4555L10.4664 14.6588L4.59387 17.7533V17.0483L10.6486 13.8585L12.7426 16.6553L17.7181 13.911H17.7174ZM10.1334 13.2323L7.83837 14.4405V6.24677H10.1334V13.2323ZM16.6231 13.593L14.3281 14.868V6.24677H16.6231V13.593Z" fill={color} /><Path opacity={0.5} d="M13.3784 15.396L12.8856 15.669L11.0826 13.2615V7.18427H13.3776V15.396H13.3784ZM6.8879 14.9408L4.5929 16.1498V8.24777H6.8879V14.9408Z" fill={color} /></Svg>;
}
export default cix;