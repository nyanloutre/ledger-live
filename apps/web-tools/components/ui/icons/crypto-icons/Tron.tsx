import * as React from "react";
import type { SVGProps } from "react";
const SvgTron = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <rect width={56} height={56} fill="#FF060A" rx={28} />
    <path
      fill="#fff"
      d="M36.306 18.853 15.75 15.069l10.818 27.223 15.074-18.366zm-.33 1.666 3.145 2.99-8.6 1.557zm-7.324 4.235-9.065-7.518 14.816 2.726zm-.645 1.33-1.479 12.22-7.97-20.058 9.449 7.837zm1.367.648 9.525-1.723-10.925 13.307z"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="m36.435 18.6 5.578 5.303-15.527 18.918-11.17-28.108zm-.46 1.919-5.455 4.547 8.6-1.557zm2.57 2.817-2.581-2.453-4.476 3.73zm-9.893 1.418 5.751-4.792-14.816-2.726zm-8.088-7.062 8.087 6.708 5.132-4.275zM15.75 15.07l10.818 27.223 15.074-18.366-5.336-5.073zm11.969 11.128-8.514-7.061 7.181 18.075zm.288-.113v-.002l-9.448-7.836 7.97 20.059zm1.613.88-1.264 10.458 9.862-12.014zm-.246-.232-1.4 11.584L38.899 25.01z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTron;
