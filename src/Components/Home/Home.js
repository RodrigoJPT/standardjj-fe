import React, { useContext, useState, useEffect } from 'react';
import './Home.css';
import Spinner from '../Spinner/Spinner';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../Auth';

const Home = () => {
	const { user } = useContext(AuthContext);
	const history = useHistory();
	const [install, setInstall] = useState(false);
	/* const [alreadyInstalled, setAlreadyInstalled] = useState(false);

	useEffect(() => {
		navigator
			.getInstalledRelatedApps()
			.then((res) => setAlreadyInstalled(!!res.length));
	}, []); */

	const revealInstall = () => {
		setInstall(true);
	};

	const goToSeries = () => {
		history.push('/series');
	};

	if (!user) {
		return <Spinner />;
	}

	/* if (alreadyInstalled) {
		history.push('/series');
	} */

	return (
		<div className='home-page'>
			<div
				className='home-hero'
				style={{
					backgroundImage:
						'url("https://1eetwi4aoumq384crg2r369r-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/StandardBJJ-8-of-21-1024x684.jpg")',
				}}>
				<div className='home-hero-overlay'>
					<div className='home-hero-info'>
						<h1>Welcome to the Standard Jiu Jitsu App</h1>
						<h3>An instructional video platform for our students</h3>
					</div>
				</div>
			</div>
			<h4 className='home-start-header'>Getting started:</h4>
			{install ? (
				<div className='home-install'>
					<p>
						<b>For iOS:</b>
						{'\n'}
						iOS only allows installs through the Safari browser. Open this page
						in Safari, then press the{' '}
						<img
							style={{ height: '15px', margin: '0 5px' }}
							src='https://developer.apple.com/design/human-interface-guidelines/ios/images/icons/navigation_bar_toobar_icons/Navigation_Action.png'
							alt=''
						/>{' '}
						icon and select "Add to Home Screen". It should look something like
						this:
						<img
							style={{ margin: '15px auto', display: 'block' }}
							src='/assets/safari-install.gif'
							alt=''
						/>
						<b>For Android:</b>
						{'\n'}
						You can simply select the options {' ( '}
						<i className='fas fa-ellipsis-v'></i>
						{' ) '}
						icon on your browser and select "Add to Home Screen". Your phone may
						have even prompted you to install already.
					</p>
					<button onClick={() => setInstall(false)}>Back</button>
				</div>
			) : (
				<div className='home-start'>
					<button onClick={revealInstall}>Install App</button>
					<button onClick={goToSeries}>Continue in Browser</button>
				</div>
			)}
		</div>
	);
};

export default Home;
