import React, { useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';
import axios from 'axios';
import SeriesCard from '../SeriesCard/SeriesCard';

const SeriesList = () => {
	const [series, setSeries] = useState(null);

	useEffect(() => {
		axios.get('/test-series.json').then((res) => {
			console.log(res.data);
			setSeries(res.data);
		});
	}, []);
	if (!series) {
		return <Spinner />;
	}
	return (
		<ul style={{ listStyleType: 'none', padding: '0', margin: '0 30px' }}>
			{series.map((serie) => (
				<SeriesCard series={serie} />
			))}
		</ul>
	);
};

export default SeriesList;
