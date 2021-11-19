import React from 'react';
import styles from './Forms.module.css';

export const TextInput: React.FC = ({...rest}) => {
    return <input type='text' className={styles.field} {...rest}/>
}