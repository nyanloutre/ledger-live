
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function ella({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M13.5548 9.909L12 8.355L10.4348 9.9195L8.81175 8.2965L12 3.75L15.21 8.25375L13.5548 9.909ZM9.8925 10.4625L8.355 12L9.909 13.5548L8.292 15.1718L3.75 12L8.2425 8.8125L9.8925 10.4625ZM14.0805 13.5653L15.645 12L14.097 10.452L15.7665 8.7825L20.25 12L15.717 15.2017L14.0805 13.5653ZM10.452 14.0978L12 15.645L13.5375 14.1075L15.174 15.7448L12 20.25L8.847 15.702L10.452 14.0978ZM12 9.39525L14.604 12L12 14.604L9.396 12L12 9.39525Z" fill={color} /></svg>;
}
export default ella;