import React from 'react';
import { Field } from 'formik';

export const CreateTypeSelector: React.FC = () => {
    const enableUploads: boolean = false; //re-enable once uploads have been sorted out and then remove this
    return (
        <>
            {enableUploads && <div role="group" aria-label="Upload Type">
                <label>
                    <Field type="radio" value="upload" name="formType"/>
                    Upload new video
                </label>
                <label>
                    <Field type="radio" value="link" name="formType"/>
                    Add existing youtube video
                </label>
            </div>}
        </>
    )
}