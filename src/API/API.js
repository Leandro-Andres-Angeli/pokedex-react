import axios from 'axios';

const fetchData = (URI, setData) => {
	axios
		.get(URI)
		.then((res) => {
			setData(res.data.results);
		})
		.catch((err) => console.log(err));
};

export default fetchData;
