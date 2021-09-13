import React from 'react';
import { Formik, Form } from 'formik';
import { FormField } from '../Shared/FormComponents/'
import { SeriesSelector, CreateTypeSelector, FilePathInput } from './';

export interface VideoFormValues {
    title: string;
    description: string;
    series: string;
    path: string | File;
    formType: 'upload' | 'link';
    tableOfContents: string; //change to array later, figure out a form collection that converts to an array of strings
    numberInSeries: string; //should be number, leave as string for now but figure it out after set up is complete
}

export const CreateVideoForm: React.FC = () => {

    const initialValues: VideoFormValues = {
        title: '',
        series: '',
        description: '',
        tableOfContents: '',
        path: '',
        formType: 'link',
        numberInSeries: ''
    }
    
    function handleSubmit(data: VideoFormValues, { setSubmitting }): void {
        setSubmitting(true)
        setTimeout(() => {
            console.log(data, typeof setSubmitting);
            setSubmitting(false)
        }, 3000)
    }

    function setPath(e, formType, setFieldValue): void {
        formType === 'upload' ?
        setFieldValue('path', e.target.files[0].name):
        setFieldValue('path', e.target.value)
    }

    return (
        <>
            <h1>Create Video</h1>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({values, setFieldValue, isSubmitting, handleChange, handleBlur, handleSubmit}) => (
                    <Form onSubmit={handleSubmit} style={{margin: '10px'}}>
                        <fieldset disabled={isSubmitting}>
                        <CreateTypeSelector/>
                        <FilePathInput name="path" formType={values.formType} value={values.path} onChange={(e) => setPath(e, values.formType, setFieldValue)} onBlur={handleBlur}/>
                        <FormField name="title" label="Video Title" type="text"></FormField>
                        <FormField name="description" label="Video Description" type="text" as="textarea"></FormField>
                        <FormField name="number" label="Number in Series" type="text"></FormField>
                        <SeriesSelector name="series" value={values.series} onChange={handleChange} onBlur={handleBlur}/>
                        <FormField name="tableOfContents" label="Table of Contents" type="text" as="textarea"></FormField>
                        <div style={{display: "block"}}>
                            <button disabled={isSubmitting} type="submit">{isSubmitting ? 'Please Wait' : 'Create Video'}</button>
                            <button disabled={isSubmitting} type="reset" className="err">Cancel</button>
                        </div>
                        </fieldset>
                        <pre>{JSON.stringify(values, null, 2)}</pre>
                    </Form>
                )}
            </Formik>
        </>
    )
}