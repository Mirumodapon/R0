export const config = (e) => (dispatch) => {
	dispatch({
		type: 'SETTING',
		payload: e
	});
	return;
};
export const reset = () => (dispatch) => {
	dispatch({
		type: 'SET',
		payload: {
			messageBufferLength: 10,
			roomNumber: 0,
			ban: [],
			mark: [],
			admin: [],
			msg_ban: []
		}
	});
	return;
};
export const addAdmin = (e) => (dispatch, getState) => {
	const admin = getState().config.admin;
	dispatch({
		type: 'SET',
		admin: [...admin, ...e]
	});
	return;
};
export const addBan = (e) => (dispatch, getState) => {
	const ban = getState().config.ban;
	dispatch({
		type: 'SET',
		ban: [...ban, ...e]
	});
	return;
};
export const addMark = (e) => (dispatch, getState) => {
	let mark = getState().config.mark;
	mark[e.type] = [...mark[e.type], ...e.data];
	dispatch({
		type: 'SET',
		mark: [...mark]
	});
	return;
};
