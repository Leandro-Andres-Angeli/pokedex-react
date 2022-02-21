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
	let [search, setSearch] = useState(null);
	let [query, setQuery] = useState('');
	let [queryResults, setQueryResults] = useState([]);
	let [searchResults, setSearchResults] = useState([]);
	const [counter, setCounter] = useState(0);
	console.log(counter);
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

		if (queryResults.length > 0) {
			const options = {
				includeScore: true,
				useExtendedSearch: true,
				threshold: 0.3,
				keys: ['name'],
			};

			const fuse = new Fuse(queryResults, options);
			const result = fuse.search(query);
			let resArray = [];
			resArray = result.map((e) => e.item);
			// setPokemonNameArray(resArray);
			// console.log(resArray);
			setSearchResults(resArray);
		}
	}, [search, query]);
	console.log(searchResults);
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
					{search === null ? (
						<>
							{pokemonArray
								? pokemonArray.map((p) => {
										return (
											<PokeCard
												pokemon={p}
												pokedexArray={pokemonArray}
											></PokeCard>
										);
								  })
								: null}
						</>
					) : (
						<>
							{searchResults
								? searchResults.map((p) => {
										return (
											<PokeCard
												pokemon={p}
												query={query}
												search={search}
												pokedexArray={searchResults}
											></PokeCard>
										);
								  })
								: null}
							{null}
						</>
					)}
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
