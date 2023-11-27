
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function vtc({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M1.62677 12.2382L3.08927 10.5724H8.29277L11.49 14.6509L19.8563 3.06116C20.3698 3.52466 20.8371 4.03707 21.2513 4.59116C21.683 5.16543 22.0587 5.77974 22.3733 6.42566L12.102 20.6329C11.9078 20.8369 11.7038 20.9389 11.49 20.9389C11.2755 20.9389 11.0603 20.8369 10.8435 20.6329L4.34777 12.2374H1.62677V12.2382Z" fill={color} /></svg>;
}
export default vtc;