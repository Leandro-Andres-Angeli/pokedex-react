import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import ProfileButtons from './ProfileButtons';

import ProfileCard from './ProfileCard';

const PokemonProfile = () => {
	const params = useParams();
	const { id } = params;

	useEffect(() => {});
	return (
		<Container
			maxWidth="lg"
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				p: '3rem',
			}}
		>
			<ProfileCard id={id} key={id}></ProfileCard>

			<ProfileButtons id={id}></ProfileButtons>
		</Container>
	);
};

export default PokemonProfile;
