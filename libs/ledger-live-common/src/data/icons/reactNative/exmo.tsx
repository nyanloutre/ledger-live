
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function exmo({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path fillRule="evenodd" clipRule="evenodd" d="M14.796 9.41625L12.6442 15.2288L12.6307 15.264L12.2362 14.4728L11.4112 14.8478L13.575 9L14.4 8.625L14.7952 9.41625H14.796ZM20.181 9.5535L18.03 15.375L17.6347 14.5815L16.8097 14.9565L16.86 14.82L19.0102 9L19.8352 8.625L20.229 9.41625L20.181 9.5535ZM15.576 14.5875L16.8427 11.1653L16.0155 11.5403L15.6225 10.7475L14.352 14.169L14.7457 14.9625L15.576 14.5875ZM8.72325 11.2125H4.9395L5.5845 11.8125L4.9395 12.4222H8.7195L9.3615 11.8125L8.72325 11.2125ZM4.416 13.7498H10.5322L9.8895 14.355L10.5322 14.9587H4.416L3.771 14.355L4.416 13.749V13.7498ZM6.29175 8.67375H12.4042L11.7637 9.27975L12.405 9.8835H6.2925L5.6475 9.279L6.2925 8.67375H6.29175Z" fill={color} /></Svg>;
}
export default exmo;