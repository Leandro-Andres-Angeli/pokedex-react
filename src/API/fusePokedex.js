import Fuse from 'fuse.js';
const fuseSearch = (data, ops, setRes, query) => {
	const fuse = new Fuse(data, ops);
	const result = fuse.search(query);
	let resArray = [];
	resArray = result.map((e) => e.item);
	setRes(resArray);
};
export { fuseSearch };
