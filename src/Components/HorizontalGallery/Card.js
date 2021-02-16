import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ video, styles }) => {
	return (
		<Link to={`/videos/${video.id}`} className={styles.card}>
			<img
				className={styles.thumbnail}
				src={`https://img.youtube.com/vi/${video.ytId}/mqdefault.jpg`}
				alt={video.title}
			/>
			<p class={styles.title}>{`#${video.number} ${video.title}`}</p>
		</Link>
	);
};

export default Card;
