const express = require('express');
const router = express.Router();

router.post('message', [], (req, res) => {
	req.io.on('onMessage', req.body);
	res.status(204);
});

module.export = router;
