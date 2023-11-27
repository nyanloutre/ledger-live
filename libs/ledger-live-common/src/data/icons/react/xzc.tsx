
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function xzc({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M14.0438 14.361H16.5863V16.584H8.94751L18.4298 7.09497C18.5801 6.94279 18.6829 6.7501 18.7255 6.54045C18.7682 6.3308 18.7488 6.11328 18.6698 5.91447C18.5859 5.71686 18.4456 5.54841 18.2664 5.4302C18.0872 5.31199 17.8772 5.2493 17.6625 5.24997H6.33751C6.19429 5.24897 6.0523 5.27646 5.91981 5.33085C5.78732 5.38525 5.66697 5.46545 5.56577 5.56679C5.46456 5.66813 5.38453 5.78859 5.33032 5.92116C5.27611 6.05372 5.24881 6.19575 5.25001 6.33896V14.361L9.95626 9.65097H7.41376V7.41596H15.0398L5.57026 16.905C5.41989 17.0571 5.31711 17.2498 5.27449 17.4595C5.23186 17.6691 5.25124 17.8867 5.33026 18.0855C5.50201 18.4867 5.89126 18.75 6.33751 18.75H17.6625C17.8054 18.75 17.947 18.7218 18.079 18.667C18.2111 18.6123 18.331 18.5321 18.432 18.4309C18.533 18.3298 18.6131 18.2097 18.6677 18.0776C18.7222 17.9455 18.7502 17.8039 18.75 17.661V9.65097L14.0438 14.361Z" fill={color} /></svg>;
}
export default xzc;