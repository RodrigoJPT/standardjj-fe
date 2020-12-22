import React from 'react';
import './SeriesCard.css';
import { Link } from 'react-router-dom';

const SeriesCard = ({ series }) => {
	return (
		<li className='series-card-container'>
			<Link to={`/series/${series.id}`}>
				<div
					style={{ backgroundImage: `url('${series.thumbnail}')` }}
					className='series-card'>
					<div className='series-card-info-overlay'>
						<h3>{series.name}</h3>
					</div>
				</div>
			</Link>
		</li>
	);
};

export default SeriesCard;
