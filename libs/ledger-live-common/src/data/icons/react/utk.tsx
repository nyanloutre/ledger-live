
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function utk({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M10.7647 16.7235V6.771H7.875V4.5H16.125V6.771H13.2352V16.7235H10.7647ZM10.0995 19.5C8.60775 19.5 7.902 18.783 7.902 17.2665V7.422H10.0725V17.166C10.0725 17.406 10.1512 17.4855 10.3867 17.4855H13.641C13.8765 17.4855 13.956 17.4053 13.956 17.166V7.422H16.125V17.2665C16.125 18.783 15.4185 19.5 13.9275 19.5H10.0995Z" fill={color} /></svg>;
}
export default utk;