
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function vet({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M11.0527 17.8005L5.27924 6.0345C5.25819 5.99116 5.24848 5.94318 5.251 5.89506C5.25353 5.84694 5.26821 5.80025 5.29368 5.75935C5.31915 5.71844 5.35458 5.68466 5.39665 5.66117C5.43872 5.63768 5.48606 5.62523 5.53424 5.625H7.53524C7.64249 5.625 7.74299 5.685 7.79024 5.7795L12.0067 14.3153C12.3817 15.0802 13.47 15.0802 13.8457 14.3153L18.0487 5.78625C18.073 5.73957 18.1096 5.70047 18.1546 5.67322C18.1995 5.64596 18.2512 5.63162 18.3037 5.63175H18.5527C18.7005 5.63175 18.7942 5.78625 18.7275 5.91375L12.8925 17.8013C12.5167 18.5663 11.4292 18.5663 11.0527 17.8013V17.8005Z" fill={color} /></Svg>;
}
export default vet;