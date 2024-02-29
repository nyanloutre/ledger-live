import * as React from "react";
import type { SVGProps } from "react";
const SvgJup = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <rect width={56} height={56} fill="#0A0A0A" rx={28} />
    <path
      fill="#009046"
      d="M34.564 39.875a2.813 2.813 0 1 0 0-5.626 2.813 2.813 0 0 0 0 5.626M44.095 16.125H28l1.46 1.939a3.08 3.08 0 0 1 .066 3.613L21.29 33.474a4.74 4.74 0 0 1-3.883 2.024H9.455a20 20 0 0 0 2.452 4.376h10.586A6.71 6.71 0 0 0 28 37.002l10.668-15.281a2.86 2.86 0 0 1 2.344-1.223h5.536a20 20 0 0 0-2.453-4.373"
    />
    <path
      fill="#009046"
      d="M12.308 33.313a16.6 16.6 0 0 1-.87-5.313c0-9.148 7.416-16.562 16.562-16.562 3.213 0 6.212.916 8.752 2.5h5.47A19.94 19.94 0 0 0 28.001 8C16.955 8 8 16.953 8 28c0 1.84.25 3.62.715 5.313zM43.693 22.687c.565 1.668.871 3.454.871 5.313 0 9.148-7.416 16.562-16.562 16.562-3.214 0-6.213-.916-8.753-2.5H13.78A19.94 19.94 0 0 0 28 48c11.047 0 20-8.955 20-20 0-1.84-.25-3.62-.715-5.313z"
    />
  </svg>
);
export default SvgJup;
