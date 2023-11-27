
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function hodl({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M5.97972 12.2407C5.59122 12.5497 5.24472 13.0987 5.26197 13.9379C5.27472 14.5184 5.58672 14.9159 5.97972 15.1859V16.2224C5.97972 16.8704 6.29472 17.4772 6.82572 17.8484L10.4655 20.3377V7.6184L5.97972 8.9309V12.2407ZM6.95697 11.9347C7.71222 12.4874 7.71222 15.7717 7.71222 15.7717C7.71222 15.7717 6.85797 15.6892 6.15222 15.2947C6.73422 15.4904 7.20147 15.4469 7.40472 15.4694L7.41822 15.4702H7.42122L7.43172 15.4717L7.46022 15.4739L7.46997 15.4754H7.47972C7.47972 15.4754 7.59972 12.6089 6.73197 12.1064C6.59097 12.0577 6.34197 12.0862 6.06747 12.1739C6.41697 11.9384 6.78222 11.8589 6.95697 11.9347ZM10.7797 17.1127H13.227V20.3422H10.7805V17.1134L10.7797 17.1127ZM10.2247 7.37765L5.97972 8.59415V4.0409C5.97961 3.96526 6.00193 3.89128 6.04386 3.82832C6.08578 3.76536 6.14544 3.71625 6.21528 3.68719C6.28512 3.65813 6.362 3.65043 6.43622 3.66506C6.51043 3.6797 6.57864 3.71601 6.63222 3.7694L10.4422 7.5944L10.2247 7.3769V7.37765ZM10.7797 11.9309H13.227V16.8014H10.7805V11.9309H10.7797ZM13.7745 7.3784L13.617 7.5359L17.367 3.7709C17.4204 3.71734 17.4886 3.68083 17.5628 3.66601C17.637 3.65118 17.7139 3.65869 17.7838 3.68759C17.8538 3.7165 17.9135 3.76549 17.9556 3.82838C17.9977 3.89127 18.0202 3.96523 18.0202 4.0409V8.5934L13.7752 7.3784H13.7745ZM10.7805 7.61915H13.227V11.6167H10.7805V7.61915ZM18.0202 12.2407V8.9309L13.542 7.6214V20.3422L17.1742 17.8484C17.4354 17.6654 17.6487 17.4221 17.7959 17.1392C17.9432 16.8563 18.0201 16.5421 18.0202 16.2232V15.1859C18.4132 14.9159 18.7252 14.5184 18.738 13.9379C18.756 13.0987 18.4087 12.5497 18.0202 12.2407ZM16.5502 15.5212H16.56L16.569 15.5204L16.5817 15.5189H16.5847L16.611 15.5167H16.6125L16.6245 15.5152L16.7362 15.5024H16.7415C16.986 15.4709 17.286 15.4739 17.7465 15.3299L17.8485 15.2962C17.142 15.6907 16.2885 15.7732 16.2885 15.7732C16.2885 15.7732 16.2885 12.4897 17.0437 11.9369C17.2185 11.8604 17.5837 11.9399 17.9325 12.1769C17.658 12.0892 17.4097 12.0607 17.268 12.1094C16.4002 12.6112 16.5495 15.5219 16.5495 15.5219L16.5502 15.5212Z" fill={color} /></Svg>;
}
export default hodl;