import React, { useState, useEffect } from 'react';

import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import FetchTypes from '../API/FetchTypes';
import {
	Typography,
	FormGroup,
	Checkbox,
	Container,
	Button,
	Input,
} from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Card from '@mui/material/Card';
import FormHelperText from '@mui/material/FormHelperText';
import CardContent from '@mui/material/CardContent';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import { useForm, Controller } from 'react-hook-form';
import MuiInput from '@mui/material/Input';
const AdvancedSearchForm = () => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors, isDirty, isValid },
	} = useForm();
	console.log('valid', isValid);
	const [value, setValue] = useState([0, 15]);
	const [types, setTypes] = useState();

	useEffect(() => {
		FetchTypes(`${process.env.REACT_APP_API_URL_TYPES}/type`, setTypes);
	}, []);

	const handleChange = (e) => {
		setValue(e.target.value);
	};
	// onSubmit={handleSubmit(onSubmit)
	const onSubmit = (data) => console.log(data);
	console.log(errors);
	return (
		<Container>
			<Card>
				<CardContent>
					<FormControl
						component="form"
						onSubmit={handleSubmit(onSubmit)}
						sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}
					>
						<Box p={5}>
							<TextField
								id="outlined-multiline-static"
								label="search by name"
								type="text"
								sx={{ width: '100%' }}
								{...register('name', {
									required: 'required field',
									minLength: { value: 4, message: 'at least 4 characters' },
								})}
								error={errors?.name?.message ? true : false}
								helperText={errors?.name?.message ? errors.name.message : null}
							/>
							{/* <FormHelperText>{errors?.name?.message}</FormHelperText> */}

							<FormLabel
								sx={{
									textTransform: 'uppercase',
									display: 'block',
									my: 5,
								}}
								id="slider-Label"
							>
								Id range
								<Controller
									name="id_Range"
									control={control}
									defaultValue={value}
									onChange={([, value]) => value}
									render={({}) => (
										<Slider
											max={898}
											min={1}
											onChange={handleChange}
											valueLabelDisplay="auto"
											value={value}
										/>
									)}
								/>
								<Typography variant="h5" color="primary">
									{' '}
									Range selected :<br />
								</Typography>
								<TextField value={value[0]} sx={{ width: '70px' }} />
								<TextField value={value[1]} sx={{ width: '70px', ml: 5 }} />
							</FormLabel>
						</Box>
						<Box sx={{ flex: '1 2 30%' }} py={3}>
							<FormGroup>
								<Divider component="span">
									<Chip label="Types" />
								</Divider>
								<FormControl
									component="CheckboxGroup"
									px={4}
									error={errors?.types?.message ? true : false}
								>
									<Box
										sx={{
											display: 'grid',
											mt: { md: 5 },
											gridTemplateColumns: {
												sm: 'repeat(3,1fr)',
												md: 'repeat(4,1fr)',
												xs: 'repeat(2,1fr)',
											},
										}}
									>
										{types
											? types.results.map((t) => {
													return (
														<FormControlLabel
															{...register('types', {
																required: 'required field',
															})}
															sx={{ textTransform: 'uppercase' }}
															value={t.name}
															control={<Checkbox />}
															label={t.name}
															labelPlacement="end"
														/>
													);
											  })
											: null}
									</Box>
									<FormHelperText component="span">
										{errors?.types?.message}
									</FormHelperText>
								</FormControl>
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
							type="submit"
							value="search"
							color="primary"
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
