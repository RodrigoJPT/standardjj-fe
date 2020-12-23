import React from 'react';
import { Link } from 'react-router-dom';
import './VideoCard.css';
const VideoCard = ({ video }) => {
	const secondarySrc = (e) => {
		console.log('got here');
		e.target.src = `https://img.youtube.com/vi/${video.ytId}/0.jpg`;
	};
	return (
		<Link to={`/videos/${video.id}`} className='video-card'>
			<div className='video-card-thumbnail-container'>
				<img
					src={`https://img.youtube.com/vi/${video.ytId}/maxresdefault.jpg`}
					onError={secondarySrc}
					alt=''
				/>
			</div>
			<div className='video-card-info'>
				<h3>{video.title}</h3>
				<p>{video.description}</p>
			</div>
		</Link>
	);
};

export default VideoCard;
