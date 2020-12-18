import React, { useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';
import axios from 'axios';
import SeriesCard from '../SeriesCard/SeriesCard';

const SeriesList = () => {
	const [series, setSeries] = useState(null);

	useEffect(() => {
		axios
			.get('http://localhost:5000/standardjj/us-central1/api/series')
			.then((res) => {
				setSeries(res.data);
			});
	}, []);
	if (!series) {
		return <Spinner />;
	}
	return (
		<ul style={{ listStyleType: 'none', padding: '0', margin: '0 5px' }}>
			{series.map((serie) => (
				<SeriesCard key={serie.id} series={serie} />
			))}
		</ul>
	);
};

export default SeriesList;
