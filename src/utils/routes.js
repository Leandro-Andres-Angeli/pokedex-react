import About from '../pages/About';

import Home from '../pages/Home';
import Pokedex from '../pages/Pokedex';
import PikachuIcon from '../components/styled_components/PikachuIcon';
import PokedexIcon from '../components/styled_components/PoxedexIcon';

import PersonIcon from '@mui/icons-material/Person';
const routes = [
	{
		path: '/',
		component: <Home />,
		link: 'home',
		icon: <PikachuIcon></PikachuIcon>,
	},
	{
		path: 'pokedex',
		component: <Pokedex />,
		link: 'pokedex',
		icon: <PokedexIcon></PokedexIcon>,
	},

	{
		path: 'about',
		component: <About />,
		link: 'about',
		icon: <PersonIcon></PersonIcon>,
	},
];
export default routes;
