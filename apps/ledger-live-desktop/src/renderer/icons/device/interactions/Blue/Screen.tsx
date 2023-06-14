import React from "react";
import styled from "styled-components";
import useTheme from "~/renderer/hooks/useTheme";
import colors from "../colors";

const ScreenSVG = styled.svg`
  overflow: visible;

  #Blue-screen {
    transform: translate(0%, -50%);
  }

  #Blue-screen-content {
    transition: opacity 200ms;
  }
`;

const getScreens = (color: string) => ({
  home: (
    <g transform="translate(13, 48)">
      <defs />
      <defs>
        <path
          id="id3"
          d="M71.8 15.5h2.4v1.2222222H73h2.4v1.2222222h1.2v1.2222223h1.2v1.2222222H79v1.2222222h-2.4V26.5h-2.4v-3.6666667h-2.4V26.5h-2.4v-4.8888889H67v-1.2222222h1.2v-1.2222222h1.2v-1.2222223h1.2v-1.2222222h1.2z"
        />
      </defs>
      <use fill={color} fillRule="nonzero" transform="translate(-67 -15)" xlinkHref="#id3" />
    </g>
  ),
  validation: (
    <g transform="translate(13, 48)">
      <path
        fill={color}
        fillRule="evenodd"
        d="M13 0v2h-1v1h-1v1h-1v1H9v1H8v1H7v1H6v1H5v1H3V9H2V8H1V7H0V5h2v1h1v1h2V6h1V5h1V4h1V3h1V2h1V1h1V0h2z"
      />
    </g>
  ),
  fail: (
    <g transform="translate(13, 48)">
      <path
        fill={color}
        fillRule="evenodd"
        d="M1.6666667 0L1.666.833 2.5.8333333V1.666l.8333333.0006667L3.333 2.5h.8336667L4.166 3.333h1.667l.0003333-.833H6.666l.0006667-.8333333L7.5 1.666V.8333333L8.333.833 8.3333333 0H10v1.6666667L9.166 1.666l.0006667.834H8.333l.0003333.8333333L7.5 3.333v.8336667L6.666 4.166v1.667l.834.0003333V6.666l.8333333.0006667L8.333 7.5h.8336667L9.166 8.333l.834.0003333V10H8.3333333L8.333 9.166l-.833.0006667V8.333l-.8333333.0003333L6.666 7.5h-.8326667L5.833 6.666H4.166l.0006667.834H3.333l.0003333.8333333L2.5 8.333v.8336667L1.666 9.166l.0006667.834H0V8.3333333L.833 8.333.8333333 7.5H1.666l.0006667-.8333333L2.5 6.666v-.8326667L3.333 5.833V4.166l-.833.0006667V3.333l-.8333333.0003333L1.666 2.5H.8333333L.833 1.666 0 1.6666667V0h1.6666667z"
      />
    </g>
  ),
  pin: (
    <g transform="translate(13, 48)">
      <path
        fill={color}
        fillRule="nonzero"
        d="M7.3068131 0l-.0823863 1.0511354.8749992-.5994313.4176132.7329539-.9488627.4517041.9488627.4517041-.4176132.7329538-.8749992-.5994312.0823863 1.0511354h-.8380674l.0823863-1.0511354-.8749991.5994312-.4176133-.7329538.9488628-.4517041-.9488628-.4517041.4176133-.7329539.8749991.5994313L6.4687457 0h.8380674zm31.5511177 0l-.0823862 1.0511354.8749991-.5994313.4176133.7329539-.9488628.4517041.9488628.4517041-.4176133.7329538-.8749991-.5994312.0823862 1.0511354h-.8380673l.0823862-1.0511354-.8749991.5994312-.4176133-.7329538.9488628-.4517041-.9488628-.4517041.4176133-.7329539.8749991.5994313L38.0198635 0h.8380673zM17.8238524 0l-.0823863 1.0511354.8749991-.5994313.4176133.7329539-.9488628.4517041.9488628.4517041-.4176133.7329538-.8749991-.5994312.0823863 1.0511354h-.8380674l.0823863-1.0511354-.8749992.5994312-.4176132-.7329538.9488627-.4517041-.9488627-.4517041.4176132-.7329539.8749992.5994313L16.985785 0h.8380674zm-5.2585197 0l-.0823862 1.0511354.8749991-.5994313.4176133.7329539-.9488628.4517041.9488628.4517041-.4176133.7329538-.8749991-.5994312.0823862 1.0511354h-.8380673l.0823862-1.0511354-.8749991.5994312-.4176133-.7329538.9488628-.4517041-.9488628-.4517041.4176133-.7329539.8749991.5994313L11.7272654 0h.8380673zM23.082372 0l-.0823863 1.0511354.8749992-.5994313.4176132.7329539-.9488627.4517041.9488627.4517041-.4176132.7329538-.8749992-.5994312.0823863 1.0511354h-.8380674l.0823863-1.0511354-.8749992.5994312-.4176132-.7329538.9488627-.4517041-.9488627-.4517041.4176132-.7329539.8749992.5994313L22.2443046 0h.8380674zM2.0482935 0l-.0823863 1.0511354.8749992-.5994313.4176132.7329539-.9488627.4517041.9488627.4517041-.4176132.7329538-.8749992-.5994312.0823863 1.0511354h-.8380674l.0823863-1.0511354-.8749992.5994312L0 2.0880662l.9488627-.4517041L0 1.184658.4176132.4517041l.8749992.5994313L1.2102261 0h.8380674zm26.2925981 0l-.0823863 1.0511354.8749992-.5994313.4176132.7329539-.9488627.4517041.9488627.4517041-.4176132.7329538-.8749992-.5994312.0823863 1.0511354h-.8380674l.0823863-1.0511354-.8749992.5994312-.4176132-.7329538.9488627-.4517041-.9488627-.4517041.4176132-.7329539.8749992.5994313L27.5028242 0h.8380674zm5.2585196 0l-.0823863 1.0511354.8749992-.5994313.4176132.7329539-.9488627.4517041.9488627.4517041-.4176132.7329538-.8749992-.5994312.0823863 1.0511354h-.8380674l.0823863-1.0511354-.8749991.5994312-.4176133-.7329538.9488627-.4517041-.9488627-.4517041.4176133-.7329539.8749991.5994313L32.7613438 0h.8380674z"
      />
    </g>
  ),
  logo: (
    <g transform="translate(13, 48)">
      <path
        fill={color}
        fillRule="evenodd"
        d="M12 9v1.5h-.75v.75h-.75V12H9V9h3zM3 9v3H1.5v-.75H.75v-.75H0V9h3zm4.5 0v3h-3V9h3zM3 4.5v3H0v-3h3zM10.5 0v.75h.75v.75H12v6H4.5V0h6zM3 0v3H0V1.5h.75V.75h.75V0H3z"
      />
    </g>
  ),
});
type Props = {
  display?: string;
  active?: boolean;
  error?: boolean;
} & React.ComponentProps<typeof ScreenSVG>;
const BlueScreen = ({ active, display, error, ...props }: Props) => {
  const type = useTheme().colors.palette.type;
  const screens = getScreens(error ? "#EA2E49" : colors[type].screenColor);
  return (
    <ScreenSVG {...props} width="83" height="111">
      <defs />
      <g id="Blue-screen">
        <rect
          transform="translate(-40 -16)"
          width="83"
          height="111"
          x="16.5"
          y="16.5"
          fill={colors[type].screen}
          fillRule="evenodd"
          stroke={error ? "#EA2E49" : colors[type].screenStroke}
          rx="2"
        />
        <g id="Blue-screen-content" opacity={active ? 1 : 0}>
          {display ? screens[display as keyof typeof screens] : null}
        </g>
      </g>
    </ScreenSVG>
  );
};
export default BlueScreen;
