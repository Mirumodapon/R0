const message = (store = {}, action) => {
	switch (action.type) {
		case 'UPDATE':
			return action.payload;
		default:
			return store;
	}
};

export default message;
