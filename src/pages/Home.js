import React from 'react';
import { makeStyles, useTheme } from '@mui/styles';
import Container from '@mui/material/Container';
import './home.css';
import { Typography } from '@mui/material';
// const style = makeStyles({
// 	root: {
// 		textDecoration: 'underline',
// 	},
// });

const Home = () => {
	const theme = useTheme();

	console.log(theme.mixins.toolbar);
	console.log(theme.grass);
	return (
		<Container
			className="home_main"
			maxWidth="lg"
			component="main"
			sx={{ height: '91vh', display: 'flex' }}
		>
			<img
				alt=""
				src="./img/pokeball.svg"
				style={{ marginBottom: '2rem' }}
			></img>
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
					color: theme.electric,
					textShadow: `-2px -2px 0 ${theme.water}, 2px -2px 0 ${theme.water}, -2px 2px 0 ${theme.water}, 2px 2px 0 ${theme.water}`,
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
