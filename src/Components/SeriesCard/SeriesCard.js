import React from 'react';
import './SeriesCard.css';
import { Link } from 'react-router-dom';

const SeriesCard = ({ series }) => {
	return (
		<li className='series-card-container'>
			<Link to={`/series/${series.id}`} className='series-card'>
				<img src={series.thumbnail} alt='' />
				<h3>{series.name}</h3>
				<p>{series.description}</p>
			</Link>
		</li>
	);
};

export default SeriesCard;
