const config = (store = {}, action) => {
	switch (action.type) {
		case 'SET':
			return {
				...store,
				...action.payload
			};
		default:
			return store;
	}
};

export default config;
