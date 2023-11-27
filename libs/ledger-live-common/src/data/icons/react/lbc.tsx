
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function lbc({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M18.0852 12.9037L17.4874 12.7544L17.6689 12.0269L19.5327 12.4927L19.0677 14.3564L18.3394 14.1749L18.5007 13.5284L11.8467 17.6482L4.46741 13.9612V11.1472L12.1354 6.35168L19.1667 9.78143V10.9394L11.8474 15.4867L6.41216 12.7919L6.74516 12.1199L11.8069 14.6294L18.4167 10.5224V10.2502L12.1804 7.20818L5.21816 11.5627V13.4977L11.8084 16.7902L18.0852 12.9037Z" fill={color} /></svg>;
}
export default lbc;