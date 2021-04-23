export const newMessage = (e) => (dispatch, getStore) => {
	const { config } = getStore();
	let { message } = getStore();
	// config.mark.forEach((element) => {
	// 	if (element.data.indexOf(e.user_name) !== -1) e.auth === element.type;
	// });
	// if (config.admin.indexOf(e.user_name) !== -1) e.auth === 'admin';
	if (message.length >= config.messageBufferLength) message.shift();
	message.push(e);
	dispatch({
		type: 'UPDATE',
		payload: message
	});
	return;
};
