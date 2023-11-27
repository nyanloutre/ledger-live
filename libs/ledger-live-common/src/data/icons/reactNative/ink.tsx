
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function ink({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M11.1449 8.64525C11.3752 8.5725 11.6369 8.70225 11.7322 8.92875C11.9624 9.45525 12.1687 9.9975 12.4072 10.5232C12.5497 10.839 13.0349 10.8795 13.2247 10.5885C13.5427 10.062 13.7969 9.50325 14.1067 8.9685C14.3609 8.637 14.8214 8.799 15.1709 8.76675C15.5362 8.74275 15.8062 9.204 15.5992 9.51975C14.5987 11.3895 13.5907 13.2517 12.5902 15.1222C12.4229 15.462 11.8754 15.462 11.7247 15.1057C11.5019 14.5635 11.3272 13.9965 11.1127 13.4542C10.9852 13.098 10.4377 13.0417 10.2554 13.3815C9.94568 13.9402 9.67568 14.523 9.36593 15.0735C9.21518 15.324 8.89718 15.2835 8.65118 15.2835C8.41268 15.2677 8.12693 15.3405 7.94468 15.138C7.86484 15.0553 7.81451 14.9486 7.80149 14.8345C7.78847 14.7203 7.8135 14.605 7.87268 14.5065C8.81018 12.7335 9.76268 10.953 10.7002 9.1635C10.8112 8.961 10.9064 8.70975 11.1449 8.646V8.64525ZM7.87268 8.78325C8.15045 8.76705 8.42892 8.76705 8.70668 8.78325C9.01643 8.8155 9.21518 9.21225 9.06443 9.49575C8.13443 11.2522 7.19768 13.0005 6.26918 14.7495C6.15743 14.9445 6.07043 15.2032 5.83193 15.267C5.55443 15.3082 5.26868 15.2842 4.99043 15.2842C4.64918 15.3 4.36343 14.8545 4.56968 14.5552C5.53868 12.7417 6.50693 10.92 7.47593 9.099C7.55543 8.94525 7.69043 8.7915 7.87343 8.78325H7.87268ZM17.7277 8.799C18.0292 8.70975 18.3472 8.775 18.6569 8.75025C18.8947 8.7585 19.1969 8.70975 19.3717 8.9205C19.5862 9.1395 19.5217 9.552 19.2517 9.69C18.7042 10.038 18.1642 10.41 17.6092 10.7505C17.2589 10.9927 16.7429 10.5802 16.8937 10.1752C17.0287 9.85125 17.2192 9.55275 17.3707 9.23625C17.4577 9.07425 17.5372 8.86425 17.7277 8.799ZM15.0989 13.6402C15.2579 13.5427 15.4567 13.5757 15.6074 13.6567C16.0282 13.8667 16.4489 14.094 16.8779 14.2965C17.0609 14.3775 17.2514 14.5312 17.2589 14.7495C17.2912 15.0412 17.0444 15.324 16.7587 15.3C16.1474 15.3 15.5362 15.3075 14.9324 15.3C14.6309 15.3 14.3924 14.9437 14.5034 14.6527C14.5829 14.442 14.7022 14.2552 14.7974 14.0527C14.8687 13.8997 14.9399 13.713 15.0989 13.6402Z" fill={color} /><Path d="M11.1449 8.64524C11.3752 8.57249 11.6369 8.70224 11.7322 8.92874C11.9624 9.45524 12.1687 9.99749 12.4072 10.5232C12.5497 10.839 13.0349 10.8795 13.2247 10.5885C13.5427 10.062 13.7969 9.50324 14.1067 8.96849C14.3609 8.63699 14.8214 8.79899 15.1709 8.76674C15.5362 8.74274 15.8062 9.20399 15.5992 9.51974C14.5987 11.3895 13.5907 13.2517 12.5902 15.1222C12.4229 15.462 11.8754 15.462 11.7247 15.1057C11.5019 14.5635 11.3272 13.9965 11.1127 13.4542C10.9852 13.098 10.4377 13.0417 10.2554 13.3815C9.94568 13.9402 9.67568 14.523 9.36593 15.0735C9.21518 15.324 8.89718 15.2835 8.65118 15.2835C8.41268 15.2677 8.12693 15.3405 7.94468 15.138C7.86484 15.0553 7.81451 14.9486 7.80149 14.8345C7.78847 14.7203 7.8135 14.605 7.87268 14.5065C8.81018 12.7335 9.76268 10.953 10.7002 9.16349C10.8112 8.96099 10.9064 8.70974 11.1449 8.64599V8.64524ZM7.87268 8.78324C8.15045 8.76704 8.42892 8.76704 8.70668 8.78324C9.01643 8.81549 9.21518 9.21224 9.06443 9.49574C8.13443 11.2522 7.19768 13.0005 6.26918 14.7495C6.15743 14.9445 6.07043 15.2032 5.83193 15.267C5.55443 15.3082 5.26868 15.2842 4.99043 15.2842C4.64918 15.3 4.36343 14.8545 4.56968 14.5552C5.53868 12.7417 6.50693 10.92 7.47593 9.09899C7.55543 8.94524 7.69043 8.79149 7.87343 8.78324H7.87268ZM17.7277 8.79899C18.0292 8.70974 18.3472 8.77499 18.6569 8.75024C18.8947 8.75849 19.1969 8.70974 19.3717 8.92049C19.5862 9.13949 19.5217 9.55199 19.2517 9.68999C18.7042 10.038 18.1642 10.41 17.6092 10.7505C17.2589 10.9927 16.7429 10.5802 16.8937 10.1752C17.0287 9.85124 17.2192 9.55274 17.3707 9.23624C17.4577 9.07424 17.5372 8.86424 17.7277 8.79899ZM15.0989 13.6402C15.2579 13.5427 15.4567 13.5757 15.6074 13.6567C16.0282 13.8667 16.4489 14.094 16.8779 14.2965C17.0609 14.3775 17.2514 14.5312 17.2589 14.7495C17.2912 15.0412 17.0444 15.324 16.7587 15.3C16.1474 15.3 15.5362 15.3075 14.9324 15.3C14.6309 15.3 14.3924 14.9437 14.5034 14.6527C14.5829 14.442 14.7022 14.2552 14.7974 14.0527C14.8687 13.8997 14.9399 13.713 15.0989 13.6402Z" fill={color} /></Svg>;
}
export default ink;