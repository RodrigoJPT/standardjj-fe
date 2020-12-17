import React from 'react';

const Toc = ({ contents, handleClick }) => {
	const convertToSeconds = (hms) => {
		const split = hms.split(':');
		let seconds = Number(split[0]) * 60;
		seconds += Number(split[1]);
		return seconds;
	};
	return (
		<div className='toc'>
			<ul>
				{contents.map((item) => {
					const split = item.split(' ');
					const seconds = convertToSeconds(split[split.length - 1]);
					return (
						<li key={seconds} id={seconds} onClick={handleClick}>
							{item}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Toc;
