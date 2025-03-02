import { FormControl, FormLabel, TextareaAutosize } from "@material-ui/core";
import React, { useCallback, useState } from "react";
import { FC } from "react";
import './textAreaInput.scss'

export interface TextAreaInputProps {
    label: string;
    height: number;
    placeHolder: string;
    onChange: (value: string) => void;
}

const TextAreaInput: FC<TextAreaInputProps> = ({
    label,
    height,
    onChange,
    placeHolder,
}) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const onFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const onBlur = useCallback(() => {
        setIsFocused(false);
    }, []);

    return <FormControl>
        <FormLabel style={{
            fontSize: '14px', marginBottom: '6px',
            fontWeight: 700, color: '#201f1e'
        }}>
            {label}
        </FormLabel>
        <TextareaAutosize className="textAreaInput placeholder"
            style={{
                outline: isFocused ? '1px solid #4f6bed' : '1px solid #d2d0ce',
                minHeight: `${height}px`,
                maxHeight: `${height}px`,
            }}
            onBlur={onBlur}
            onFocus={onFocus}
            placeholder={placeHolder}
            onChange={(event) => onChange(event.target.value)}
        />
    </FormControl >
}

export default TextAreaInput;