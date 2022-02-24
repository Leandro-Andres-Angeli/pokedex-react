const scrollFunc = (timer, position) => {
	setTimeout(() => {
		window.scroll({ top: position, behavior: 'smooth' });
	}, timer);
};
export { scrollFunc };
