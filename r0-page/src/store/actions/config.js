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
};
export const addAdmin = (e) => (dispatch, getState) => {
	const admin = getState().config.admin;
	dispatch({
		type: 'SET',
		admin: [...admin, ...e]
	});
};
export const addBan = (e) => (dispatch, getState) => {
	const ban = getState().config.ban;
	dispatch({
		type: 'SET',
		ban: [...ban, ...e]
	});
};
export const addMark = (e) => (dispatch, getState) => {
	const mark = getState().config.mark;
	dispatch({
		type: 'SET',
		mark: [...mark, ...e]
	});
};
