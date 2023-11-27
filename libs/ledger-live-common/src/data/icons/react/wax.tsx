
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function wax({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M21 13.8465H19.227L17.9692 12.7695L16.716 13.842H15.2175L14.5012 12.972H12.0322L12.657 12.2003H13.8713L12.9465 11.0692L9.71775 15H8.22L9.1545 13.8585H7.59375L6.75 11.493L5.913 13.8405H4.32975L3 10.1558H4.215L5.109 12.6652L6 10.167H7.5L8.38875 12.66L9.27675 10.1663H10.4955L9.1545 13.8585L9.453 13.494L12.192 10.1602H13.6995L15.9788 12.9412L17.0753 11.9985L13.605 9H15.3862L21 13.8465ZM19.2413 11.6175L18.405 10.9005L19.2397 10.1895L20.9272 10.191L19.2413 11.6175Z" fill={color} /></svg>;
}
export default wax;