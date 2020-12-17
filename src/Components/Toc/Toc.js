import React from 'react';
import './Toc.css';

const Toc = ({ contents, handleClick }) => {
	const convertToSeconds = (hms) => {
		const split = hms.split(':');
		let seconds = Number(split[0]) * 60;
		seconds += Number(split[1]);
		return seconds;
	};
	return (
		<div className='toc'>
			<h2 className='page-header'>Table of contents:</h2>
			<ul>
				{contents.map((item) => {
					const split = item.split(' ');
					const timestamp = split.pop();
					const seconds = convertToSeconds(timestamp);
					return (
						<li key={seconds} id={seconds} onClick={handleClick}>
							<span>{split.join(' ')}</span>
							<span>{timestamp}</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Toc;
