const axios = require('axios');

module.exports = ({ chat_id, msg }) => {
	axios.post(
		`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
		{
			chat_id,
			text: msg
		}
	);
};
