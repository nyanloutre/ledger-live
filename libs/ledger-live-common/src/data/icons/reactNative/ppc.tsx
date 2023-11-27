
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function ppc({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path fillRule="evenodd" clipRule="evenodd" d="M6.75 5.625C15.8198 5.96025 19.317 11.4045 17.5613 16.2623C17.064 17.6145 16.5353 18.3547 15.4238 19.125C15.4688 18.93 15.5153 18.735 15.5513 18.5347C16.2083 14.745 14.9625 10.1843 8.86725 7.665C13.7168 10.551 15.6735 15.6862 13.4123 19.0012C9.5625 19.6065 6.75 16.3193 6.75 12.5317V5.625Z" fill={color} /><Path fillRule="evenodd" clipRule="evenodd" d="M6.37506 5.25C15.4448 5.58525 18.9421 11.0295 17.1863 15.8873C16.6891 17.2395 16.1603 17.9797 15.0488 18.75C15.0938 18.555 15.1403 18.36 15.1763 18.1597C15.8333 14.37 14.5876 9.80925 8.49231 7.29C13.3418 10.176 15.2986 15.3112 13.0373 18.6262C9.18756 19.2315 6.37506 15.9443 6.37506 12.1567V5.25Z" fill={color} /></Svg>;
}
export default ppc;