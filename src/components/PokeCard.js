import { Typography, Grid, Card, CardHeader, CardMedia } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import fetchData from '../API/FetchPokemon';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import customStyles from '../components/custom_styles/CustomStyles';

import './pokecard.css';
import checkColor from '../utils/checkColorFunc';
const PokeCard = (props) => {
	const { pokemon, pokedexArray } = props;
	console.log(pokedexArray.url);
	const theme = useTheme();

	const [pokemonArray, setPokemonArray] = useState();
	useEffect(() => {
		fetchData(pokemon.url, setPokemonArray);
	}, [pokedexArray]);

	return (
		<Grid item xs={12} sm={6} md={4} lg={4}>
			{' '}
			{pokemonArray ? (
				<Card>
					<CardHeader
						sx={{
							textTransform: 'uppercase',
							fontSize: '50px',
							alignItems: 'center',
							display: 'flex',
						}}
						avatar={
							<Avatar sx={{ fontSize: 14 }}>
								{pokemonArray.id < 10 ? (
									<>#00{pokemonArray.id}</>
								) : pokemonArray.id < 100 ? (
									<>#0{pokemonArray.id}</>
								) : (
									<>#{pokemonArray.id}</>
								)}
							</Avatar>
						}
						title={
							<>
								<Typography paragraph component="h2">
									{pokemonArray.name}
								</Typography>
							</>
						}
						action={
							<>
								<svg
									width="100"
									height="100"
									xmlns="http://www.w3.org/2000/svg"
								>
									<image
										href={pokemonArray.sprites.front_default}
										height="100"
										width="100"
									/>
								</svg>
							</>
						}
						style={{ fontSize: '14px' }}
					></CardHeader>
					<CardMedia
						component="img"
						image={
							pokemonArray.sprites.other.dream_world.front_default
								? pokemonArray.sprites.other.dream_world.front_default
								: pokemonArray.sprites.other.home.front_default
								? pokemonArray.sprites.other.home.front_default
								: pokemonArray.sprites.front_default
						}
						height="240"
						alt=""
						className={'poke_card_header_img'}
					/>
					<CardContent>
						<Stack direction="row" spacing={1}>
							{pokemonArray.types.map((e) => {
								return (
									<>
										<Chip
											label={e.type.name}
											sx={{
												bgcolor: theme.palette[e.type.name],
												fontWeight: 'bold',
												textTransform: 'uppercase',
												color: checkColor(theme.palette[e.type.name])
													? //  tc(theme.palette[e.type.name]).isDark()
													  'white'
													: 'black',
											}}
											variant="filled"
										></Chip>
									</>
								);
							})}
						</Stack>
					</CardContent>
				</Card>
			) : null}
		</Grid>
	);
};

export default PokeCard;
