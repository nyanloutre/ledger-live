
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function bos({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path fillRule="evenodd" clipRule="evenodd" d="M10.449 14.2125V12.7748H12.6645C14.142 12.7748 14.8807 12.4058 14.8807 11.6678V7.79475C14.8807 7.0575 14.142 6.6885 12.6645 6.6885H9.12V9.012H7.125V5.25H12.4425C15.3975 5.25 16.875 6.0615 16.875 7.6845V11.7787C16.875 13.4017 15.3975 14.2133 12.4425 14.2133H10.449V14.2125ZM14.8807 15.0983H16.875V16.3155C16.875 17.9385 15.3975 18.75 12.4425 18.75H7.125V10.119H12.4425C12.7552 10.119 13.05 10.128 13.3298 10.146V11.5868C13.1086 11.566 12.8866 11.556 12.6645 11.5568H9.12V17.3115H12.6652C14.1427 17.3115 14.8815 16.9425 14.8815 16.2052V15.0975L14.8807 15.0983Z" fill={color} /></Svg>;
}
export default bos;