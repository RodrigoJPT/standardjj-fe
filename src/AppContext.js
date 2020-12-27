import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
	const [storedSeries, setStoredSeries] = useState(null);
	const [currentSeries, setCurrentSeries] = useState(null);

	return (
		<AppContext.Provider
			value={{
				storedSeries,
				setStoredSeries,
				currentSeries,
				setCurrentSeries,
			}}>
			{children}
		</AppContext.Provider>
	);
};
