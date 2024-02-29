import * as React from "react";
import type { SVGProps } from "react";
const SvgNear = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <rect width={56} height={56} fill="#00EC97" rx={28} />
    <path
      fill="#1C1D1F"
      d="m37.87 13.326-6.827 10.137a.726.726 0 0 0 1.088.955l6.718-5.808a.269.269 0 0 1 .45.204v18.253a.272.272 0 0 1-.48.174L18.508 12.923a3.48 3.48 0 0 0-2.655-1.256h-.707a3.477 3.477 0 0 0-3.478 3.48v25.706a3.48 3.48 0 0 0 3.478 3.48 3.48 3.48 0 0 0 2.964-1.658l6.826-10.138a.726.726 0 0 0-1.088-.954l-6.718 5.807a.269.269 0 0 1-.45-.203V18.95a.272.272 0 0 1 .48-.174L37.47 43.096a3.48 3.48 0 0 0 2.658 1.234h.726a3.477 3.477 0 0 0 3.478-3.481V15.148a3.48 3.48 0 0 0-3.5-3.481 3.48 3.48 0 0 0-2.963 1.659"
    />
  </svg>
);
export default SvgNear;
