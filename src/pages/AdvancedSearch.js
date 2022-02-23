import { Container } from '@mui/material';
import React from 'react';
import AdvancedSearchForm from '../components/AdvancedSearchForm';
import PokedexHeader from '../components/PokedexHeader';

const AdvancedSearch = () => {
	return (
		<Container sx={{ backgroundColor: 'white', py: 3 }}>
			<PokedexHeader title="Advanced Search"></PokedexHeader>
			<AdvancedSearchForm></AdvancedSearchForm>
		</Container>
	);
};

export default AdvancedSearch;
