import React, { useState, useEffect } from 'react';

import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FetchTypes from '../API/FetchTypes';
import {
	Typography,
	FormGroup,
	Checkbox,
	Container,
	Button,
} from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
const AdvancedSearchForm = () => {
	const [value, setValue] = useState([1, 898]);
	const [types, setTypes] = useState();
	console.log(value);
	const handleChange = (event, newValue) => {
		setValue(newValue);
		console.log(event.target);
	};
	console.log(`${process.env.REACT_APP_API_URL_TYPES}/type`);
	useEffect(() => {
		FetchTypes(`${process.env.REACT_APP_API_URL_TYPES}/type`, setTypes);
	}, []);
	console.log(types);
	return (
		<Container>
			<Card>
				<CardContent>
					<FormControl
						component="form"
						sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}
					>
						<Box p={5}>
							<TextField
								id="outlined-multiline-static"
								label="search by name"
								type="text"
								sx={{ width: '100%' }}
							/>

							<FormLabel
								sx={{
									textTransform: 'uppercase',
									display: 'block',
									my: 5,
								}}
								id="slider-Label"
							>
								Id range
								<Slider
									label="Id range"
									value={value}
									onChange={handleChange}
									aria-labelledby="slider-Label"
									min={1}
									max={898}
								/>
							</FormLabel>
						</Box>
						<Box sx={{ flex: '1 2 30%' }} py={3}>
							<FormGroup>
								<Divider component="span">
									<Chip label="Types" />
								</Divider>
								<Box
									mt={5}
									sx={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}
									px={4}
								>
									{types
										? types.results.map((t) => {
												return (
													<FormControlLabel
														value={t.name}
														control={<Checkbox />}
														label={t.name}
														labelPlacement="end"
														onChange={(e) => {
															console.log(e.target.value);
														}}
													/>
												);
										  })
										: null}
								</Box>
							</FormGroup>
						</Box>
						<Button
							variant="contained"
							color="secondary"
							sx={{
								width: 'fit-content',
								px: '2rem',
								py: '1rem',
								alignSelf: 'end',
							}}
							startIcon={<SearchIcon />}
						>
							Search
						</Button>
					</FormControl>
				</CardContent>
			</Card>
		</Container>
	);
};

export default AdvancedSearchForm;
