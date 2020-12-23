import React, { useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';
import axios from 'axios';
import SeriesCard from '../SeriesCard/SeriesCard';
import './SeriesList.css';

const SeriesList = () => {
	const [series, setSeries] = useState(null);

	useEffect(() => {
		const baseUrl = process.env.REACT_APP_API_URL;
		axios.get(`${baseUrl}/series`).then((res) => {
			setSeries(res.data);
		});
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
