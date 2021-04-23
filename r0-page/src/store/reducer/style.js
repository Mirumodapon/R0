const style = (store = {}, action) => {
	switch (action.type) {
		case 'ADMIN':
			return { ...store, admin: action.payload };
		case 'MARK':
			return { ...store, mark: action.payload };
		default:
			return store;
	}
};

export default style;
