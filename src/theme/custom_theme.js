import {
	blue,
	blueGrey,
	brown,
	deepOrange,
	deepPurple,
	green,
	grey,
	lightBlue,
	lightGreen,
	orange,
	pink,
	purple,
	red,
} from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const custom_theme = createTheme({
	palette: {
		primary: {
			main: blue[500],
		},
		secondary: {
			main: '#e96590',
		},
	},

	grass: lightGreen[500],
	electric: '#ffe341',

	flying: blue[400],
	fire: red[500],
	poison: purple[700],
	bug: green[500],

	dragon: deepOrange[500],
	fairy: pink[100],
	ghost: deepPurple[500],
	ground: orange[700],
	normal: grey[500],
	phsychic: pink[500],
	steel: blueGrey[500],
	dark: blueGrey[700],
	fighting: deepOrange[500],
	ice: lightBlue[300],
	rock: brown[500],
	water: lightBlue[500],
});
