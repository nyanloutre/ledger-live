
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function avax({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill={color} d="m8.61797,19.9102l-4.45475,0a0.94441,0.94441 0 0 1 -0.82324,-1.4077l7.85462,-13.93268a0.94441,0.94441 0 0 1 1.64469,0l2.35389,4.15539a0.94441,0.94441 0 0 1 0,0.94619l-5.75732,9.77372a0.94263,0.94263 0 0 1 -0.81789,0.46508zm5.07485,-1.41127l2.64612,-4.72025a0.94619,0.94619 0 0 1 1.64648,0l2.67285,4.71847a0.94619,0.94619 0 0 1 -0.82146,1.41305l-5.31897,0a0.94619,0.94619 0 0 1 -0.82502,-1.41127z" /></svg>;
}
export default avax;