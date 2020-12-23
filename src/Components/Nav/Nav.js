import React, { useState } from 'react';
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
				<Link to='/'>Home</Link>
				<Link to='/series'>Series</Link>
				<Link to='/account'>Account</Link>
			</nav>
		</header>
	);
};

export default Nav;
