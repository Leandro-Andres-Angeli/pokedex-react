import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './pokedex_pagination.css';
import { scrollFunc } from '../utils/scrollFunc';
const PokedexPagination = (props) => {
	const { setCounter, setFade } = props;

	let lastVal =
		document.querySelector('ul')?.children[8]?.children[0].textContent;

	const handleChange = (e) => {
		e.target.dataset.testid === 'LastPageIcon' && lastVal !== undefined
			? setCounter(parseInt(lastVal) * 12 - 12)
			: setCounter(12 * (parseInt(e.target.textContent) - 1));
		setFade(true);
		scrollFunc(300, 600);
	};

	return (
		<Stack spacing={2} pt={5} pb={2}>
			<Pagination
				count={75}
				showFirstButton
				showLastButton
				onChange={(e) => handleChange(e)}
			/>
		</Stack>
	);
};

export default PokedexPagination;
