
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function cred({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M9.102 11.9745L11.7135 14.5942L18.561 7.701L19.5 8.6535L11.7135 16.5L8.16225 12.9277L9.102 11.9745ZM10.6845 11.742L14.898 7.5L15.8378 8.4525L11.625 12.6975L10.6845 11.742ZM8.9775 15.3645L8.0505 16.299L4.5 12.7275L5.43825 11.775L8.9775 15.3645Z" fill={color} /></svg>;
}
export default cred;