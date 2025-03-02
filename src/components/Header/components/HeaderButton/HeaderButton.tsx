import { Button } from "@material-ui/core";
import React, { FC, ReactElement } from "react";
import styled from "styled-components";

interface HeaderButtonProps {
  label?: string;
  height?: number;
  onClick: () => void;
  element?: ReactElement;
};

const HeaderButton: FC<HeaderButtonProps> = ({ label = '', height = 40, element = null, onClick }) => {
  const CustomHeaderButton = styled(Button)`
  && {
    color: white;
    border-radius: 8px;
    height: ${height}px;
    background-color: #4f6bed;

    &.MuiButton-root {
      color: white;
    }

    &:hover {
      background-color: #4f6bed;
    }
  }
`;

  return <CustomHeaderButton variant="text"
    onClick={onClick}
    style={{ textTransform: 'none' }}>
    {element}
    <span>
      {label}
    </span>
  </CustomHeaderButton>
};

export default HeaderButton;