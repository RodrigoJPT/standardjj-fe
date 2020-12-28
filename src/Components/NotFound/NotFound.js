import React from 'react';

const NotFound = () => {
	return (
		<div>
			<h1 className='page-header'>Something Went wrong</h1>
			<h3 style={{ margin: '0 5px' }}>
				This link either does not exist or there was a problem verifying your
				account. Try signing out and signing back in.
			</h3>
		</div>
	);
};

export default NotFound;
