
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function ctr({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 20.25C7.44375 20.25 3.75 16.5562 3.75 12C3.75 7.44375 7.44375 3.75 12 3.75C16.5562 3.75 20.25 7.44375 20.25 12C20.25 16.5562 16.5562 20.25 12 20.25ZM12 19.0905C13.8805 19.0905 15.684 18.3435 17.0137 17.0137C18.3435 15.684 19.0905 13.8805 19.0905 12C19.0905 10.1195 18.3435 8.31599 17.0137 6.98626C15.684 5.65653 13.8805 4.9095 12 4.9095C10.1195 4.9095 8.31599 5.65653 6.98626 6.98626C5.65653 8.31599 4.9095 10.1195 4.9095 12C4.9095 13.8805 5.65653 15.684 6.98626 17.0137C8.31599 18.3435 10.1195 19.0905 12 19.0905ZM12.054 16.9058C9.35625 16.9058 7.1835 14.8432 7.1835 12.027V12C7.1835 9.2505 9.30225 7.095 12.162 7.095C14.091 7.095 15.3322 7.9035 16.1693 9.06225L14.199 10.5848C13.659 9.91125 13.0388 9.48 12.135 9.48C10.8128 9.48 9.882 10.5982 9.882 11.973V12C9.882 13.4152 10.8128 14.52 12.135 14.52C13.1198 14.52 13.7002 14.0625 14.2665 13.3748L16.2367 14.7765C15.3457 16.0027 14.145 16.9058 12.054 16.9058Z" fill={color} /><path fillRule="evenodd" clipRule="evenodd" d="M12 20.25C7.44375 20.25 3.75 16.5562 3.75 12C3.75 7.44375 7.44375 3.75 12 3.75C16.5562 3.75 20.25 7.44375 20.25 12C20.25 16.5562 16.5562 20.25 12 20.25ZM12 19.0905C13.8805 19.0905 15.684 18.3435 17.0137 17.0137C18.3435 15.684 19.0905 13.8805 19.0905 12C19.0905 10.1195 18.3435 8.31599 17.0137 6.98626C15.684 5.65653 13.8805 4.9095 12 4.9095C10.1195 4.9095 8.31599 5.65653 6.98626 6.98626C5.65653 8.31599 4.9095 10.1195 4.9095 12C4.9095 13.8805 5.65653 15.684 6.98626 17.0137C8.31599 18.3435 10.1195 19.0905 12 19.0905ZM12.054 16.9058C9.35625 16.9058 7.1835 14.8432 7.1835 12.027V12C7.1835 9.2505 9.30225 7.095 12.162 7.095C14.091 7.095 15.3322 7.9035 16.1693 9.06225L14.199 10.5848C13.659 9.91125 13.0388 9.48 12.135 9.48C10.8128 9.48 9.882 10.5982 9.882 11.973V12C9.882 13.4152 10.8128 14.52 12.135 14.52C13.1198 14.52 13.7002 14.0625 14.2665 13.3748L16.2367 14.7765C15.3457 16.0027 14.145 16.9058 12.054 16.9058Z" fill={color} /></svg>;
}
export default ctr;