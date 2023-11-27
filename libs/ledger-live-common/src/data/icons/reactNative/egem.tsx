
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function egem({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path fillRule="evenodd" clipRule="evenodd" d="M12 4.06775L18.3457 14.221L12 19.9321L5.65424 14.221L12 4.06775ZM10.3058 13.5115H8.10237L11.55 7.9953V11.4896L10.3058 13.5115ZM10.4442 14.4115H8.40719L11.55 17.24V15.379L10.4442 14.4115ZM12.45 15.369V17.24L15.5928 14.4115H13.5442L12.45 15.369ZM13.6827 13.5115H15.8976L12.45 7.9953V11.5084L13.6827 13.5115Z" fill={color} /></Svg>;
}
export default egem;