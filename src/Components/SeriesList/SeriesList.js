import React, { useEffect, useState, useContext } from 'react';
import Spinner from '../Spinner/Spinner';
import axios from 'axios';
import SeriesCard from '../SeriesCard/SeriesCard';
import './SeriesList.css';
import { AppContext } from '../../AppContext';

const SeriesList = () => {
	const [series, setSeries] = useState(null);
	const { storedSeries, setStoredSeries } = useContext(AppContext);

	useEffect(() => {
		if (storedSeries) {
			setSeries(storedSeries);
		} else {
			const baseUrl = process.env.REACT_APP_API_URL;
			axios.get(`${baseUrl}/series`).then((res) => {
				setSeries(res.data);
				setStoredSeries(res.data);
			});
		}
	}, []);
	if (!series) {
		return <Spinner />;
	}
	return (
		<div className='series-list'>
			<ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
				{series.map((serie) => (
					<SeriesCard key={serie.id} series={serie} />
				))}
			</ul>
		</div>
	);
};

export default SeriesList;
