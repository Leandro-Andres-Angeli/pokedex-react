import React from 'react';
import Container from '@mui/material/Container';
import { Typography, Box, Divider, List, ListItem } from '@mui/material';
const About = () => {
	return (
		<Container maxWidth="lg" sx={{ bgcolor: 'white' }}>
			<Box px={10} py={15}>
				<Typography paragraph>
					Diseñado y programado por Leandro Angeli , 2022 , Buenos Aires,
					Argentina
					<List>
						Recursos Utilizados:
						<ListItem>React</ListItem>
						<ListItem>Material UI</ListItem>
						<ListItem>Data fetched desde pokeapi.co</ListItem>
						<ListItem>Fuse</ListItem>
						<ListItem>TinyColor</ListItem>
						<ListItem>Axios</ListItem>
						<ListItem>React router dom</ListItem>
					</List>
				</Typography>
				<Divider></Divider>
				<Typography paragraph mt={3}>
					Designed y programmed by Leandro Angeli , 2022 , Buenos Aires,
					Argentina
					<List>
						Resources I used:
						<ListItem>React</ListItem>
						<ListItem>Material UI</ListItem>
						<ListItem>Data fetched from pokeapi.co</ListItem>
						<ListItem>Fuse</ListItem>
						<ListItem>TinyColor</ListItem>
						<ListItem>Axios</ListItem>
						<ListItem>React router dom</ListItem>
					</List>
				</Typography>
			</Box>
		</Container>
	);
};

export default About;
