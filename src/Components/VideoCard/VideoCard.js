import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './VideoCard.css';
const VideoCard = ({ video }) => {
	const history = useHistory();

	const handleClick = (e) => {
		if (e.target.id !== 'series-link') {
			history.push(`/videos/${video.id}`);
		}
	};

	return (
		<div className='video-card' onClick={handleClick}>
			<div
				className='video-card-image'
				style={{
					backgroundImage: `url('https://img.youtube.com/vi/${video.ytId}/mqdefault.jpg')`,
				}}>
				<i className='far fa-play-circle'></i>
			</div>
			<div className='video-card-info'>
				<h1 className='video-card-title'>
					{video.title}
					<span>#9</span>
				</h1>
				<Link
					id='series-link'
					className='video-card-series'
					to={`/series/${video.seriesId}`}>
					{video.series}
				</Link>
				<p className='video-card-description'>{video.description}</p>
			</div>
		</div>
	);
};

export default VideoCard;
