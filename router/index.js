const express = require('express');
const router = express.Router();

router.get('/testing', (req, res) => {
	const testingData = {
		name: req.query.name || 'TEST',
		msg: req.query.msg || 'MESSAGE',
		date: new Date()
	};
	req.io.emit('onMessage', testingData);
	res.send(
		`The testing message is sent to the client.\nname:\t${testingData.name}\nmsg:\t${testingData.msg}\ndate:\t${testingData.date}`
	);
});

router.use('/botWebHook', require('./botWebHook'));

module.exports = router;
