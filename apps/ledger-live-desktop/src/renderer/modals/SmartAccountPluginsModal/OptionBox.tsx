import React from "react";
import styled from "styled-components";
import { Flex } from "@ledgerhq/react-ui";
import EntryButton from "~/renderer/components/EntryButton/EntryButton";

const Select = styled.button<{ isSelected: boolean }>`
  background-color: ${p =>
    p.isSelected ? p.theme.colors.primary.c80 : p.theme.colors.palette.background.paper};
  width: 15px;
  height: 15px;
  border-radius: 100%;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  position: absolute;
  right: -5px;
  top: -5px;
`;

const FlexWrapper = styled(Flex)`
  position: relative;
  white-space: normal;
  flex-direction: column;
  height: 100%;
  max-height: 120px;
`;

interface OptionBoxProps {
  title: string;
  description: string;
  label?: string;
  disabled?: boolean;
  icon?: React.ComponentType;
  onContinue?: () => void;
  onClick?: () => void;
  isSelected?: boolean;
  setSelected?: (selected: boolean) => void;
}

const OptionBox = ({ title, disabled, description, label, icon, onClick }: OptionBoxProps) => {
  return (
    <FlexWrapper>
      <EntryButton
        disabled={disabled}
        label={label}
        title={title}
        body={description}
        onClick={onClick}
        Icon={icon}
      />
    </FlexWrapper>
  );
};

export default OptionBox;
