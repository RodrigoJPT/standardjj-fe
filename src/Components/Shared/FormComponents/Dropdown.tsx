import React from 'react';
import { FieldInputProps } from 'formik'

export interface DropdownProps extends FieldInputProps<string> {
    label: string;
    options: DropdownOptions[]
}

export interface DropdownOptions {
    value: string;
    label: string;
}

export const Dropdown: React.FC<DropdownProps> = ({name, label, options, value, onChange}) => {
    return(
        <>
            <label htmlFor={name} style={{display:'block', marginTop: '10px'}}>{label}</label>
            <select name={name} value={value} onChange={onChange}>
                {options.map((option, index) => <option key={index} value={option.value} label={option.label}/>)}
            </select>
        </>
    )
}