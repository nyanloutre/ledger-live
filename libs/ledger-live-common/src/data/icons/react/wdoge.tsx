
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function wdoge({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 360 360" fill="none"><path fill={color} d="M 170.29488,47.801248 C 75.785015,55.694613 19.268955,155.46673 61.681794,239.6097 101.9389,319.49055 207.86778,337.43466 272.22354,275.34039 327.89899,221.50769 325.7406,131.73402 267.5416,80.532318 241.0199,57.220617 204.60416,44.959733 170.29488,47.801248 m 17.04916,10.735054 C 281.59107,64.482568 333.63498,170.20087 280.7487,248.45027 228.9164,325.22639 112.83142,317.54348 71.259163,234.61068 29.372032,151.09895 94.256186,52.695081 187.34404,58.536302 m -53.0425,71.829468 v 24.15363 l 11.47022,-0.0486 11.42093,-0.11295 0.16152,-12.89269 v -12.89225 l 15.57626,0.16143 c 16.99631,0.11296 17.52212,0.16129 23.9945,2.26266 43.67684,14.3134 43.67684,83.88008 0,98.19335 -6.47238,2.10494 -6.99819,2.15746 -23.9945,2.26278 l -15.57626,0.1613 v -12.89237 l -0.16152,-12.89242 -11.42093,-0.11294 -11.47022,-0.0486 v 48.30732 h 24.73202 c 28.73211,0 32.99422,-0.26311 42.51876,-2.73647 32.46767,-8.36694 49.99227,-33.30983 49.99227,-71.14528 0,-37.83547 -17.5246,-62.7786 -49.99227,-71.14548 -9.52454,-2.47291 -13.78665,-2.73634 -42.51876,-2.73634 h -24.73202 v 24.15383 m -18.62824,49.72868 v 11.05072 h 73.5654 v -22.10194 h -73.5654 v 11.05085" /><path fill={color} d="m 177.76409,253.90801 h -43.62398 v -48.09677 h 22.99613 v 25.8903 h 23.25805 c 14.73388,0 27.36315,-5.4202 36.46773,-15.68157 8.36643,-9.41935 12.94512,-22.20661 12.94512,-35.99367 0,-13.78706 -4.57869,-26.57429 -12.94512,-35.99364 -9.10458,-10.26134 -21.73385,-15.73421 -36.46773,-15.73421 h -23.25805 v 25.94285 h -22.99613 v -48.14941 h 43.62398 c 46.25411,0 73.88191,27.62683 73.88191,73.93441 0,46.25504 -27.6278,73.88171 -73.88191,73.88171 M 115.7748,185.23583 v -16.20752 h 73.3545 v 21.99598 H 115.7748 Z M 180.02645,58.100223 c -67.19866,0 -121.925869,54.727337 -121.925869,121.926077 0,67.19873 54.727209,121.87334 121.925869,121.87334 67.19862,0 121.87304,-54.67461 121.87304,-121.87334 0,-67.19874 -54.67442,-121.926077 -121.87304,-121.926077" /><path fill={color} d="m 180.02645,312.58208 c -73.09253,0 -132.608466,-59.46322 -132.608466,-132.55578 0,-73.09257 59.515936,-132.608365 132.608466,-132.608365 73.09265,0 132.55565,59.515795 132.55565,132.608365 0,73.09256 -59.463,132.55578 -132.55565,132.55578 m 0,-282.582095 C 97.145734,29.999985 30,97.146178 30,180.0263 30,262.85385 97.145734,330 180.02645,330 c 82.82692,0 149.97354,-67.14615 149.97354,-149.9737 0,-82.880122 -67.14662,-150.026315 -149.97354,-150.026315" /></svg>;
}
export default wdoge;