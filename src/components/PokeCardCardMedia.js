import { CardMedia } from '@mui/material';
import React from 'react';

const PokeCardCardMedia = (props) => {
	const { mediaSource, height, profile } = props;
	console.log(profile);
	return (
		<CardMedia
			component="img"
			image={
				mediaSource.sprites.other.dream_world.front_default
					? mediaSource.sprites.other.dream_world.front_default
					: mediaSource.sprites.other.home.front_default
					? mediaSource.sprites.other.home.front_default
					: mediaSource.sprites.front_default
			}
			alt=""
			sx={{
				height: profile !== true ? '25vh' : '60vh',

				transform: {
					sm: profile === true ? 'scale(0.7)' : null,
					md: profile === true ? 'scale(0.5)' : null,
				},
				'&:hover': {
					transform: profile === true ? 'scale(.7)' : null,
				},
			}}
			className="poke_card_header_img "
		/>
	);
};

export default PokeCardCardMedia;
