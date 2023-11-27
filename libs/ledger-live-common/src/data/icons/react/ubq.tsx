
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function ubq({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M13.6613 5.63101L19.494 8.68201L13.8743 12.1268L13.6613 5.63101ZM10.3388 18.3368L4.50601 15.2858L10.1258 11.8403L10.3388 18.3368Z" fill={color} fillOpacity={0.2} /><path d="M19.494 15.5093L11.3843 20.25V13.5983L19.494 8.682V15.5093ZM4.50601 8.45925L12.6158 3.75V10.3755L4.50601 15.2858V8.4585V8.45925Z" fill={color} /></svg>;
}
export default ubq;