import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
	return (
		<div>
			<Link to={`/videos/${video.yt_id}`} className='series-card'>
				<img
					src={`https://img.youtube.com/vi/${video.yt_id}/maxresdefault.jpg`}
					alt=''
				/>
				<h3>{video.title}</h3>
				<h4>from the {video.series} series</h4>
				<p>{video.description}</p>
			</Link>
		</div>
	);
};

export default VideoCard;
