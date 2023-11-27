
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function mana({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M9.59476 8.6505L4.31101 14.991C3.93866 14.0378 3.74837 13.0233 3.75001 12C3.75001 7.44225 7.44226 3.75 12 3.75C16.5585 3.75 20.25 7.44225 20.25 12C20.25 14.52 19.1198 16.7767 17.3378 18.2902H6.66226C6.19494 17.8898 5.77179 17.4405 5.40001 16.95H14.8215V13.3777L17.7953 16.95H18.6L14.8178 12.4125L13.7738 13.6665L9.59551 8.6505H9.59476ZM14.8185 7.05C14.2811 7.06449 13.7706 7.28815 13.3957 7.67336C13.0207 8.05858 12.8109 8.57492 12.8109 9.1125C12.8109 9.65007 13.0207 10.1664 13.3957 10.5516C13.7706 10.9368 14.2811 11.1605 14.8185 11.175C15.3559 11.1605 15.8664 10.9368 16.2414 10.5516C16.6163 10.1664 16.8261 9.65007 16.8261 9.1125C16.8261 8.57492 16.6163 8.05858 16.2414 7.67336C15.8664 7.28815 15.3559 7.06449 14.8185 7.05ZM9.59626 5.55675C9.45844 5.55303 9.32128 5.57697 9.19287 5.62714C9.06446 5.67731 8.9474 5.75271 8.84861 5.84887C8.74982 5.94503 8.6713 6.06002 8.61768 6.18703C8.56406 6.31404 8.53644 6.45051 8.53644 6.58837C8.53644 6.72624 8.56406 6.86271 8.61768 6.98972C8.6713 7.11673 8.74982 7.23172 8.84861 7.32788C8.9474 7.42404 9.06446 7.49944 9.19287 7.54961C9.32128 7.59978 9.45844 7.62372 9.59626 7.62C9.86505 7.61275 10.1204 7.50088 10.3079 7.30821C10.4955 7.11553 10.6004 6.85726 10.6004 6.58837C10.6004 6.31949 10.4955 6.06122 10.3079 5.86854C10.1204 5.67587 9.86505 5.564 9.59626 5.55675ZM7.49176 18.909H16.509C15.1686 19.7853 13.6015 20.2514 12 20.25C10.3988 20.2512 8.832 19.7852 7.49176 18.909ZM13.374 14.1495L11.5545 16.3312H4.97926C4.71654 15.9056 4.49288 15.457 4.31101 14.991H9.59551V9.615L13.374 14.1487V14.1495Z" fill={color} /></Svg>;
}
export default mana;