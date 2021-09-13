import React from 'react';
import { FieldInputProps } from 'formik';
import { FormField } from '../Shared/FormComponents'

export interface FilePathInputProps extends FieldInputProps<any> {
    formType: 'upload' | 'link';
}

export const FilePathInput: React.FC<FilePathInputProps> = ({ formType, ...rest}) => {
    if (formType === 'upload'){
        return <FormField {...rest} type="file" value="" label="File"/>
    }
    else if (formType === 'link'){
        return <FormField {...rest} type="text" label="Youtube Link"/>
    }
}