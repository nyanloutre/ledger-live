import * as React from "react";
import type { SVGProps } from "react";
const SvgInj = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <rect width={56} height={56} fill="#080808" rx={28} />
    <path
      fill="url(#INJ_svg__a)"
      d="M13.607 15.565c.236-.296.486-.583.737-.867.01-.014.037-.017.048-.031.023-.029.06-.046.082-.074l.023-.029c.173-.162.361-.335.574-.489.756-.574 1.54-1.011 2.37-1.299 2.655-.932 5.611-.358 7.93 1.83 3.238 3.037 2.948 7.923.364 11.172-3.265 4.843-8.876 11.6-1.108 17.654 1.398 1.089 2.433 1.987 6.833 3.258-2.88.531-5.546.367-8.516-.392-2.1-1.186-5.403-3.724-6.528-7.155-1.7-5.202 2.99-12.976 5.255-15.969 3.112-4.144-1.924-8.63-5.63-3.621-1.939 2.61-5.327 9.997-4.15 15.474.688 3.107 1.606 5.372 5.246 8.482q-1.01-.597-1.966-1.356c-8.456-7.88-7.473-20.059-1.564-26.588"
    />
    <path
      fill="url(#INJ_svg__b)"
      d="M42.394 40.435c-.236.296-.486.583-.736.867-.011.014-.037.017-.049.031-.022.029-.06.046-.082.074l-.023.029a6 6 0 0 1-.574.489c-.756.574-1.543 1.012-2.37 1.299-2.655.932-5.61.358-7.93-1.83-3.238-3.037-2.948-7.923-.364-11.172 3.266-4.843 8.876-11.6 1.106-17.654-1.396-1.089-2.433-1.987-6.833-3.258 2.879-.531 5.545-.366 8.515.392 2.1 1.186 5.403 3.727 6.529 7.155 1.7 5.202-2.99 12.976-5.255 15.969-3.113 4.144 1.924 8.63 5.63 3.621 1.939-2.61 5.327-9.997 4.15-15.474-.688-3.107-1.606-5.372-5.247-8.482q1.011.597 1.967 1.356c8.456 7.876 7.475 20.06 1.566 26.588"
    />
    <defs>
      <linearGradient
        id="INJ_svg__a"
        x1={9}
        x2={47.002}
        y1={29.675}
        y2={29.675}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0082FA" />
        <stop offset={1} stopColor="#00F2FE" />
      </linearGradient>
      <linearGradient
        id="INJ_svg__b"
        x1={9}
        x2={47.001}
        y1={26.328}
        y2={26.328}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0082FA" />
        <stop offset={1} stopColor="#00F2FE" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgInj;
