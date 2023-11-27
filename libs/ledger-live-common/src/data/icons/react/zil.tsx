
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function zil({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M6.76538 5.47686L15.1009 9.51411L17.2346 8.55261L8.93363 4.51611L6.76538 5.47686Z" fill={color} fillOpacity={0.2} /><path d="M15.1009 9.50436L17.2346 8.54361V10.6924L15.1009 11.6531V9.50436ZM15.1009 19.4674V12.7646L17.2346 11.7934V18.5066L15.1009 19.4674Z" fill={color} fillOpacity={0.5} /><path d="M6.76538 5.47913V7.65188L12.5351 10.4546L6.76538 13.3121V15.4541L15.1009 19.4839V17.3284L9.43988 14.5751L15.1009 11.6644V9.51563L6.76538 5.47913Z" fill={color} /></svg>;
}
export default zil;