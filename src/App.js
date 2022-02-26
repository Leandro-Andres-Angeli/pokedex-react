import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';

import routes from './utils/routes';
import { useTheme } from '@emotion/react';
import { ThemeProvider } from '@mui/styles';
import PokemonProfile from './components/PokemonProfile';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useState } from 'react';
let links = routes.map((e, i) => {
	let linkEl = [];
	linkEl.push(e);
	return linkEl;
});

function App() {
	const theme = useTheme();

	return (
		<ThemeProvider theme={theme}>
			<div className="app">
				<Navbar links={links}></Navbar>

				<Routes>
					{routes.map(({ path, component, to }, i) => {
						return <Route path={`/${path}`} key={i} element={component} />;
					})}

					<Route
						path={'/pokedex/:id'}
						element={<PokemonProfile></PokemonProfile>}
					></Route>
				</Routes>
			</div>
		</ThemeProvider>
	);
}

export default App;
