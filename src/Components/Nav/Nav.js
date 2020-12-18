import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	function handleStateChange(state) {
		setMenuOpen(state.isOpen);
	}

	function closeMenu() {
		setMenuOpen(false);
	}

	return (
		<header className='nav'>
			<Link to='/'>
				<img
					src='/assets/standard-jiujitsu-logo.png'
					alt='standard logo'
					className='app-logo'
				/>
			</Link>
			<Menu
				pageWrapId={'page-wrap'}
				outerContainerId={'outer-container'}
				right
				isOpen={menuOpen}
				disableAutoFocus
				onStateChange={handleStateChange}>
				<Link to='/' onClick={closeMenu}>
					Home
				</Link>
				<Link to='/series' onClick={closeMenu}>
					Series
				</Link>
				<Link to='/account' onClick={closeMenu}>
					Account
				</Link>
			</Menu>
			<nav className='nav-links'>
				<Link to='/'>Home</Link>
				<Link to='/series'>Series</Link>
				<Link to='/account'>Account</Link>
			</nav>
		</header>
	);
};

export default Nav;
