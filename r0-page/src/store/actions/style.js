export const setAdminStyle = (e) => (dispatch) => {
	dispatch({
		type: 'ADMIN',
		payload: e
	});
	return;
};
export const setMarkStyle = (e) => (dispatch, getStore) => {
	const style = {};
	style[e.type] = e.style;
	dispatch({
		type: 'MARK',
		payload: { ...getStore().style.mark, ...style }
	});
	return;
};
