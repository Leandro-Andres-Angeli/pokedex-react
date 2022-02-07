import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import routes from './utils/routes';
import Home from './pages/Home';
//  const links = ['home', 'pokedex', 'advanced search', 'about'];
let links = routes.map((e, i) => {
	let linkEl = e.path.replace('_', ' ');
	return linkEl;
});

function App() {
	return (
		<div className="app">
			<Navbar links={links}></Navbar>
			<Routes>
				<Route path={`/`} key="home" element={<Home />} />
				{routes.map(({ path, component }, i) => {
					return <Route path={`/${path}`} key={i} element={component} />;
				})}
			</Routes>
		</div>
	);
}

export default App;
