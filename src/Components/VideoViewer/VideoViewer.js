/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, useEffect, useContext } from 'react';
import ReactPlayer from 'react-player';
import Spinner from '../Spinner/Spinner';
import axios from 'axios';
import './VideoViewer.css';
import Toc from '../Toc/Toc';
import { Link, useHistory } from 'react-router-dom';
import { AppContext } from '../../AppContext';

const VideoViewer = ({ id }) => {
	const playerRef = useRef();
	const [video, setVideo] = useState(null);
	const [playing, setPlaying] = useState(false);
	const { currentSeries, setCurrentSeries } = useContext(AppContext);
	const history = useHistory();

	useEffect(() => {
		const baseUrl = process.env.REACT_APP_API_URL;
		axios
			.get(`${baseUrl}/videos/${id}`)
			.then((res) => {
				setVideo(res.data);
				return res.data;
			})
			.then((res) => {
				if (!currentSeries.videos) {
					return axios.get(`${baseUrl}/series/${res.seriesId}`);
				} else return { data: currentSeries };
			})
			.then((res) => {
				const videos = [...res.data.videos].sort((a, b) => {
					return a.number - b.number;
				});
				setCurrentSeries({ ...res.data, videos: videos });
			})
			.catch(() => {
				history.push('/oops');
			});
	}, []);

	if (!video || !currentSeries.videos) {
		return <Spinner />;
	}

	const prevIndex = false; //video.number > 1 ? video.number - 2 : false; bugged, researching fix
	const nextIndex = false;
	//video.number < currentSeries.videos.length ? video.number : false;

	const goTo = (e) => {
		playerRef.current.seekTo(Number(e.target.id));
		playerRef.current.playing = true;
	};

	return (
		<div className='video-viewer'>
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
			<h1 className='viewer-title'>{video.title}</h1>
			<p className='video-description'>{video.description}</p>
			<Toc contents={video.toc} handleClick={goTo} />
			<div className='viewer-nav-links'>
				{prevIndex ? (
					<Link
						to={`/videos/${currentSeries.videos[prevIndex].id}`}
						className='back-page-link'
						style={{ color: '#42347b', fontWeight: '700' }}>
						<i className='fas fa-chevron-left'></i>
						Previous Video
					</Link>
				) : null}
				<Link
					to={`/series/${video.seriesId}`}
					className='back-page-link'
					style={{ color: '#42347b', fontWeight: '700', margin: '0 auto' }}>
					Back To Series
				</Link>
				{!!nextIndex ? (
					<Link
						to={`/videos/${currentSeries.videos[nextIndex].id}`}
						className='back-page-link'
						style={{ color: '#42347b', fontWeight: '700' }}>
						Next Video
						<i className='fas fa-chevron-right'></i>
					</Link>
				) : null}
			</div>
		</div>
	);
};

export default VideoViewer;
