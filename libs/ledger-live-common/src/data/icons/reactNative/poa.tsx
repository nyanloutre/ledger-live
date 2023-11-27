
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function poa({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M3.75 18L12 3.75L20.25 18H3.75ZM8.904 10.743C9.86775 10.0995 10.9012 9.77475 12 9.77475C13.0988 9.77475 14.1322 10.0995 15.096 10.743L12 5.3955L8.904 10.743ZM7.44075 13.2705L5.193 17.1532H18.807L16.5592 13.2712C15.2018 14.763 13.677 15.5205 12 15.5205C10.323 15.5205 8.7975 14.763 7.44 13.2705H7.44075ZM12 14.6737C13.4535 14.6737 14.7832 14.0062 16.0035 12.6488C14.7832 11.289 13.4535 10.6223 12 10.6223C10.5465 10.6223 9.21675 11.2898 7.9965 12.648C9.21675 14.007 10.5465 14.6745 12 14.6745V14.6737ZM12 14.3115C11.13 14.3115 10.4243 13.5802 10.4243 12.678C10.4243 11.7765 11.1293 11.0452 12 11.0452C12.8708 11.0452 13.5758 11.7765 13.5758 12.678C13.5758 13.5802 12.8708 14.3115 12 14.3115ZM12 13.464C12.4193 13.464 12.759 13.1122 12.759 12.678C12.759 12.2437 12.4193 11.892 12 11.892C11.5807 11.892 11.241 12.2445 11.241 12.678C11.241 13.113 11.5807 13.4647 12 13.4647V13.464Z" fill={color} /><Path d="M3.75 19.125L12 4.875L20.25 19.125H3.75ZM8.904 11.868C9.86775 11.2245 10.9012 10.8997 12 10.8997C13.0988 10.8997 14.1322 11.2245 15.096 11.868L12 6.5205L8.904 11.868ZM7.44075 14.3955L5.193 18.2782H18.807L16.5592 14.3962C15.2018 15.888 13.677 16.6455 12 16.6455C10.323 16.6455 8.7975 15.888 7.44 14.3955H7.44075ZM12 15.7987C13.4535 15.7987 14.7832 15.1312 16.0035 13.7738C14.7832 12.414 13.4535 11.7473 12 11.7473C10.5465 11.7473 9.21675 12.4148 7.9965 13.773C9.21675 15.132 10.5465 15.7995 12 15.7995V15.7987ZM12 15.4365C11.13 15.4365 10.4243 14.7052 10.4243 13.803C10.4243 12.9015 11.1293 12.1702 12 12.1702C12.8708 12.1702 13.5758 12.9015 13.5758 13.803C13.5758 14.7052 12.8708 15.4365 12 15.4365ZM12 14.589C12.4193 14.589 12.759 14.2372 12.759 13.803C12.759 13.3687 12.4193 13.017 12 13.017C11.5807 13.017 11.241 13.3695 11.241 13.803C11.241 14.238 11.5807 14.5897 12 14.5897V14.589Z" fill={color} /></Svg>;
}
export default poa;