import './App.css';
import { slide as Menu } from 'react-burger-menu';
import { Link, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Series from './Components/Series/Series';

function App() {
	return (
		<div className='App' id='outer-container'>
			<Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} right>
				<Link to='/'>Home</Link>
				<Link to='/series'>Browse Series</Link>
			</Menu>
			<main id='page-wrap'>
				<Route path='/' exact component={Home} />
				<Route path='/series' exact component={Series} />
			</main>
		</div>
	);
}

export default App;
