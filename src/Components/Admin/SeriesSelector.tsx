import React, { useEffect, useState } from 'react';
import { Dropdown } from '../Shared/FormComponents';
import { FieldInputProps } from 'formik';
import axios from 'axios';

export const SeriesSelector: React.FC<FieldInputProps<string>> = (props) => {
    const [series, setSeries] = useState([])

    async function getSeries(): Promise<any> {
        try {
            const seriesCollection = await (await axios.get('/test-series.json')).data
            const seriesOptions = seriesCollection.map(item => ({value: item.id, label: item.name}))
            setSeries(seriesOptions);
        }
        catch (ex) {
            console.error(ex)
        }
    }

    useEffect(() => {
        if (!series.length){
            getSeries()
        }
        /*eslint-disable-next-line */
    }, [])

    return (
        <Dropdown options={series} label="Series" {...props}/>
    )
}