import React from 'react';
import { Formik, Form, FieldArray } from 'formik';
import { FormField, TextInput, TextArea } from '../Shared/FormComponents/';
import { SeriesSelector, CreateTypeSelector, FilePathInput } from './';
import { TimeStampField } from './TimeStampsForm/TimeStampField';
import styles from '../Shared/FormComponents/Forms.module.css';

export interface VideoFormValues {
	title: string;
	description: string;
	series: string;
	path: string | File;
	formType: 'upload' | 'link';
	tableOfContents: TimeStamp[];
	numberInSeries: string; //should be number, leave as string for now but figure it out after set up is complete
}

export interface TimeStamp {
	name: string;
	time: string;
}

export const CreateVideoForm: React.FC = () => {
	const initialValues: VideoFormValues = {
		title: '',
		series: '',
		description: '',
		tableOfContents: [{ name: 'Intro', time: '0:00' }],
		path: '',
		formType: 'link',
		numberInSeries: '',
	};

	function handleSubmit(data: VideoFormValues, { setSubmitting }): void {
		setSubmitting(true);
		setTimeout(() => {
			console.log(data, typeof setSubmitting);
			setSubmitting(false);
		}, 3000);
	}

	function setPath(e, formType, setFieldValue): void {
		formType === 'upload'
			? setFieldValue('path', e.target.files[0].name)
			: setFieldValue('path', e.target.value);
	}

	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
			{({
				values,
				setFieldValue,
				isSubmitting,
				handleChange,
				handleBlur,
				handleSubmit,
			}) => (
				<Form onSubmit={handleSubmit} style={{ margin: '10px' }}>
					<fieldset disabled={isSubmitting} className={styles.fieldset}>
						<h1>Create Video</h1>
						<CreateTypeSelector />
						<FilePathInput
							name='path'
							formType={values.formType}
							value={values.path}
							onChange={(e) => setPath(e, values.formType, setFieldValue)}
							onBlur={handleBlur}
						/>
						<FormField
							name='title'
							label='Video Title'
							type='text'
							as={TextInput}></FormField>
						<FormField
							name='description'
							label='Video Description'
							type='text'
							as={TextArea}></FormField>
						<FormField
							name='number'
							label='Number in Series'
							type='text'
							as={TextInput}></FormField>
						<SeriesSelector
							name='series'
							value={values.series}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						<FieldArray
							name='tableOfContents'
							render={(arrayHelpers) => (
								<div>
									<label htmlFor='tableOfContents'></label>
									{values.tableOfContents.map((item, index) => (
										<TimeStampField
											name={`tableOfContents[${index}]`}
											onRemove={() => arrayHelpers.remove(index)}
										/>
									))}
									<button
										type='button'
										onClick={() =>
											arrayHelpers.push({ name: '', timestamp: '' })
										}>
										+
									</button>
								</div>
							)}
						/>
						<div style={{ display: 'block' }}>
							<button disabled={isSubmitting} type='submit'>
								{isSubmitting ? 'Please Wait' : 'Create Video'}
							</button>
							<button disabled={isSubmitting} type='reset' className='err'>
								Cancel
							</button>
						</div>
					</fieldset>
					<pre>{JSON.stringify(values, null, 2)}</pre>
				</Form>
			)}
		</Formik>
	);
};
