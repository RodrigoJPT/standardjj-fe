import React from 'react';
import { FieldInputProps } from 'formik';
import { FormField, TextInput } from '../Shared/FormComponents'

export interface FilePathInputProps extends FieldInputProps<any> {
    formType: 'upload' | 'link';
}

export const FilePathInput: React.FC<FilePathInputProps> = ({ formType, ...rest}) => {
    if (formType === 'upload'){
        return <FormField {...rest} as={TextInput} type="file" value="" label="File"/>
    }
    else if (formType === 'link'){
        return <FormField {...rest} as={TextInput} type="text" label="Youtube Link"/>
    }
}