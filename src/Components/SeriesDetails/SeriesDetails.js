/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Spinner from '../Spinner/Spinner';
import axios from 'axios';
import VideoCard from '../VideoCard/VideoCard';
import './SeriesDetails.css';

const SeriesDetails = ({ id }) => {
	const [series, setSeries] = useState(null);

	useEffect(() => {
		const baseUrl = process.env.REACT_APP_API_URL;
		axios.get(`${baseUrl}/series/${id}`).then((res) => {
			setSeries(res.data);
		});
	}, []);

	if (!series) {
		return <Spinner />;
	}

	return (
		<div className='series-detail-container'>
			<h1 className='page-header'>{series.name}</h1>
			<h4 className='page-header'>{series.description}</h4>
			<ul style={{ listStyleType: 'none', padding: '0', margin: '0 5px' }}>
				{series.videos.map((video) => (
					<li key={video.id}>
						<VideoCard video={video} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default SeriesDetails;
