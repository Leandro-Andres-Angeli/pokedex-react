import React from 'react';
import Container from '@mui/material/Container';

import './pokedex.css';

import PokedexHeader from '../components/PokedexHeader';
import PokedexSearchbar from '../components/PoxedexSearchbar';
import Grid from '@mui/material/Grid';
console.log(process.env.REACT_APP_API_URL);
const Pokedex = () => {
	return (
		<>
			<PokedexHeader></PokedexHeader>
			<PokedexSearchbar></PokedexSearchbar>
			<Container>
				<Grid container spacing={0}></Grid>
			</Container>
		</>
	);
};

export default Pokedex;
