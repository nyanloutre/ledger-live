
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function etc({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M12.0004 12.4324L6.95964 11.9996L11.9996 9.14814V12.4324H12.0004ZM12.0004 15.7774V20.9824C10.2476 18.2539 8.31564 15.2509 6.75864 12.8201C8.59614 13.8551 10.5146 14.9374 12.0004 15.7781V15.7774ZM12.0004 8.22639L6.75864 11.1514L12.0004 3.01764V8.22639Z" fill={color} /><path d="M17.0412 11.9996L12.0005 12.4324V9.14814L17.0405 11.9996H17.0412ZM12.0005 15.7781C13.4855 14.9381 15.4032 13.8551 17.2415 12.8201C15.6845 15.2516 13.7525 18.2546 12.0005 20.9816V15.7781ZM12.0005 8.22639V3.01764L17.2415 11.1514L12.0005 8.22639Z" fill={color} /><path opacity={0.2} fillRule="evenodd" clipRule="evenodd" d="M12.0005 12.4324L17.0405 11.9996L12.0005 14.8309V12.4324Z" fill={color} /><path opacity={0.603} fillRule="evenodd" clipRule="evenodd" d="M11.9996 12.4324L6.95886 11.9996L11.9996 14.8309V12.4324Z" fill={color} /></svg>;
}
export default etc;