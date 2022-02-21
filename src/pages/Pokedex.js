import React, { useEffect, useReducer } from 'react';
import Container from '@mui/material/Container';

import './pokedex.css';

import PokedexHeader from '../components/PokedexHeader';
import PokedexSearchbar from '../components/PoxedexSearchbar';
import Grid from '@mui/material/Grid';

import { useState } from 'react';
import fetchData from '../API/API';
import PokeCard from '../components/PokeCard';
import { ThemeProvider } from '@mui/material/styles';
import cardColors from '../components/custom_styles/CustomStyles';
import PokedexPagination from '../components/PokedexPagination';
import axios from 'axios';
import Fuse from 'fuse.js';

const URI = process.env.REACT_APP_API_URL;

console.log(URI);
const Pokedex = () => {
	let [pokemonArray, setPokemonNameArray] = useState();
	let [search, setSearch] = useState(false);
	let [query, setQuery] = useState('');
	const [queryResults, setQueryResults] = useState([]);
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		fetchData(`${URI}?limit=12&offset=${counter}`, setPokemonNameArray);
	}, [counter]);
	useEffect(() => {
		axios
			.get(`${URI}?limit=898&offset=0`)
			.then((res) => {
				setQueryResults(res?.data.results);
			})
			.catch((err) => console.log(err));
		console.log(queryResults);
		const options = {
			includeScore: true,
			useExtendedSearch: true,
			threshold: 0.3,

			keys: ['name'],
		};

		const fuse = new Fuse(queryResults, options);
		const result = fuse.search('pikachu');
		console.log(result);
	}, [search]);
	return (
		<>
			<Container sx={{ backgroundColor: 'white', py: 3 }}>
				<PokedexHeader></PokedexHeader>
				<PokedexSearchbar
					setSearch={setSearch}
					setQuery={setQuery}
					search={search}
				></PokedexSearchbar>
				<Grid container spacing={3} pt={10}>
					{pokemonArray
						? pokemonArray.map((p) => {
								return (
									<PokeCard
										pokemon={p}
										search={search}
										pokedexArray={pokemonArray}
									></PokeCard>
								);
						  })
						: null}
				</Grid>
				<PokedexPagination
					counter={counter}
					setCounter={setCounter}
				></PokedexPagination>
			</Container>
		</>
	);
};

export default Pokedex;
