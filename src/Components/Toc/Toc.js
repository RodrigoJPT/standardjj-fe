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
			<h1 className='toc-title'>Table of contents:</h1>
			<ul>
				{contents.map((item) => {
					const split = item.split(' ');
					const timestamp = split.pop();
					const seconds = convertToSeconds(timestamp);
					return (
						<li key={seconds} id={seconds} onClick={handleClick}>
							<span id={seconds}>{split.join(' ')}</span>
							<span id={seconds}>{timestamp}</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Toc;
