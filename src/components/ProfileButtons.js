import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
const ProfileButtons = (props) => {
	return (
		<Stack spacing={2} direction="row" mt={5}>
			<Link to={`/pokedex/${parseInt(props.id) - 1}`}>
				<Button
					disabled={props.id == 1}
					variant="contained"
					startIcon={<ChevronLeftIcon />}
					color="secondary"
				>
					Previous Pokemon
				</Button>
			</Link>
			<Link to="/pokedex">
				<Button variant="contained" color="secondary">
					Back To pokedex{' '}
				</Button>
			</Link>
			<Link to={`/pokedex/${parseInt(props.id) + 1}`}>
				<Button
					variant="contained"
					endIcon={<ChevronRightIcon />}
					color="secondary"
					disabled={props.id == 898}
				>
					next pokemon
				</Button>
			</Link>
		</Stack>
	);
};

export default ProfileButtons;
