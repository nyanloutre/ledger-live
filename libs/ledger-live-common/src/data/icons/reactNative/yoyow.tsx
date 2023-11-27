
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function yoyow({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M16.1175 12.4313C16.3725 12.7043 16.527 13.068 16.527 13.467C16.527 14.3137 15.831 15 14.973 15C14.1158 15 13.4205 14.3137 13.4205 13.467C13.4205 13.068 13.575 12.7043 13.8285 12.4313C13.7467 12.494 13.6491 12.5328 13.5466 12.5434C13.4441 12.5539 13.3406 12.5359 13.2478 12.4912C13.1549 12.4465 13.0762 12.3769 13.0205 12.2902C12.9648 12.2035 12.9343 12.103 12.9323 12C12.932 11.8774 12.9736 11.7584 13.05 11.6625C12.7732 11.913 12.405 12.066 12 12.066C11.595 12.066 11.2268 11.913 10.95 11.6625C11.0264 11.7584 11.068 11.8774 11.0677 12C11.0677 12.3022 10.8203 12.5475 10.5128 12.5475C10.3893 12.5476 10.2692 12.5067 10.1715 12.4313C10.425 12.7043 10.5803 13.068 10.5803 13.467C10.5803 14.3137 9.88425 15 9.027 15C8.169 15 7.473 14.3137 7.473 13.467C7.473 13.068 7.62825 12.7043 7.88175 12.4313C7.79996 12.494 7.70239 12.5328 7.59987 12.5434C7.49735 12.5539 7.3939 12.5359 7.30103 12.4912C7.20815 12.4465 7.12949 12.3769 7.07379 12.2902C7.01809 12.2035 6.98752 12.103 6.9855 12C6.9853 11.8774 7.02682 11.7584 7.10325 11.6625C6.8265 11.913 6.45825 12.066 6.05325 12.066C5.19525 12.066 4.5 11.3797 4.5 10.533C4.5 9.68625 5.19525 9 6.05325 9C6.91125 9 7.6065 9.68625 7.6065 10.533C7.60666 10.9176 7.46054 11.2879 7.19775 11.5688C7.27953 11.5058 7.37718 11.4668 7.47982 11.4561C7.58246 11.4454 7.68605 11.4634 7.77905 11.5082C7.87205 11.5529 7.95081 11.6225 8.00655 11.7094C8.0623 11.7962 8.09283 11.8968 8.09475 12C8.09495 12.1226 8.05343 12.2416 7.977 12.3375C8.253 12.087 8.622 11.934 9.027 11.934C9.432 11.934 9.7995 12.087 10.077 12.3375C10.0003 12.2417 9.95851 12.1227 9.9585 12C9.88311 11.942 9.82382 11.8656 9.78629 11.7782C9.74876 11.6908 9.73424 11.5952 9.7441 11.5006C9.75396 11.406 9.78789 11.3155 9.84264 11.2377C9.89739 11.1599 9.97115 11.0974 10.0569 11.0562C10.1426 11.0149 10.2375 10.9963 10.3325 11.0022C10.4274 11.008 10.5193 11.038 10.5994 11.0894C10.6794 11.1408 10.745 11.2118 10.7898 11.2957C10.8347 11.3796 10.8573 11.4736 10.8555 11.5688C10.5928 11.2878 10.4467 10.9176 10.4467 10.533C10.4467 9.68625 11.142 9 12 9C12.858 9 13.5532 9.68625 13.5532 10.533C13.5534 10.9176 13.4073 11.2879 13.1445 11.5688C13.2263 11.5058 13.3239 11.4668 13.4266 11.4561C13.5292 11.4454 13.6328 11.4634 13.7258 11.5082C13.8188 11.5529 13.8976 11.6225 13.9533 11.7094C14.009 11.7962 14.0396 11.8968 14.0415 12C14.0417 12.1226 14.0002 12.2416 13.9237 12.3375C14.1997 12.087 14.5688 11.934 14.9738 11.934C15.3787 11.934 15.7463 12.087 16.0238 12.3375C15.9471 12.2417 15.9053 12.1227 15.9053 12C15.8299 11.942 15.7706 11.8656 15.733 11.7782C15.6955 11.6908 15.681 11.5952 15.6908 11.5006C15.7007 11.406 15.7346 11.3155 15.7894 11.2377C15.8441 11.1599 15.9179 11.0974 16.0036 11.0562C16.0894 11.0149 16.1842 10.9963 16.2792 11.0022C16.3742 11.008 16.466 11.038 16.5461 11.0894C16.6262 11.1408 16.6917 11.2118 16.7366 11.2957C16.7814 11.3796 16.804 11.4736 16.8022 11.5688C16.5396 11.2878 16.3935 10.9176 16.3935 10.533C16.3935 9.68625 17.0888 9 17.9468 9C18.8048 9 19.5 9.68625 19.5 10.533C19.5 11.3797 18.8048 12.066 17.9468 12.066C17.5418 12.066 17.1735 11.913 16.8967 11.6625C16.9732 11.7584 17.0147 11.8774 17.0145 12C17.0145 12.3022 16.767 12.5475 16.4595 12.5475C16.336 12.5476 16.216 12.5067 16.1182 12.4313H16.1175Z" fill={color} /></Svg>;
}
export default yoyow;