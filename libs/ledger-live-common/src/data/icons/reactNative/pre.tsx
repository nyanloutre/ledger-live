
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function pre({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M10.1025 13.5338H11.361C11.7206 13.5349 12.076 13.456 12.4013 13.3028C12.7088 13.1505 12.9833 12.9398 13.209 12.6818C13.4333 12.4148 13.6065 12.1095 13.722 11.781C13.8464 11.4481 13.9095 11.0954 13.908 10.74C13.91 10.3932 13.8411 10.0497 13.7055 9.7305C13.5754 9.40714 13.3919 9.10796 13.1625 8.8455C12.9314 8.58261 12.6518 8.36668 12.339 8.2095C12.0183 8.04371 11.6621 7.95827 11.301 7.9605H7.99353V15.9878H10.1055L10.1025 13.5338ZM10.1025 9.89925H11.1728C11.3215 9.90903 11.4607 9.97594 11.5613 10.086C11.6858 10.2098 11.7638 10.428 11.7638 10.7693C11.7638 11.1105 11.6865 11.313 11.5763 11.4233C11.484 11.532 11.3595 11.6093 11.22 11.6093H10.1025V9.9V9.89925Z" fill={color} /><Path d="M5.26721 6.0225V17.9385C5.26721 18.366 5.61296 18.711 6.03971 18.711H17.9557C18.3825 18.711 18.7282 18.366 18.7282 17.9385V6.0225C18.7283 5.92099 18.7084 5.82046 18.6696 5.72665C18.6308 5.63284 18.574 5.54759 18.5022 5.47578C18.4305 5.40396 18.3453 5.347 18.2515 5.30813C18.1577 5.26926 18.0572 5.24925 17.9557 5.24925H6.03971C5.93827 5.24925 5.83781 5.26923 5.74409 5.30806C5.65036 5.34688 5.56521 5.40378 5.49347 5.47551C5.42174 5.54725 5.36484 5.63241 5.32602 5.72613C5.28719 5.81985 5.26721 5.92031 5.26721 6.02175V6.0225ZM16.3695 17.1255H7.60946C7.50795 17.1256 7.40742 17.1057 7.31361 17.0669C7.2198 17.0281 7.13455 16.9713 7.06274 16.8995C6.99092 16.8278 6.93396 16.7426 6.89509 16.6488C6.85622 16.555 6.83621 16.4545 6.83621 16.353V7.593C6.83611 7.49143 6.85605 7.39084 6.89487 7.29698C6.9337 7.20312 6.99065 7.11783 7.06247 7.04601C7.13429 6.97419 7.21958 6.91724 7.31344 6.87841C7.40729 6.83959 7.50789 6.81965 7.60946 6.81975H16.3695C16.797 6.81975 17.142 7.1655 17.142 7.59225V16.3523C17.142 16.7798 16.797 17.1255 16.3695 17.1255Z" fill={color} /><Path d="M11.0497 14.4818H16.005V16.0043H11.0497V14.4818Z" fill={color} /><Path d="M10.1048 13.5536H11.3633C11.7229 13.5548 12.0782 13.4759 12.4035 13.3226C12.711 13.1704 12.9855 12.9596 13.2113 12.7016C13.4355 12.4346 13.6088 12.1294 13.7243 11.8009C13.8487 11.468 13.9117 11.1153 13.9103 10.7599C13.9123 10.4131 13.8434 10.0696 13.7078 9.75037C13.5777 9.42701 13.3941 9.12783 13.1648 8.86537C12.9337 8.60249 12.6541 8.38656 12.3413 8.22937C12.0205 8.06359 11.6643 7.97814 11.3033 7.98038H7.99579V16.0076H10.1078L10.1048 13.5536ZM10.1048 9.91913H11.175C11.3238 9.9289 11.463 9.99582 11.5635 10.1059C11.688 10.2296 11.766 10.4479 11.766 10.7891C11.766 11.1304 11.6888 11.3329 11.5785 11.4431C11.4863 11.5519 11.3618 11.6291 11.2223 11.6291H10.1048V9.91987V9.91913Z" fill={color} /><Path d="M5.26947 6.04237V17.9584C5.26947 18.3859 5.61522 18.7309 6.04197 18.7309H17.958C18.3847 18.7309 18.7305 18.3859 18.7305 17.9584V6.04237C18.7306 5.94087 18.7107 5.84033 18.6719 5.74652C18.6331 5.65271 18.5762 5.56746 18.5045 5.49565C18.4327 5.42384 18.3475 5.36687 18.2538 5.328C18.16 5.28913 18.0595 5.26912 17.958 5.26912H6.04197C5.94052 5.26912 5.84007 5.28911 5.74635 5.32793C5.65262 5.36675 5.56746 5.42365 5.49573 5.49539C5.424 5.56712 5.3671 5.65228 5.32827 5.746C5.28945 5.83973 5.26947 5.94018 5.26947 6.04163V6.04237ZM16.3717 17.1454H7.61172C7.51021 17.1455 7.40968 17.1256 7.31587 17.0868C7.22206 17.048 7.13681 16.9911 7.065 16.9194C6.99318 16.8476 6.93621 16.7624 6.89734 16.6687C6.85848 16.5749 6.83847 16.4744 6.83847 16.3729V7.61287C6.83837 7.5113 6.85831 7.41071 6.89713 7.31685C6.93595 7.22299 6.99291 7.13771 7.06473 7.06588C7.13655 6.99406 7.22183 6.93711 7.31569 6.89828C7.40955 6.85946 7.51015 6.83953 7.61172 6.83963H16.3717C16.7992 6.83963 17.1442 7.18538 17.1442 7.61213V16.3721C17.1442 16.7996 16.7992 17.1454 16.3717 17.1454Z" fill={color} /><Path d="M11.052 14.5016H16.0073V16.0241H11.052V14.5016Z" fill={color} /></Svg>;
}
export default pre;