export const setAdminStyle = (e) => (dispatch) => {
	dispatch({
		type: 'ADMIN',
		payload: e
	});
	return;
};
