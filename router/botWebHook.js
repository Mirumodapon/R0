const express = require('express');
const router = express.Router();

router.post('/message', [], (req, res) => {
	const { message } = req.body;
	try {
		if (message.text === '/info') {
			const msg = `
			Date: ${messgae.date}\n
			Chat: ${messgae.chat.id}\n
			From: ${messgae.from.id}
		`;
			require('../util/botMethods/sendMessage')({
				msg,
				chat_id: message.chat_id
			});
			return res.status(204).send();
		}

		const data = {
			date: message.date,
			name: message.from.first_name,
			user_name: message.from.username,
			text: message.text
		};

		req.io.to(message.chat.chat_id).emit('onMessage', data);
		res.status(204).send();
	} catch (erro) {
		console.error(erro.message);
		res.status(501).send('Serve error');
	}
});

module.exports = router;
