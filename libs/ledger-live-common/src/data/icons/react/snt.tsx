
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function snt({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M9.975 11.265C9.55658 11.2629 9.13883 11.299 8.727 11.373C9.066 8.23803 11.679 5.86353 14.79 5.86353C16.695 5.86353 18 6.79653 18 8.72703C18 10.6583 16.4333 11.5913 14.148 11.5913C12.4605 11.5913 11.6625 11.2658 9.975 11.2658V11.265ZM9.852 12.4088C7.56675 12.4088 6 13.3425 6 15.273C6 17.2035 7.305 18.1365 9.21 18.1365C12.321 18.1365 14.934 15.7628 15.273 12.627C14.8612 12.701 14.4434 12.7372 14.025 12.735C12.3375 12.735 11.5387 12.4088 9.852 12.4088Z" fill={color} /></svg>;
}
export default snt;