import React from 'react';
import { Field } from 'formik';
import styles from './TimeStampField.module.css';

export interface TimeStampFieldProps {
	name: string;
	onRemove: () => void;
}

export const TimeStampField: React.FC<TimeStampFieldProps> = ({
	name,
	onRemove,
}) => (
	<div className={styles['timestamp-field']}>
		<Field name={`${name}.name`} type='text' className={styles['name']} />
		<Field
			name={`${name}.timestamp`}
			type='text'
			className={styles['timestamp']}
		/>
		<button type='button' onClick={onRemove}>
			-
		</button>
	</div>
);
