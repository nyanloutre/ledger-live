
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function add({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path fillRule="evenodd" clipRule="evenodd" d="M18.0799 13.8438H14.3839L13.7239 11.8638H18.0739C18.2226 11.8638 18.3653 11.8047 18.4705 11.6995C18.5758 11.5943 18.6349 11.4516 18.6349 11.3028C18.6349 11.1541 18.5758 11.0114 18.4705 10.9062C18.3653 10.801 18.2226 10.7418 18.0739 10.7418H13.3669L11.4791 4.9871C11.4552 4.79697 11.3642 4.62161 11.2226 4.4925C11.081 4.36339 10.898 4.28899 10.7065 4.28267C10.515 4.27634 10.3275 4.33851 10.1777 4.45799C10.0278 4.57748 9.92554 4.74646 9.88911 4.9346L5.37411 18.6618C5.36211 18.7368 5.36211 18.8118 5.37411 18.8868C5.37724 19.0698 5.44632 19.2454 5.56864 19.3814C5.69096 19.5174 5.85829 19.6047 6.03984 19.6271C6.22139 19.6496 6.40493 19.6057 6.55671 19.5036C6.70848 19.4015 6.81827 19.248 6.86586 19.0713L10.6541 7.52135L11.7364 10.7418H10.7989C10.6501 10.7418 10.5074 10.801 10.4022 10.9062C10.297 11.0114 10.2379 11.1541 10.2379 11.3028C10.2379 11.4516 10.297 11.5943 10.4022 11.6995C10.5074 11.8047 10.6501 11.8638 10.7989 11.8638H12.1189L12.7789 13.8438H10.7989C10.7252 13.8438 10.6522 13.8584 10.5842 13.8866C10.5161 13.9147 10.4543 13.9561 10.4022 14.0082C10.3501 14.0603 10.3088 14.1221 10.2806 14.1902C10.2524 14.2582 10.2379 14.3312 10.2379 14.4048C10.2379 14.4785 10.2524 14.5515 10.2806 14.6195C10.3088 14.6876 10.3501 14.7494 10.4022 14.8015C10.4543 14.8536 10.5161 14.895 10.5842 14.9231C10.6522 14.9513 10.7252 14.9658 10.7989 14.9658H13.1689L14.2376 18.1338H8.56836C8.35831 18.1338 8.15686 18.2173 8.00833 18.3658C7.8598 18.5143 7.77636 18.7158 7.77636 18.9258C7.77636 19.1359 7.8598 19.3373 8.00833 19.4859C8.15686 19.6344 8.35831 19.7178 8.56836 19.7178H15.2741C15.6896 19.7178 16.0264 19.3811 16.0264 18.9656C16.0268 18.8516 16.0019 18.7389 15.9536 18.6356L14.7461 14.9658H18.0461C18.1198 14.9658 18.1927 14.9513 18.2608 14.9231C18.3289 14.895 18.3907 14.8536 18.4428 14.8015C18.4949 14.7494 18.5362 14.6876 18.5644 14.6195C18.5926 14.5515 18.6071 14.4785 18.6071 14.4048C18.6071 14.3312 18.5926 14.2582 18.5644 14.1902C18.5362 14.1221 18.4949 14.0603 18.4428 14.0082C18.3907 13.9561 18.3289 13.9147 18.2608 13.8866C18.1927 13.8584 18.1198 13.8438 18.0461 13.8438H18.0791H18.0799Z" fill={color} /></Svg>;
}
export default add;