import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
	return (
		<header className='nav'>
			<Link to='/'>
				<img
					src='/assets/standard-jiujitsu-logo.png'
					alt='standard logo'
					className='app-logo'
				/>
			</Link>
			<nav className='nav-links'>
				<Link to='/'>
					<i className='fas fa-home'></i>
					<span>home</span>
				</Link>
				<Link to='/series'>
					<i className='fas fa-th-list'></i>
					<span>series</span>
				</Link>
				<Link to='/account'>
					<i className='fas fa-user'></i>
					<span>account</span>
				</Link>
			</nav>
		</header>
	);
};

export default Nav;
