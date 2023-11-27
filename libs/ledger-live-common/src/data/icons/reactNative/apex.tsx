
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function apex({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path fillRule="evenodd" clipRule="evenodd" d="M4.5 15.1875L12 5.625L19.5 15.1875V18.375L12 8.8125L4.5 18.375V15.1875ZM12.375 16.125C11.8777 16.125 11.4008 15.9275 11.0492 15.5758C10.6975 15.2242 10.5 14.7473 10.5 14.25C10.5 13.7527 10.6975 13.2758 11.0492 12.9242C11.4008 12.5725 11.8777 12.375 12.375 12.375C12.8723 12.375 13.3492 12.5725 13.7008 12.9242C14.0525 13.2758 14.25 13.7527 14.25 14.25C14.25 14.7473 14.0525 15.2242 13.7008 15.5758C13.3492 15.9275 12.8723 16.125 12.375 16.125Z" fill={color} /></Svg>;
}
export default apex;