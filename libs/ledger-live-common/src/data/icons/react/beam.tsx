
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function beam({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M20.67 10.2375V8.5875L15.3 11.715L11.985 6V9.75L13.6725 12.675L12.99 13.08L11.985 11.31L10.905 13.23L10.155 12.9225L11.985 9.75V6L8.35499 12.18L3.29999 10.0875V12L7.79999 13.11L4.94999 18H11.985V15.9825H8.39249L9.73499 13.6275L10.545 13.83L9.73499 15.255H14.235L13.56 14.0625L14.4525 13.995L15.6 15.9825H11.985V18H19.05L16.62 13.8525L20.7 13.5525V11.895L16.11 13.0275L20.6925 11.85V10.35L15.72 12.3675L20.67 10.2375ZM14.145 13.5L13.335 13.7025L14.13 13.5H14.145ZM13.89 13.05L13.14 13.35L13.89 13.0425V13.05Z" fill={color} /></svg>;
}
export default beam;