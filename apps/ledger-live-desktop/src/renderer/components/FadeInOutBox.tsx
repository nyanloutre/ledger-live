import React from "react";
import styled from "styled-components";
import { Transition, TransitionStatus } from "react-transition-group";
import Box from "./Box/Box";
const transitions = {
  entering: {
    opacity: 0,
    flexBasis: 0,
    maxHeight: 0,
    margin: 0,
    overflow: "hidden",
  },
  entered: {
    opacity: 1,
    flexBasis: "auto",
    maxHeight: "100vh",
    overflow: "auto",
  },
  exiting: {
    opacity: 0,
    flexBasis: 0,
    maxHeight: 0,
    margin: 0,
    overflow: "auto",
  },
  exited: {
    opacity: 0,
    flexBasis: 0,
    maxHeight: 0,
    margin: 0,
    display: "none",
  },
  unmounted: {},
};

const FadeInOutBox = styled(Box).attrs<{
  state: TransitionStatus;
}>(p => ({
  style: transitions[p.state],
}))<{ timing: number; state: TransitionStatus }>`
  opacity: 0;
  height: auto;
  transition: all ${p => p.timing}ms ease-in-out;
`;

type Props = {
  children: React.ReactNode;
  timing?: number;
  in?: boolean;
} & React.ComponentProps<typeof FadeInOutBox>;
const UpdateAllApps = ({ timing = 400, children, in: _in, ...rest }: Props) => {
  return (
    <Transition
      in={_in}
      unmountOnExit
      timeout={{
        appear: 0,
        enter: timing,
        exit: timing * 3, // leaves extra time for the animation to end before unmount
      }}
    >
      {state => (
        <FadeInOutBox {...rest} timing={timing} state={state}>
          {children}
        </FadeInOutBox>
      )}
    </Transition>
  );
};
export default UpdateAllApps;
