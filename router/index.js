const express = require('express');
const router = express.Router();

router.get('/testing', (req, res) => {
	const testingData = {
		name: req.query.name || 'TEST',
		msg: req.query.msg || 'MESSAGE',
		data: new Date()
	};
	req.io.emit('onMessage', testingData);
	res.send(
		`The testing message is sent to the client.\nname:\t${testingData.name}\nmsg:\t${testingData.msg}\ndata:\t${testingData.data}`
	);
});

router.use('/botWebHook', require('./botWebHook'));

module.exports = router;
