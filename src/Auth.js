import React, { useEffect, useState, createContext } from 'react';
import { auth, generateUserInfo } from './fb';
import Spinner from './Components/Spinner/Spinner';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [pending, setPending] = useState(true);

	useEffect(() => {
		setPending(true);
		console.log('auth remounted');
		auth.onAuthStateChanged(async (userAuth) => {
			const user = await generateUserInfo(userAuth);
			setUser(user);
			setPending(false);
		});
		auth.onIdTokenChanged(async (data) => {
			if (data) {
				const token = await data.getIdToken();
				axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
			}
		});
	}, []);

	if (pending) {
		return <Spinner />;
	}

	return (
		<AuthContext.Provider
			value={{
				user,
			}}>
			{children}
		</AuthContext.Provider>
	);
};
