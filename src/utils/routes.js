import About from '../pages/About';
import AdvancedSearch from '../pages/AdvancedSearch';

import Pokedex from '../pages/Pokedex';

const routes = [
	{
		path: 'pokedex',
		component: <Pokedex />,
	},
	{
		path: 'advanced_search',
		component: <AdvancedSearch />,
	},
	{
		path: 'about',
		component: <About />,
	},
];
export default routes;
