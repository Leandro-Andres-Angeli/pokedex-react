import React, { useEffect } from 'react';
import Container from '@mui/material/Container';

import './pokedex.css';

import PokedexHeader from '../components/PokedexHeader';
import PokedexSearchbar from '../components/PoxedexSearchbar';
import Grid from '@mui/material/Grid';

import { useState } from 'react';
import fetchData from '../API/API';
import PokeCard from '../components/PokeCard';

import PokedexPagination from '../components/PokedexPagination';

import { Typography } from '@mui/material';
import { fuseSearch } from '../API/fusePokedex';
import { validateNum, validateText } from '../utils/validation';
const URI = process.env.REACT_APP_API_URL;

const Pokedex = () => {
	let [pokemonArray, setPokemonNameArray] = useState();
	let [search, setSearch] = useState(null);
	let [query, setQuery] = useState('');
	let [queryResults, setQueryResults] = useState([]);
	let [searchResults, setSearchResults] = useState([]);
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		fetchData(`${URI}?limit=12&offset=${counter}`, setPokemonNameArray);
	}, [counter]);

	useEffect(() => {
		fetchData(`${URI}?limit=898&offset=0`, setQueryResults);

		// if (queryResults.length > 0) {
		if (validateText(query)) {
			const options = {
				includeScore: true,
				useExtendedSearch: true,
				threshold: 0.2,
				keys: ['name'],
			};
			fuseSearch(queryResults, options, setSearchResults, query);
		} else if (validateNum(query)) {
			console.log(query);
			const filteredNumber = queryResults.filter(
				(e) => e.url === `${process.env.REACT_APP_API_URL}/${query}/`
			);
			console.log(filteredNumber);
			if (filteredNumber) {
				setTimeout(2000, setSearchResults(filteredNumber));
			}
		}
		// }
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
								? pokemonArray.map((p, i) => {
										return (
											<PokeCard
												key={i}
												pokemon={p}
												pokedexArray={pokemonArray}
											></PokeCard>
										);
								  })
								: null}
						</>
					) : (
						<>
							{searchResults ? (
								searchResults.length === 0 ? (
									<Container sx={{ textAlign: 'center', py: 10 }}>
										{' '}
										<Typography variant="h4">Pokemon not found </Typography>
									</Container>
								) : (
									searchResults.map((p, i) => {
										return (
											<PokeCard
												key={i}
												pokemon={p}
												query={query}
												search={search}
												pokedexArray={searchResults}
											></PokeCard>
										);
									})
								)
							) : null}
							{null}
						</>
					)}
				</Grid>
				{search === null ? (
					<PokedexPagination
						counter={counter}
						setCounter={setCounter}
					></PokedexPagination>
				) : null}
			</Container>
		</>
	);
};

export default Pokedex;
