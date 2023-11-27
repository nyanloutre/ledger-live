
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function emc2({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M5.9205 14.3707H9.21825L7.7985 17.25H4.5L5.9205 14.3707ZM7.79925 10.5608H11.0977L9.6825 13.4325H6.3825L7.8 10.56L7.79925 10.5608ZM9.67875 6.75075H12.9772L11.5605 9.62325H8.26275L9.67875 6.75V6.75075Z" fill={color} fillOpacity={0.4} /><Path d="M9.20779 14.37H12.5063L11.0858 17.2485H7.78729L9.20779 14.3692V14.37ZM11.0873 10.56H14.385L12.969 13.431H9.67054L11.0873 10.56ZM12.966 6.75H16.2645L14.8478 9.62175H11.55L12.966 6.75Z" fill={color} fillOpacity={0.6} /><Path d="M12.4426 14.37H15.7411L14.3214 17.2485H11.0229L12.4434 14.3692L12.4426 14.37ZM14.3221 10.56H17.6206L16.2046 13.431H12.9061L14.3221 10.56ZM16.2016 6.75H19.5001L18.0834 9.62175H14.7856L16.2016 6.75Z" fill={color} /></Svg>;
}
export default emc2;