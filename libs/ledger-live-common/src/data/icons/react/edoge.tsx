
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function edoge({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M6.72818 6.76193H10.8022C12.4177 6.76193 13.2202 6.71093 14.4247 6.82118C15.6299 6.94868 16.8352 7.44068 17.6152 8.38343C18.5339 9.47843 18.8024 10.9559 18.7417 12.3307C18.6817 13.6979 18.2129 15.1319 17.1382 16.0657C16.1849 16.9237 14.8507 17.2379 13.5847 17.2462C11.1232 17.2544 8.66993 17.2462 6.20843 17.2462C5.93993 17.2289 5.63618 17.2544 5.42843 17.0677C5.06468 16.7032 5.28143 15.9217 5.86193 15.9554C7.23143 15.9134 8.60918 15.9554 9.97943 15.9299C9.95318 14.7757 9.97043 13.6214 9.97043 12.4754C8.91293 12.4664 7.86368 12.4754 6.80693 12.4754C6.57218 12.4664 6.31193 12.4664 6.13043 12.3134C5.91368 12.1184 5.91368 11.7877 6.00893 11.5334C6.13043 11.2529 6.45968 11.2019 6.73718 11.2019C7.81193 11.1929 8.89568 11.2019 9.96968 11.2019C9.98768 10.1489 9.95318 9.09593 9.98768 8.05193C8.78243 8.04368 7.57793 8.05193 6.37268 8.05193C6.10418 8.04368 5.80118 8.04368 5.59268 7.85693C5.37668 7.57643 5.42018 7.17743 5.60168 6.89693C5.94818 6.72743 6.34718 6.76193 6.72818 6.76193ZM11.4787 11.2019C11.9722 11.2102 12.4664 11.1674 12.9607 11.2357C13.5502 11.3204 13.5502 12.3562 12.9517 12.4409C12.4664 12.5174 11.9639 12.4664 11.4697 12.4754C11.4787 13.4767 11.4697 14.4704 11.4697 15.4717C11.4787 15.6419 11.4869 15.8962 11.7037 15.9134C12.2932 15.9644 12.8062 15.9472 13.4722 15.9472C14.4599 15.9899 15.5002 15.6847 16.1932 14.9624C16.9042 14.2072 17.1644 13.1549 17.1817 12.1522C17.2079 11.0407 16.9994 9.81818 16.1842 8.98568C15.4484 8.23868 14.3392 7.98443 13.3072 8.04368C12.7192 8.04368 12.2152 8.02643 11.6692 8.07743C11.4959 8.12843 11.4869 8.34068 11.4787 8.49368V11.2012V11.2019Z" fill={color} /></svg>;
}
export default edoge;