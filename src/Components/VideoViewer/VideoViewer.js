import React, { useRef, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Spinner from '../Spinner/Spinner';
import axios from 'axios';
import './VideoViewer.css';
import Toc from '../Toc/Toc';

const VideoViewer = ({ id }) => {
	const playerRef = useRef();
	const [video, setVideo] = useState(null);
	const [playing, setPlaying] = useState(false);

	useEffect(() => {
		axios.get('/test-videos.json').then((res) => {
			setVideo(res.data[id]);
			console.log(res.data[id]);
		});
	}, []);

	if (!video) {
		return <Spinner />;
	}

	const goTo = (e) => {
		playerRef.current.seekTo(Number(e.target.id));
		playerRef.current.playing = true;
	};

	return (
		<>
			<ReactPlayer
				className='react-player'
				ref={playerRef}
				url={video.url}
				width={'100%'}
				height={'56.25vw'}
				controls={true}
				playing={playing}
				onPause={() => setPlaying(false)}
				onPlay={() => setPlaying(true)}
				onSeek={() => setPlaying(true)}
			/>
			<h1 className='page-header'>{video.title}</h1>
			<p className='video-description'>{video.description}</p>
			<Toc contents={video.toc} handleClick={goTo} />
		</>
	);
};

export default VideoViewer;
