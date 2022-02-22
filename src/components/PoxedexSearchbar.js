import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import SettingsBackupRestoreRoundedIcon from '@mui/icons-material/SettingsBackupRestoreRounded';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import { IconButton, TextField, Typography, FormControl } from '@mui/material';
import Button from '@mui/material/Button';
import { validateText, validateNum } from '../utils/validation';
const PoxedexSearchbar = (props) => {
	let { setSearch, setQuery, search } = props;

	let [input, setinput] = useState(' ');
	console.log(validateText(input));
	console.log(validateNum(input));
	const validate = validateText(input) || validateNum(input);
	console.log(validate);
	return (
		<Container
			component="section"
			className="poxedex-list"
			sx={{
				backgroundColor: ' #ddf2ff',
				width: '100%',
				p: 5,
				display: 'flex',
				m: 0,
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					flexGrow: 1,
				}}
			>
				<FormControl sx={{ flexDirection: 'row' }}>
					<TextField
						id="outlined-basic"
						label="Search by name or id"
						variant="outlined"
						helperText="text larger then 4 character Id number between 1 and 898"
						value={input}
						sx={{
							flexGrow: 1,
							'& .MuiFormHelperText-root': {
								display: validate ? 'none' : 'block',
							},
						}}
						onChange={(e) => {
							setinput(e.target.value);
						}}
					/>
					<IconButton
						type="submit"
						sx={{
							p: '15px',
							fontSize: ' 2rem',
							marginLeft: ' 0.5rem',
						}}
						aria-label="search"
						onClick={(e) => {
							e.preventDefault();
							setSearch(!search);
							setQuery(input);
							window.scroll({ bottom: 100, behavior: 'smooth' });
						}}
					>
						<SearchIcon />
					</IconButton>
					<Button
						variant="contained"
						startIcon={<SettingsBackupRestoreRoundedIcon />}
						color="secondary"
						size="small"
						onClick={() => {
							setSearch(null);
							setinput('');
							window.scroll({ bottom: 100, behavior: 'smooth' });
						}}
					>
						back to pokedex
					</Button>
				</FormControl>

				<Typography sx={{ my: 4 }}>
					Use the Advanced Search to explore Pokemon by type ability weakness
					and more!
				</Typography>

				<Paper sx={{ p: 3, backgroundColor: '#008a5f', color: 'white' }}>
					<Typography variant="h3">
						Search for a Pokémon by name or using its National Pokédex number.
					</Typography>
				</Paper>
			</Box>
		</Container>
	);
};

export default PoxedexSearchbar;
