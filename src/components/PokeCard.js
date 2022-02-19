import { Typography, Grid, Card, CardHeader, CardMedia } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import fetchData from '../API/FetchPokemon';
import Avatar from '@mui/material/Avatar';
import CardStyles from './custom_styles/CustomStyles';
import './pokecard.css';
const PokeCard = (props) => {
	const { pokemon } = props;
	const cardStyles = makeStyles({
		img: {
			objectFit: 'contain',
			objectPosition: 'center',
		},
	});
	const [pokemonArray, setPokemonArray] = useState();
	useEffect(() => {
		fetchData(pokemon.url, setPokemonArray);
	}, []);
	const classes = cardStyles(props);
	console.log(classes.img);
	console.log(pokemonArray);
	return (
		<Grid item xs={12} sm={6} md={4} lg={4}>
			{' '}
			{pokemonArray ? (
				<Card>
					<CardHeader
						sx={{
							textTransform: 'uppercase',
							fontSize: '50px',
							alignItems: 'baseline',
						}}
						avatar={
							<Avatar sx={{ fontSize: 14 }}>
								{pokemonArray.id < 10 ? (
									<>#00{pokemonArray.id}</>
								) : pokemonArray.id < 100 ? (
									<>#0{pokemonArray.id}</>
								) : (
									<>{pokemonArray.id}</>
								)}
							</Avatar>
						}
						title={
							<Typography paragraph component="h2">
								{pokemonArray.name}
							</Typography>
						}
						style={{ fontSize: '14px' }}
					></CardHeader>
					<CardMedia
						component="img"
						image={pokemonArray.sprites.other.dream_world.front_default}
						height="240"
						alt=""
						className={(classes.img, 'poke_card_header_img')}
					/>
				</Card>
			) : null}
		</Grid>
	);
};

export default PokeCard;
