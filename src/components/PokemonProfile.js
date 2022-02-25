import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import ProfileButtons from './ProfileButtons';
import { useState } from 'react';
import FetchPokemon from '../API/FetchPokemon';
import PokeCard from './PokeCard';
import ProfileCard from './ProfileCard';
const PokemonProfile = () => {
	const params = useParams();
	const { id } = params;
	const [fetchRes, setFetchRes] = useState([]);
	useEffect(() => {
		FetchPokemon(`${process.env.REACT_APP_API_URL}/${id}`, setFetchRes);
	}, []);
	console.log(fetchRes);
	return (
		<Container maxWidth="lg">
			<ProfileCard></ProfileCard>
			<ProfileButtons></ProfileButtons>
		</Container>
	);
};

export default PokemonProfile;
