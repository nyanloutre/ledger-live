
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function gm({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><Path d="M21.996 24c-6.734-.007-13.469.014-20.202-.01C.579 23.906-.164 22.662 0 21.526.007 14.95-.014 8.371.01 1.794.094.579 1.338-.164 2.473 0 9.051.007 15.63-.014 22.205.01 23.42.096 24.165 1.338 24 2.474c-.008 6.577.015 13.155-.011 19.732-.087.994-.994 1.814-1.993 1.794z" fill={color} /><Path d="M17.782 10.948c-1.677-1.65-3.303-3.359-5.012-4.973-.75-.526-1.675-.086-2.17.567-2.13 2.133-4.26 4.267-6.392 6.399l5.308 5.309 2.473-2.473 2.472 2.473 5.308-5.31-1.987-1.992zm-6.692 1.708L9.5 14.247l-1.307-1.306 3.801-3.802 3.801 3.802-1.328 1.328c-.681-.622-1.251-1.389-2.028-1.89a1.24 1.24 0 0 0-1.349.277z" fill={color} /></Svg>;
}
export default gm;