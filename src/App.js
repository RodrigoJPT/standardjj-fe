import './App.css';
import { Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Series from './Components/Series/Series';
import Nav from './Components/Nav/Nav';
import SeriesDetails from './Components/SeriesDetails/SeriesDetails';

function App() {
	return (
		<div className='App' id='outer-container'>
			<Nav />
			<main id='page-wrap'>
				<Route path='/' exact component={Home} />
				<Route path='/series' exact component={Series} />
				<Route
					path='/series/:id'
					render={(props) => <SeriesDetails id={props.match.params.id} />}
				/>
			</main>
		</div>
	);
}

export default App;
