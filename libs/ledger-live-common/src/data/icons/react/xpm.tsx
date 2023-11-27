
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function xpm({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M18 10.9215C18 14.2388 15.4305 15.3668 13.2675 15.3668V16.2315H14.9363V17.403H13.2682V18.75H10.6583V17.403H9.063V16.2315H10.6552V15.3555C9.963 15.3555 6 15.1912 6 10.6807V5.25H8.59125V10.8885C8.59125 13.2427 10.6657 13.221 10.6657 13.221V5.25H13.2682V13.221C13.2682 13.221 15.4088 13.341 15.4088 10.8563V5.25H18V10.9215Z" fill={color} /></svg>;
}
export default xpm;