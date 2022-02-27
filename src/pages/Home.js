import React from 'react';
import { useTheme } from '@mui/styles';
import Container from '@mui/material/Container';
import './home.css';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
	const theme = useTheme();

	return (
		<Container
			className="home_main"
			maxWidth="lg"
			component="main"
			sx={{ height: '91vh', display: 'flex' }}
		>
			<Link to="/pokedex">
				<img
					alt=""
					src="./img/pokeball.svg"
					style={{ marginBottom: '2rem' }}
				></img>
			</Link>
			<Typography
				variant="h2"
				sx={{
					textTransform: 'uppercase ',
					fontWeight: 'bold',
					textShadow: `-2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white, 2px 2px 0 white`,
				}}
			>
				welcome to
			</Typography>
			<Typography
				variant="h1"
				className="title"
				style={{
					fontFamily: 'Pokemon',
					color: theme.palette.electric,
					textShadow: `-2px -2px 0 ${theme.palette.water}, 2px -2px 0 ${theme.palette.water}, -2px 2px 0 ${theme.palette.water}, 2px 2px 0 ${theme.palette.water}`,
					position: 'relative',
					marginBottom: '10rem',
				}}
			>
				Pokemon
			</Typography>
		</Container>
	);
};

export default Home;
