
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function payx({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M8.84204 7.72315L9.77954 5.4259L16.201 5.44915C17.1385 5.51965 18.2635 5.51965 18.8965 6.3169C19.6465 7.1839 19.4823 8.4259 19.1073 9.4099C18.7459 10.4689 18.1185 11.4173 17.2854 12.1643C16.4523 12.9112 15.4413 13.4317 14.3493 13.6759C12.8028 13.9107 11.2323 13.8402 9.66179 13.8402C9.97454 13.0774 10.2873 12.3117 10.5993 11.5429C11.8885 11.5429 13.201 11.6134 14.5135 11.4027C15.709 11.0982 16.8108 9.90265 16.6233 8.59015C16.5055 8.02765 15.8733 7.76965 15.3333 7.76965C13.1778 7.6759 11.0208 7.76965 8.86529 7.7224H8.84204V7.72315Z" fill={color} /><Path d="M6.07605 8.35535H13.6931L12.6858 10.9571H5.04405L6.07605 8.3786V8.3561V8.35535ZM7.2948 11.5428H9.94305L7.17855 18.5741H4.57605L7.31805 11.5428H7.2948Z" fill={color} /></Svg>;
}
export default payx;