const style = (state = {}, action) => {
	switch (action.type) {
		case 'ADMIN':
			return { ...state, admin: action.payload };
		case 'MARK':
			return { ...state, mark: action.payload };
		default:
			return state;
	}
};

export default style;
