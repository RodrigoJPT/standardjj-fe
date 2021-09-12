import React from 'react';
import { Formik, Form } from 'formik';
import { FormField } from './'

export interface VideoFormValues {
    title: string;
    url: string;
    description: string;
    tableOfContents: string; //change to array later, figure out a form collection that converts to an array of strings
    numberInSeries: string; //should be number, leave as string for now but figure it out after set up is complete
}

export const CreateVideo: React.FC = () => {
    const initialValues = {
        title: '',
        url: '',
        description: '',
        tableOfContents: '',
        numberInSeries: ''
    }
    
    function handleSubmit(data: VideoFormValues, { setSubmitting }): void {
        setSubmitting(true)
        setTimeout(() => {
            console.log(data, typeof setSubmitting);
            setSubmitting(false)
        }, 3000)
    }
    return (
        <>
            <h1>Create Video</h1>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({values, isSubmitting, handleChange, handleBlur, handleSubmit}) => (
                    <Form onSubmit={handleSubmit} style={{margin: '10px'}}>
                        <FormField name="title" label="Video Title" type="text"></FormField>
                        <FormField name="url" label="Youtube Link" type="text"></FormField>
                        <FormField name="description" label="Video Description" type="text" as="textarea"></FormField>
                        <FormField name="number" label="Number in Series" type="text"></FormField>
                        <FormField name="tableOfContents" label="Table of Contents" type="text" as="textarea"></FormField>
                        <div style={{display: "block"}}>
                            <button disabled={isSubmitting} type="submit">{isSubmitting ? 'Please Wait' : 'Create Video'}</button>
                            <button disabled={isSubmitting} type="reset" className="err">Cancel</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}