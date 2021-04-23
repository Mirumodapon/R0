export const setRoom = (e) => (dispatch) => {
	dispatch({
		type: 'SET',
		payload: { roomNumber: parseInt(e, 10) }
	});
	return;
};
export const setMsgBuffLen = (e) => (dispatch) => {
	dispatch({
		type: 'SET',
		payload: { messageBufferLength: parseInt(e) }
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
		payload: { admin: [...admin, e] }
	});
	return;
};
export const addBan = (e) => (dispatch, getState) => {
	const ban = getState().config.ban;
	dispatch({
		type: 'SET',
		payload: { ban: [...ban, e] }
	});
	return;
};
