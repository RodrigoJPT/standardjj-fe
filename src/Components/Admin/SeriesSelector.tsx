import React from 'react';
import { Dropdown } from '../Shared/FormComponents';
import { FieldInputProps } from 'formik';
import { useGetAllSeries } from '../../hooks';
import { useHistory } from 'react-router';

export const SeriesSelector: React.FC<FieldInputProps<string>> = (props) => {
    const { data: seriesCollection, isError } = useGetAllSeries()

    const history = useHistory();

    if (isError) {
        history.push('/oops');
    }
    const seriesOptions = seriesCollection ? seriesCollection.map(item => ({value: item.id, label: item.name})) : [{value: undefined, label: 'Loading...'}]

    return (
        <Dropdown options={seriesOptions} label="Series" {...props}/>
    )
}