const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
// config dotenv
require('dotenv').config();
// init server value
const app = express();
server = http.createServer(app);
// config socket.io
const io = socketIO(server, {
	cors: {
		origin: '*'
	}
});
// use midleware
app.use(express.json());
app.use((req, res, next) => {
	req.io = io;
	next();
});
// use router
app.use('/', require('./router/index'));
// set port
const PORT = process.env.PORT || 4000;
// start listen
server.listen(PORT, () => console.log(`Server is started on port ${PORT}...`));
// handle socket.io event
io.on('connection', (socket) => {
	io.on('ping', (testingData) => {
		io.emit('ping', testingData);
	});
});
