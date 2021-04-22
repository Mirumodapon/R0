const express = require('express');
const router = express.Router();

router.post('/message', [], (req, res) => {
	req.io.emit('onMessage', req.body);
	res.status(204).send();
});

module.exports = router;
