import React from "react";
import { ItemStatus } from "./types";
import { useTheme } from "styled-components";
import { useSpring, animated } from "react-spring";

const useBulletStyles = () => {
  const { colors } = useTheme();

  const BulletStyle: {
    [key in ItemStatus]: {
      width: string;
      height: string;
      backgroundColor: string;
      borderRadius: string;
      opacity?: number;
    };
  } = {
    [ItemStatus.active]: {
      width: "16px",
      height: "6px",
      backgroundColor: colors.opacityDefault.c80,
      borderRadius: "1000px",
      opacity: 1,
    },
    [ItemStatus.nearby]: {
      width: "8px",
      height: "6px",
      backgroundColor: colors.opacityDefault.c30,
      borderRadius: "1000px",
      opacity: 1,
    },
    [ItemStatus.far]: {
      width: "4px",
      height: "6px",
      backgroundColor: colors.opacityDefault.c10,
      borderRadius: "1000px",
      opacity: 1,
    },
    [ItemStatus.none]: {
      width: "0px",
      height: "6px",
      backgroundColor: colors.opacityDefault.c10,
      borderRadius: "1000px",
      opacity: 0,
    },
  };

  return BulletStyle;
};

const Bullet = ({ type }: { type: ItemStatus }) => {
  const bulletStyles = useBulletStyles();

  const props = useSpring({
    width: bulletStyles[type].width,
    height: bulletStyles[type].height,
    backgroundColor: bulletStyles[type].backgroundColor,
    borderRadius: bulletStyles[type].borderRadius,
    opacity: bulletStyles[type].opacity,
  });

  return <animated.div style={props} />;
};

export default Bullet;
