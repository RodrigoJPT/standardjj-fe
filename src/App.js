import './App.css';
import { Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Series from './Components/Series/Series';
import Nav from './Components/Nav/Nav';
import SeriesDetails from './Components/SeriesDetails/SeriesDetails';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import SignUp from './Components/SignUp/SignUp';
import LogIn from './Components/LogIn/LogIn';
import UserPage from './Components/UserPage/UserPage';
import PasswordReset from './Components/PasswordReset/PasswordReset';

function App() {
	return (
		<div className='App' id='outer-container'>
			<Nav />
			<main id='page-wrap'>
				<PrivateRoute path='/' exact component={Home} />
				<PrivateRoute path='/series' exact component={Series} />
				<Route
					path='/series/:id'
					render={(props) => <SeriesDetails id={props.match.params.id} />}
				/>
				<Route path='/signup' component={SignUp} />
				<Route path='/login' component={LogIn} />
				<PrivateRoute path='/account' component={UserPage} />
				<Route path='/passwordreset' component={PasswordReset} />
			</main>
		</div>
	);
}

export default App;
