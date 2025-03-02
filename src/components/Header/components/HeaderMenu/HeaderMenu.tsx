import { Menu, MenuItem } from "@material-ui/core";
import React, { MouseEvent, ReactElement, useCallback, useState } from "react";
import HeaderButton from "../HeaderButton/HeaderButton";
import MenuButton from "../MenuButton/MenuButton";
import { Plus } from "lucide-react";
import './headerMenu.scss'
import { useNavigate } from 'react-router-dom';
import { configureMenu } from "./config/headerMenu.conf";

const HeaderMenu = (): ReactElement => {
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState<any>();

    const onMenuOpen = useCallback((event: MouseEvent) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    }, []);

    const onMenuClose = useCallback(() => {
        setAnchorEl(null);
    }, []);

    const onAddButtonClick = useCallback(() => {
        navigate('/restaurant/create');
    }, []);

    return <div className="menuContainer">
        <HeaderButton label="Добавить заведение"
            onClick={onAddButtonClick}
            element={<Plus style={{ marginRight: '4px' }} width={22} strokeWidth={2} />}
        />
        <MenuButton onClick={onMenuOpen} />
        <Menu open={Boolean(anchorEl)}
            keepMounted
            anchorEl={anchorEl}
            onClose={onMenuClose}
>
            {configureMenu(onMenuClose).map((item) => (
                <MenuItem key={item.id} onClick={item.onClick}>
                    {item.label}
                </MenuItem>
            ))}
        </Menu>
    </div>
};

export default HeaderMenu;