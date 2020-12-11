import './App.css';
import { Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Series from './Components/Series/Series';
import Nav from './Components/Nav/Nav';

function App() {
	return (
		<div className='App' id='outer-container'>
			<Nav />
			<main id='page-wrap'>
				<Route path='/' exact component={Home} />
				<Route path='/series' exact component={Series} />
			</main>
		</div>
	);
}

export default App;
