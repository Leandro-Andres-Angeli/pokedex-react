import React, { useEffect, useReducer } from 'react';
import Container from '@mui/material/Container';

import './pokedex.css';

import PokedexHeader from '../components/PokedexHeader';
import PokedexSearchbar from '../components/PoxedexSearchbar';
import Grid from '@mui/material/Grid';

import { useState } from 'react';
import fetchData from '../API/API';
import PokeCard from '../components/PokeCard';
import { Typography } from '@mui/material';

const URI = process.env.REACT_APP_API_URL;

console.log(URI);
const Pokedex = () => {
	let [pokemonArray, setPokemonNameArray] = useState();

	const [counter, setCounter] = useState(0);

	// console.log(state);

	useEffect(() => {
		fetchData(`${URI}?limit=12&offset=${counter}`, setPokemonNameArray);
	}, []);

	return (
		<>
			<PokedexHeader></PokedexHeader>
			<PokedexSearchbar></PokedexSearchbar>
			<Container sx={{ backgroundColor: 'white', py: 3 }}>
				<Grid container spacing={3}>
					{pokemonArray
						? pokemonArray.map((p) => {
								return <PokeCard pokemon={p}></PokeCard>;
						  })
						: null}
				</Grid>
			</Container>
		</>
	);
};

export default Pokedex;
