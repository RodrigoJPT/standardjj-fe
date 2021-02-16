import React, { useRef } from 'react';
import styles from './HorizontalGallery.module.css';
import Card from './Card';

const HorizontalGallery = ({ videos }) => {
	const gallery = useRef();

	const scroll = (e) => {
		let currentScroll = 0;
		const direction = e.target.id;
		const distance = 200;
		const scrollAmount = 20;
		const timer = setInterval(function () {
			if (direction === 'left') {
				gallery.current.scrollLeft -= scrollAmount;
			} else {
				gallery.current.scrollLeft += scrollAmount;
			}
			currentScroll += scrollAmount;
			if (currentScroll >= distance) {
				window.clearInterval(timer);
			}
		}, 40);
	};

	return (
		<div className={styles.container}>
			<button id='left' onClick={scroll} className={styles.scroller}>
				&lsaquo;
			</button>
			<div className={styles.gallery} ref={gallery}>
				{videos.map((video) => (
					<Card video={video} styles={styles} />
				))}
			</div>
			<button id='right' onClick={scroll} className={styles.scroller}>
				&rsaquo;
			</button>
		</div>
	);
};

export default HorizontalGallery;
