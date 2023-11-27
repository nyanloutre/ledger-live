
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function game({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M10.4019 9.51367H18.7156V11.3797H10.4019V9.51367ZM18.7156 12.6217H18.7501V17.5289C18.7501 17.5289 12.2649 22.2277 7.22787 17.1149C7.22787 17.1149 4.46787 14.3159 5.46837 10.2389C5.46837 10.2389 6.26187 5.16067 12.2994 4.53892C12.2994 4.53892 16.0246 4.01992 18.4396 6.78442L16.9906 8.20042C16.9906 8.20042 13.9201 5.02192 9.81537 7.51042C9.81537 7.51042 6.46887 9.37567 7.84887 14.0744C7.84887 14.0744 9.36687 18.1514 14.1271 17.3219C14.1271 17.3219 15.7486 16.9529 16.5766 16.2389V14.4877H10.4026V12.6217H18.7156Z" fill={color} /></svg>;
}
export default game;