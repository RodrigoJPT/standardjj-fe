import React from 'react';
import { Link } from 'react-router-dom';
import './VideoCard.css';
const VideoCard = ({ video }) => {
	return (
		<div className='video-card-container'>
			<Link to={`/videos/${video.yt_id}`} className='video-card'>
				<img
					src={`https://img.youtube.com/vi/${video.yt_id}/maxresdefault.jpg`}
					alt=''
				/>
				<h3>{video.title}</h3>
			</Link>
		</div>
	);
};

export default VideoCard;
