
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function mcap({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M11.6491 6.04822C12.0669 5.92597 12.5101 6.05047 12.8709 6.26872C14.4797 7.19019 16.0958 8.09897 17.7189 8.99497C18.3436 9.32572 18.7591 10.0045 18.7501 10.705C18.7486 13.0255 18.7426 15.3475 18.7464 17.668C18.7719 17.8292 18.6624 18.013 18.4794 17.9965C17.7586 18.001 17.0379 17.998 16.3171 17.9972C16.1596 18.0205 16.0081 17.8885 16.0246 17.7287C15.9556 15.7525 15.9819 13.774 16.0021 11.7962C16.0021 11.5487 15.9541 11.2877 15.7944 11.0875C15.6324 10.8752 15.3766 10.7665 15.1479 10.6405C14.7729 10.444 14.4196 10.2062 14.0311 10.0345C13.8841 9.97597 13.6929 9.91297 13.5541 10.0247C13.4004 10.1695 13.4019 10.3982 13.3861 10.5932C13.3578 11.563 13.355 12.5333 13.3779 13.5032C13.3771 13.7327 13.3846 13.9997 13.2091 14.1782C13.0299 14.3537 12.7591 14.3567 12.5236 14.3605C12.0976 14.356 11.6716 14.3717 11.2471 14.3507C11.0671 14.3312 10.8511 14.3207 10.7341 14.1632C10.6291 14.008 10.6336 13.8122 10.6246 13.6337C10.6224 12.6145 10.6351 11.5945 10.6246 10.576C10.6141 10.396 10.6171 10.1935 10.4896 10.051C10.3674 9.92497 10.1724 9.96622 10.0254 10.0195C9.70664 10.144 9.42089 10.3345 9.11864 10.492C8.81639 10.666 8.49164 10.8145 8.23214 11.0515C8.06339 11.2052 8.01839 11.4392 8.01314 11.6552C8.00939 13.6577 8.01539 15.6587 7.99814 17.6612C8.01539 17.8127 7.92539 17.9972 7.74839 17.9942C7.00589 18.0032 6.26339 17.998 5.52089 17.9965C5.37239 18.0107 5.23589 17.8802 5.25089 17.7325C5.28089 15.2987 5.26214 12.8642 5.26439 10.4297C5.25741 10.1752 5.32071 9.9236 5.44733 9.70265C5.57394 9.4817 5.75898 9.29991 5.98214 9.17722C7.67339 8.22922 9.36764 7.28722 11.0521 6.32797C11.2426 6.21997 11.4346 6.10672 11.6491 6.04822Z" fill={color} /></Svg>;
}
export default mcap;