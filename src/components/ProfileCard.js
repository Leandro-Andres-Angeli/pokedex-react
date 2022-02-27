import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FetchPokemon from '../API/FetchPokemon';
import PokeCardHeader from '../components/PokeCardHeader';
import PokeCardCardMedia from './PokeCardCardMedia';
import Typography from '@mui/material/Typography';

import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import PokeCardChips from '../components/PokeCardChips';
import { scrollFunc } from '../utils/scrollFunc';
import './profile-stylesheet.css';
const ProfileCard = (props) => {
	const { id } = props;
	const [fetchRes, setFetchRes] = useState([]);
	useEffect(() => {
		FetchPokemon(`${process.env.REACT_APP_API_URL}/${id}`, setFetchRes);
		window.scrollTo(0, 0);
	}, [id]);
	console.log(fetchRes);
	return (
		<Card
			sx={{
				width: { md: '80%', sm: '100%' },
				display: { md: 'grid' },
				gridTemplateColumns: { md: '1fr 1fr ' },
			}}
		>
			<Box>
				{fetchRes?.sprites ? (
					<PokeCardHeader source={fetchRes} p={0}></PokeCardHeader>
				) : null}
				{fetchRes?.sprites ? (
					<PokeCardCardMedia
						className="profile-style"
						mediaSource={fetchRes}
						profile={true}
					></PokeCardCardMedia>
				) : null}
			</Box>
			<CardContent
				sx={{
					backgroundColor: '#d3d3d336',
					flexGrow: { md: 0.7, xs: 1 },
					display: { md: 'flex' },
					flexDirection: { md: 'column' },
				}}
			>
				<Typography
					variant="h3"
					color="primary"
					sx={{
						textTransform: 'uppercase',
						fontSize: { xs: 20 },
					}}
				>
					{fetchRes.name}
				</Typography>
				<List>
					<Typography sx={{ textTransform: 'uppercase' }} color="secondary">
						Abilities
					</Typography>
					<Divider></Divider>
					{fetchRes.abilities
						? fetchRes.abilities.map((e) => {
								return (
									<>
										<ListItem>{e.ability.name}</ListItem>
										<Divider></Divider>
									</>
								);
						  })
						: null}
				</List>
				<Stack
					direction="row"
					spacing={2}
					sx={{ marginTop: { md: 'auto' } }}
					divider={<Divider orientation="vertical" flexItem />}
				>
					<Box
						sx={{
							display: ' flex',
							flexDirection: 'unset',
							gap: '1rem',
							alignItems: 'baseline',
						}}
					>
						<Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>
							<Typography color="primary">Height:</Typography>
						</Typography>
						<Typography paragraph> {fetchRes?.height}</Typography>

						<Typography sx={{ textTransform: 'uppercase' }} color="primary">
							weight:
						</Typography>
						<Typography paragraph> {fetchRes?.weight}</Typography>
					</Box>
				</Stack>
				<Box>
					<Typography>Type</Typography>
					<Stack direction="row" spacing={1}>
						{fetchRes.types
							? fetchRes.types.map((e) => {
									return <PokeCardChips type={e.type.name}></PokeCardChips>;
							  })
							: null}
					</Stack>
				</Box>
			</CardContent>
		</Card>
	);
};

export default ProfileCard;
