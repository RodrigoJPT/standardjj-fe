import React, { useContext } from 'react';
import { AuthContext } from '../../Auth';
import { auth } from '../../fb';
import { useHistory } from 'react-router-dom';

const UserPage = () => {
	const { user } = useContext(AuthContext);
	const history = useHistory();
	if (!user) {
		history.push('/login');
	}

	const handleSignOut = () => {
		auth.signOut();
	};
	return (
		<div className='mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8'>
			<div className='flex border flex-col items-center md:flex-row md:items-start border-blue-400 px-3 py-4'>
				<div className='md:pl-4'>
					<h2 className='text-2xl font-semibold'>{user.username}</h2>
					<h3 className='italic'>{user.email}</h3>
				</div>
			</div>
			<button
				className='w-full py-3 bg-red-600 mt-4 text-white'
				onClick={handleSignOut}>
				Sign out
			</button>
		</div>
	);
};

export default UserPage;
