
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function auto({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M18.375 14.4503L15.2362 12.567L15.5963 11.0753L16.9365 11.8665V9.1425L12.6315 6.576V12.501L11.6077 13.0673L17.2612 16.4198L12 19.5L5.625 15.7665V8.30025L12 4.5L18.375 8.30025V14.4503ZM7.0635 9.1425V14.001L11.202 11.601V6.675L7.0635 9.14175V9.1425ZM10.1363 13.9005L7.78275 15.3397L12 17.8088L14.3812 16.4137L10.1363 13.8998V13.9005Z" fill={color} /></svg>;
}
export default auto;