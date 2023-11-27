
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function rise({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M9.45377 6.86625C8.81102 6.86625 8.28977 6.33675 8.28977 5.6835C8.28977 5.03025 8.81102 4.5 9.45377 4.5C10.0973 4.5 10.6185 5.0295 10.6185 5.6835C10.6185 6.3375 10.0973 6.86625 9.45377 6.86625ZM14.5853 19.5C14.4311 19.4987 14.2787 19.4671 14.1368 19.4069C13.9949 19.3468 13.8662 19.2592 13.7581 19.1493C13.6501 19.0394 13.5647 18.9093 13.5069 18.7664C13.4491 18.6235 13.42 18.4706 13.4213 18.3165C13.4213 17.664 13.9425 17.1337 14.5853 17.1337C15.2288 17.1337 15.75 17.6633 15.75 18.3165C15.75 18.9705 15.2288 19.5 14.5853 19.5ZM9.93152 10.6575C9.82277 10.7422 9.69821 10.8043 9.56514 10.8402C9.43207 10.8761 9.29317 10.885 9.15659 10.8665C9.02001 10.848 8.88851 10.8024 8.76979 10.7324C8.65108 10.6624 8.54755 10.5693 8.46527 10.4587C8.29661 10.2343 8.22258 9.95265 8.25903 9.67424C8.29548 9.39583 8.43951 9.14276 8.66027 8.96925L14.0288 4.79775C14.1375 4.71307 14.2621 4.65096 14.3951 4.61507C14.5282 4.57918 14.6671 4.57023 14.8037 4.58874C14.9403 4.60725 15.0718 4.65286 15.1905 4.72288C15.3092 4.7929 15.4127 4.88593 15.495 4.9965C15.6639 5.22104 15.7381 5.50283 15.7016 5.78142C15.6652 6.06001 15.521 6.31322 15.3 6.48675L9.93152 10.6575ZM9.97127 14.9093C9.86252 14.9939 9.73796 15.056 9.60489 15.0919C9.47182 15.1278 9.33292 15.1368 9.19634 15.1183C9.05976 15.0997 8.92826 15.0541 8.80955 14.9841C8.69083 14.9141 8.5873 14.8211 8.50502 14.7105C8.33613 14.486 8.26196 14.2042 8.29842 13.9256C8.33487 13.647 8.47904 13.3938 8.70002 13.2203L14.0685 9.0495C14.1773 8.96482 14.3018 8.90271 14.4349 8.86682C14.568 8.83093 14.7069 8.82198 14.8434 8.84049C14.98 8.859 15.1115 8.90461 15.2302 8.97463C15.349 9.04465 15.4525 9.13768 15.5348 9.24825C15.7034 9.47274 15.7775 9.75435 15.741 10.0328C15.7046 10.3112 15.5605 10.5642 15.3398 10.7378L9.97127 14.9093ZM9.97127 19.281C9.86252 19.3657 9.73796 19.4278 9.60489 19.4637C9.47182 19.4996 9.33292 19.5085 9.19634 19.49C9.05976 19.4715 8.92826 19.4259 8.80955 19.3559C8.69083 19.2859 8.5873 19.1928 8.50502 19.0823C8.33613 18.8577 8.26196 18.5759 8.29842 18.2973C8.33487 18.0187 8.47904 17.7655 8.70002 17.592L14.0685 13.4213C14.1773 13.3366 14.3018 13.2745 14.4349 13.2386C14.568 13.2027 14.7069 13.1937 14.8434 13.2122C14.98 13.2308 15.1115 13.2764 15.2302 13.3464C15.349 13.4164 15.4525 13.5094 15.5348 13.62C15.7034 13.8445 15.7775 14.1261 15.741 14.4045C15.7046 14.6829 15.5605 14.936 15.3398 15.1095L9.97127 19.281Z" fill={color} /></svg>;
}
export default rise;