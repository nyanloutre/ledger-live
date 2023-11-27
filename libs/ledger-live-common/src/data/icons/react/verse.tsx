
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function verse({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M11.9593 24C18.5642 24 23.9186 18.6274 23.9186 12C23.9186 5.37258 18.5642 0 11.9593 0C5.35439 0 0 5.37258 0 12C0 18.6274 5.35439 24 11.9593 24ZM11.9542 19.7765C9.09235 14.8184 4.62595 7.08046 4.62595 7.08046H10.9887L12.2656 9.29168H8.48672L13.2533 17.5257C13.2533 17.5257 12.4616 18.8976 11.9542 19.7765ZM13.844 16.5025L19.2824 7.08046H16.6871L13.84 12.0222L12.8393 10.2919H10.2521L13.844 16.5025Z" fill={color} /></svg>;
}
export default verse;