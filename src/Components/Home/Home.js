import React, { useContext, useState, useEffect } from 'react';
import './Home.css';
import VideoCard from '../VideoCard/VideoCard';
import Spinner from '../Spinner/Spinner';
import axios from 'axios';
import { AuthContext } from '../../Auth';
import { Link } from 'react-router-dom';

const Home = () => {
	const { user } = useContext(AuthContext);
	const [videos, setVideos] = useState(null);

	useEffect(() => {
		const baseUrl = process.env.REACT_APP_API_URL;
		axios
			.get(`${baseUrl}/videos`)
			.then((res) => setVideos(res.data))
			.catch(console.error);
	}, []);

	if (!user || !videos) {
		return <Spinner />;
	}
	return (
		<div className='home-page'>
			<h1 className='page-header'>Welcome {user.username}</h1>
			<h2 className='page-header'>
				Get started by browsing our <Link to='/series'>series topics</Link> or
				watch our newest videos below:
			</h2>
			<ul style={{ listStyleType: 'none', padding: '0', margin: '0 5px' }}>
				{videos.map((video, index) => (
					<li key={index}>
						<VideoCard video={video} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
