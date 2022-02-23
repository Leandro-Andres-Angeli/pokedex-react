import { Container, Typography } from '@mui/material';
import React from 'react';

const PokedexHeader = (props) => {
	const { title } = props;
	return (
		<Container
			className="pokedex_main"
			sx={{ px: 0, backgroundColor: 'white', m: 0 }}
			style={{ paddingLeft: 0, paddingRight: 0 }}
		>
			<Container component="section" sx={{ px: 0 }} maxWidth="lg">
				<Typography
					sx={{ textTransform: 'uppercase', py: 10, px: 0, ml: 3 }}
					variant="h1"
				>
					{' '}
					{title}{' '}
				</Typography>
			</Container>
		</Container>
	);
};

export default PokedexHeader;
