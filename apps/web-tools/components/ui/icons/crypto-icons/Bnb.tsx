import * as React from "react";
import type { SVGProps } from "react";
const SvgBnb = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <rect width={56} height={56} fill="#F5BC00" rx={28} />
    <path
      fill="#fff"
      d="M20.223 17.827 28 13.333l7.777 4.493-2.86 1.66L28 16.653l-4.918 2.833zm15.554 5.666-2.86-1.66L28 24.666l-4.918-2.833-2.86 1.66v3.32l4.919 2.833v5.666L28 36.972l2.86-1.66v-5.666l4.917-2.834zm0 8.986v-3.32l-2.86 1.66v3.32zm2.03 1.173-4.918 2.833v3.32l7.778-4.493v-8.986l-2.86 1.66zM34.948 20.66l2.86 1.66v3.32l2.859-1.66v-3.32L37.807 19zm-9.807 17.027v3.32L28 42.667l2.86-1.66v-3.32L28 39.347zm-4.918-5.208 2.859 1.66v-3.32l-2.86-1.66zm4.918-11.82L28 22.32l2.86-1.66L28 19zm-6.948 1.66 2.859-1.66-2.86-1.66-2.859 1.66v3.32l2.86 1.66zm0 5.667-2.86-1.66v8.986l7.777 4.493v-3.32l-4.917-2.833z"
    />
  </svg>
);
export default SvgBnb;
