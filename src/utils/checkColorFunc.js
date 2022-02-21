import tinycolor from 'tinycolor2';
const tc = tinycolor;

const checkColor = (color) => {
	return tc(color).isDark();
};

export default checkColor;
