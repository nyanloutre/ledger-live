
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function sc({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path fillRule="evenodd" clipRule="evenodd" d="M12 5.625C13.6908 5.625 15.3123 6.29665 16.5078 7.49219C17.7034 8.68774 18.375 10.3092 18.375 12V18.375H12C10.3092 18.375 8.68774 17.7034 7.49219 16.5078C6.29665 15.3123 5.625 13.6908 5.625 12C5.625 10.3092 6.29665 8.68774 7.49219 7.49219C8.68774 6.29665 10.3092 5.625 12 5.625ZM15.825 15.825V12.0577C15.825 9.94275 14.1337 8.1855 12.0195 8.175C11.5141 8.17302 11.0133 8.2711 10.5459 8.4636C10.0786 8.65611 9.654 8.93921 9.29661 9.29661C8.93921 9.654 8.65611 10.0786 8.4636 10.5459C8.2711 11.0133 8.17302 11.5141 8.175 12.0195C8.1855 14.1337 9.9435 15.825 12.0577 15.825H15.825Z" fill={color} /></Svg>;
}
export default sc;