import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './Auth';
import { AppContextProvider } from './AppContext';
import * as serviceWorkerRegustration from './serviceWorkerRegistration';

ReactDOM.render(
	<AuthProvider>
		<AppContextProvider>
			<Router>
				<App />
			</Router>
		</AppContextProvider>
	</AuthProvider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorkerRegustration.register();
reportWebVitals();
