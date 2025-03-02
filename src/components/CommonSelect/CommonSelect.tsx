import { FormControl, FormLabel, MenuItem, Select } from "@material-ui/core";
import React from "react";
import { FC } from "react";
import { EstablishmentType } from "src/types/enum/EstablishmentType.enum";
import styled from "styled-components";

const CustomSelect = styled(Select)`
&& {
    height: 40px;
    width: 20%;
    margin-top: 0px;
    padding-left: 10px;
    border-radius: 7px;
    padding-right: 10px;
    outline: 1px solid #d2d0ce;
    background-color: transparent;

    & .MuiSelect-select:focus {
        background-color: transparent;
        outline: 0px;
    }
}
`;

interface CommonSelectProps {
    value: string;
    onChange: (value: string) => void;
}

const CommonSelect: FC<CommonSelectProps> = ({ value, onChange }) => {
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
        transitionDuration: 450,
    };


    return <FormControl>
        <FormLabel style={{ fontSize: '14px', marginBottom: '6px', fontWeight: 700, color: '#201f1e' }}>
            Тип заведения
        </FormLabel>
        <CustomSelect disableUnderline
            value={value}
            MenuProps={MenuProps}
            label="typeOfRestaurant"
            id="type-of-restaurant-select"
            labelId="demo-simple-select-label"
            onChange={(event) => onChange(event.target.value as string)}>
            {Object.entries(EstablishmentType).map((entry) => (
                <MenuItem key={entry[0]} value={entry[0]}>
                    {entry[1]}
                </MenuItem>
            ))}
        </CustomSelect>
    </FormControl>
};


export default CommonSelect;