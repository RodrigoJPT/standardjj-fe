/* sign up and password reset are commented out, not part of
 MVP until there
is a good secure way for only students to create accounts */

import './App.css';
import { Route, useLocation } from 'react-router-dom';
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
					render={(props) => <SeriesDetails id={props.match.params.id} />}
				/>
				<Route path='/signup' component={SignUp} />
				<Route path='/login' component={LogIn} />
				<Route path='/passwordreset' component={PasswordReset} />
				<Route path='/oops' component={NotFound} />
				<PrivateRoute path='/account' component={UserPage} />
				<Route
					path='/videos/:id'
					component={(props) => <VideoViewer id={props.match.params.id} />}
				/>
			</main>
			<MobileNav />
		</div>
	);
}

export default App;
