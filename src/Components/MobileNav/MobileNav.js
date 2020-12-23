import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './MobileNav.css';

const MobileNav = () => {
	const nav = useRef();

	const setActive = (e) => {
		if (e.target.id === 'mobile-nav') {
			return;
		}
		const links = [...nav.current.children];
		links.forEach((link) => {
			link.classList.remove('mobile-nav-active');
		});
		links[Number(e.target.id)].classList.add('mobile-nav-active');
	};

	return (
		<nav
			id='mobile-nav'
			className='mobile-nav-links'
			ref={nav}
			onClick={setActive}>
			<Link id='0' to='/' className='mobile-nav-active'>
				<i id='0' className='fas fa-home'></i>
				<span id='0'>home</span>
			</Link>
			<Link id='1' to='/series'>
				<i id='1' className='fas fa-th-list'></i>
				<span id='1'>series</span>
			</Link>
			<Link id='2' to='/account'>
				<i id='2' className='fas fa-user'></i>
				<span id='2'>account</span>
			</Link>
		</nav>
	);
};

export default MobileNav;
