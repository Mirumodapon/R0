export const newMessage = (e) => (dispatch, getStore) => {
	const { config } = getStore();
	let { message } = getStore();
	if (config.admin.indexOf(e.user_name) !== -1) e.auth = 'admin';
	if (config.ban.indexOf(e.user_name) !== -1) return;
	if (message.length >= config.messageBufferLength) message.shift();
	message.push(e);
	dispatch({
		type: 'UPDATE',
		payload: message
	});
	return;
};
