import { Switch } from "@material-ui/core";
import React, { FC } from "react";
import { styled } from "styled-components";
import './commonSwitch.scss';

const CustomSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: '#4f6bed',
        '& + .MuiSwitch-track': {
            backgroundColor: '#4f6bed',
        },
    },
    '& .MuiSwitch-track': {
        backgroundColor: '#b1b1b1',
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: '#4f6bed',
    },
}));

export interface CommonSwitchProps {
    label: string;
    value: boolean;
    onChange: (value: boolean) => void;
};

const CommonSwitch: FC<CommonSwitchProps> = ({ label, value, onChange }) => {
    return <div className="switchContainer">
        <CustomSwitch onChange={(event) => onChange(event.target.checked)}
            checked={value}
        />
        <span className="label">
            {label}
        </span>
    </div>
}

export default CommonSwitch;