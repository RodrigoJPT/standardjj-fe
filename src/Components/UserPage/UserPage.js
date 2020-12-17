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
		<div style={{ margin: '0 auto', padding: '10px' }}>
			<h2>{user.username}</h2>
			<h3>{user.email}</h3>
			<button onClick={handleSignOut}>Sign out</button>
		</div>
	);
};

export default UserPage;
