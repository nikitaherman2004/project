import { FormControl, FormLabel, Input } from "@material-ui/core";
import { FC, useCallback, useState } from "react";
import './commonInput.scss'
import React from "react";

interface CommonInputProps {
    width: string;
    height: string;
    disabled?: boolean;
    formLabel?: string;
    showLabel?: boolean;
    marginLeft?: string;
    placeHolder: string;
    paddingLeft?: string;
    paddingRight?: string;
    onChange: (value: string) => void;
};

const CommonInput: FC<CommonInputProps> = ({
    width,
    height,
    onChange,
    placeHolder,
    formLabel = '',
    disabled = false,
    showLabel = false,
    marginLeft = '20%',
}) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const onFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const onBlur = useCallback(() => {
        setIsFocused(false);
    }, []);

    return <FormControl>
        {showLabel && <FormLabel style={{
            fontSize: '14px', marginBottom: '6px',
            fontWeight: 700, color: '#201f1e'
        }}>
            {formLabel}
        </FormLabel>}
        <Input type="outlined"
            disableUnderline
            className="input"
            disabled={disabled}
            placeholder={placeHolder}
            style={{
                outline: isFocused ? '1px solid #4f6bed' : '1px solid #d2d0ce',
                width, height,
                fontFamily: 'Arial',
                marginLeft,
                marginTop: '0px',
            }}
            onBlur={onBlur}
            onFocus={onFocus}
            onChange={(event) => onChange(event.target.value)}
        />
    </FormControl>
}

export default CommonInput;