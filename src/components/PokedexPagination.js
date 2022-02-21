import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './pokedex_pagination.css';
const PokedexPagination = (props) => {
	const { counter, setCounter } = props;

	// const getLastPagination = () => {
	// 	if (document.querySelector('ul').children[8].children[0].textContent) {
	// 		return document.querySelector('ul').children[8].children[0].textContent;
	// 	} else {
	// 		return null;
	// 	}
	// };
	let lastVal =
		document.querySelector('ul')?.children[8].children[0].textContent;

	const handleChange = (e) => {
		e.target.dataset.testid === 'LastPageIcon'
			? setCounter(parseInt(lastVal) * 12 - 12)
			: setCounter(12 * (parseInt(e.target.textContent) - 1));
		window.scroll({ top: 450, behavior: 'smooth' });
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
