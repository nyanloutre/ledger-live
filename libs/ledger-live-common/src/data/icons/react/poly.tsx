
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function poly({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M20.25 8.07225L20.217 7.542L20.0535 7.98675L19.134 8.75925L18.081 8.916L17.766 8.62425L18.6893 7.3995L19.6343 7.125L18.6112 7.146L17.124 8.1825L15.7297 8.0865L13.7723 7.125L12.6157 7.34925L9.0075 10.2338L7.269 10.7715L6.5535 11.4698L5.274 11.487L4.64025 12.6195L3.75 12.8655L4.5915 12.9758L5.37375 11.961L6.58275 12.2032L6.56025 13.2892L5.9565 14.8522L5.6115 16.2983L5.24025 16.875L6.18225 16.6755L6.075 16.0845L6.876 14.496L8.418 13.8983L9.015 12.9473L10.0237 12.2422L12.0262 12.5235L14.043 11.6722L13.7017 13.0185L12.8048 13.0965L12.549 14.2005L13.3162 13.7092L14.5883 13.179L15.582 11.6797L15.645 10.971L16.179 11.5013L17.7323 12.438L18.615 12.0353L18.5632 10.056L18.3068 9.29025L19.4603 9.009L20.25 8.07225Z" fill={color} /></svg>;
}
export default poly;