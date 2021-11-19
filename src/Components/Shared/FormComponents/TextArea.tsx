import React from 'react';
import styles from './Forms.module.css'

export const TextArea: React.FC = ({...rest}) => {
    return <textarea className={`${styles.field} ${styles.textarea}`} {...rest}/>
}