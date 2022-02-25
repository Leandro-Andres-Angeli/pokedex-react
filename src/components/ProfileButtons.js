import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
const ProfileButtons = () => {
	return (
		<Stack spacing={2} direction="row">
			<Button
				variant="contained"
				startIcon={<ChevronLeftIcon />}
				color="secondary"
			>
				Previous Pokemon
			</Button>
			<Link to="/pokedex">
				<Button variant="contained" color="secondary">
					Back To pokedex{' '}
				</Button>
			</Link>
			<Button
				variant="contained"
				endIcon={<ChevronRightIcon />}
				color="secondary"
			>
				next pokemon
			</Button>
		</Stack>
	);
};

export default ProfileButtons;
