import React, { useState } from 'react';
import './Series.css';
import Spinner from '../Spinner/Spinner';

const Series = () => {
	const [series, setSeries] = useState(null);

	if (!series) {
		return (
			<div className='series-browser'>
				<h1 className='page-header'>Browse Series</h1>
				<Spinner />
			</div>
		);
	}
	return (
		<div className='series-browser'>
			<h1 className='page-header'>Browse Series</h1>
		</div>
	);
};

export default Series;
