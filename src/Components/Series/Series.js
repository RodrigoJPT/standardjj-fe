import React from 'react';
import './Series.css';
import SeriesList from '../SeriesList/SeriesList';

const Series = () => {
	return (
		<div className='series-browser'>
			<h1 className='page-header' style={{ textAlign: 'center' }}>
				Browse Series
			</h1>
			<SeriesList />
		</div>
	);
};

export default Series;
