import { Grid, Card } from '@mui/material';

import React, { useEffect, useState } from 'react';
import fetchData from '../API/FetchPokemon';

import CardContent from '@mui/material/CardContent';

import Stack from '@mui/material/Stack';

import Zoom from '@mui/material/Zoom';
import './pokecard.css';

import { Link } from 'react-router-dom';
import PokeCardChips from './PokeCardChips';
import PokeCardCardMedia from './PokeCardCardMedia';
import PokeCardHeader from './PokeCardHeader';
const PokeCard = (props) => {
	const { pokemon, pokedexArray, search, query, fade } = props;

	const [pokemonArray, setPokemonArray] = useState();
	useEffect(() => {
		if (search === undefined) {
			fetchData(pokemon.url, setPokemonArray);
		}
	}, [pokedexArray]);
	useEffect(() => {
		if (search !== undefined && search !== null) {
			fetchData(pokemon.url, setPokemonArray);
		}
	}, [pokedexArray, search, query]);

	return (
		<Grid item xs={12} sm={6} md={4} lg={4}>
			{' '}
			{pokemonArray ? (
				<Zoom in={fade} style={{ transitionDelay: fade ? '500ms' : '0ms' }}>
					<Card>
						<PokeCardHeader source={pokemonArray}></PokeCardHeader>

						<Link to={`/pokedex/${pokemonArray.id}`}>
							<PokeCardCardMedia
								height="240"
								alt=""
								className="poke_card_header_img"
								mediaSource={pokemonArray}
							></PokeCardCardMedia>
						</Link>
						<CardContent>
							<Stack direction="row" spacing={1}>
								{pokemonArray.types.map((e) => {
									return (
										<>
											<PokeCardChips
												type={e.type.name}
												height={240}
												className="poke_card_header_img"
											></PokeCardChips>
										</>
									);
								})}
							</Stack>
						</CardContent>
					</Card>
				</Zoom>
			) : null}
		</Grid>
	);
};

export default PokeCard;
