
import { Button } from "@material-ui/core";
import { UserPen } from "lucide-react";
import styled from 'styled-components';
import React, { FC, MouseEvent } from "react";

interface MenuButtonProps {
    onClick: (value: MouseEvent) => void;
};

const CustomMenuButtton = styled(Button)`
  && {
    height: 40px;
    min-width: 40px;
    border-radius: 50%;

    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
  }
`;

const MenuButton: FC<MenuButtonProps> = ({ onClick }) => {
    return <CustomMenuButtton onClick={onClick} color="primary">
        <UserPen />
    </CustomMenuButtton>
};

export default MenuButton;