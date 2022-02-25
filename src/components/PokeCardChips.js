import React from 'react';
import Chip from '@mui/material/Chip';
import checkColor from '../utils/checkColorFunc';
import { useTheme } from '@mui/material/styles';
const PokeCardChips = (props) => {
	const { type } = props;
	const theme = useTheme();
	return (
		<Chip
			label={type}
			sx={{
				bgcolor: theme.palette[type],
				fontWeight: 'bold',
				textTransform: 'uppercase',
				color: checkColor(theme.palette[type]) ? 'white' : 'black',
			}}
			variant="filled"
		></Chip>
	);
};

export default PokeCardChips;
