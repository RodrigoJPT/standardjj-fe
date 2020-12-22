import React from 'react';
import { Link } from 'react-router-dom';
import './VideoCard.css';
const VideoCard = ({ video }) => {
	const secondarySrc = (e) => {
		console.log('got here');
		e.target.src = `https://img.youtube.com/vi/${video.ytId}/0.jpg`;
	};
	return (
		<div className='video-card-container'>
			<Link to={`/videos/${video.id}`} className='video-card'>
				<img
					src={`https://img.youtube.com/vi/${video.ytId}/maxresdefault.jpg`}
					onError={secondarySrc}
					alt=''
				/>
				<h3>{video.title}</h3>
			</Link>
		</div>
	);
};

export default VideoCard;
