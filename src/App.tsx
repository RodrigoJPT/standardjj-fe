/* sign up and password reset are commented out, not part of
 MVP until there
is a good secure way for only students to create accounts */
import React from 'react';
import './App.css';
import { Route, RouteComponentProps, useLocation } from 'react-router-dom';
import Home from './Components/Home/Home';
import Series from './Components/Series/Series';
import Nav from './Components/Nav/Nav';
import SeriesDetails from './Components/SeriesDetails/SeriesDetails';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import SignUp from './Components/SignUp/SignUp';
import LogIn from './Components/LogIn/LogIn';
import UserPage from './Components/UserPage/UserPage';
import PasswordReset from './Components/PasswordReset/PasswordReset';
import VideoViewer from './Components/VideoViewer/VideoViewer';
import MobileNav from './Components/MobileNav/MobileNav';
import NotFound from './Components/NotFound/NotFound';
import {Admin, CreateVideo } from './Components/Admin/'

function App() {
	const location = useLocation();
	return (
		<div className='App'>
			<Nav />
			<main key={location.pathname}>
				<PrivateRoute path='/' exact component={Home} />
				<PrivateRoute path='/series' exact component={Series} />
				<Route
					path='/series/:id'
					render={(props: RouteComponentProps<any>) => <SeriesDetails id={props.match.params.id} />}
				/>
				<Route path='/signup' exact component={SignUp} />
				<Route path='/login' exact component={LogIn} />
				<Route path='/passwordreset' exact component={PasswordReset} />
				<Route path='/oops' exact component={NotFound} />
				<PrivateRoute path='/account' exact component={UserPage} />
				<PrivateRoute
					path='/videos/:id'
					component={(props: RouteComponentProps<any>) => <VideoViewer id={props.match.params.id} />}
				/>
				<PrivateRoute path='/admin' exact component={Admin} />
				<PrivateRoute path='/admin/videos/create' exact component={CreateVideo} />
			</main>
			<MobileNav />
		</div>
	);
}

export default App;
