import React, { useEffect, useState, createContext } from 'react';
import { app, generateUserInfo } from './fb';
import Spinner from './Components/Spinner/Spinner';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [pending, setPending] = useState(true);

	useEffect(() => {
		console.log('auth remounted');
		app.auth().onAuthStateChanged(async (userAuth) => {
			const user = await generateUserInfo(userAuth);
			setUser(user);
			setPending(false);
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
