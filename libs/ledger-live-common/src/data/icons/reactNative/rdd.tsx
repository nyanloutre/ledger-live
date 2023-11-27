
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function rdd({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path opacity={0.75} fillRule="evenodd" clipRule="evenodd" d="M11.5237 20.25C7.23299 20.25 3.75299 16.8052 3.75299 12.5565C3.75299 8.30773 7.23224 4.86298 11.5237 4.86298C15.816 4.86298 19.2952 8.30773 19.2952 12.5565C19.2952 16.8052 15.8152 20.25 11.523 20.25H11.5237ZM12.8655 7.06723C14.6775 7.80898 15.9795 9.20473 16.9035 11.0857L17.601 10.6005C16.818 8.71648 15.3712 7.23598 13.044 6.27598L12.8655 7.06723Z" fill={color} fillOpacity={0.5} /><Path d="M20.247 6.99075C20.247 5.20125 18.7808 3.75 16.9733 3.75C15.1658 3.75 13.6995 5.20125 13.6995 6.99075C13.6995 7.16175 13.713 7.332 13.74 7.50075C14.8298 8.13525 15.705 9.04575 16.4048 10.1828C16.5923 10.215 16.7828 10.2323 16.9733 10.2323C18.7808 10.2323 20.247 8.781 20.247 6.99075Z" fill={color} /></Svg>;
}
export default rdd;