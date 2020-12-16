import React, { useContext } from 'react';
import { AuthProvider } from '../../Auth';
import { auth } from '../../fb';
import { Redirect } from 'react-router-dom';

const UserPage = () => {
	const user = useContext(AuthProvider);

	if (!user) {
		return <Redirect to='/login' />;
	}
	const { username, email } = user;

	const handleSignOut = () => {
		auth.signOut();
	};
	return (
		<div className='mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8'>
			<div className='flex border flex-col items-center md:flex-row md:items-start border-blue-400 px-3 py-4'>
				<div className='md:pl-4'>
					<h2 className='text-2xl font-semibold'>{username}</h2>
					<h3 className='italic'>{email}</h3>
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
