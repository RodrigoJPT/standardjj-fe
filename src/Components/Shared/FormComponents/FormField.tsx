//this file's name and component conflicts with an old component but will replace it
import React from 'react';
import { Field, FieldConfig } from 'formik'

export interface FormFieldProps extends FieldConfig<any> {
    label?: string;
}

export const FormField: React.FC<FormFieldProps> = ({label, ...rest}) => {
    return (
        <>
            <label htmlFor={rest.name} style={{display:'block', marginTop: '10px'}}>{label}</label>
            <Field {...rest}/>
        </>
    )
}