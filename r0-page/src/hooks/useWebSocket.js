import { useEffect, useState } from 'react';

import webSocket from 'socket.io-client';

function useWebSocket(x) {
	const [url, setU] = useState(x);
	const [ws, setw] = useState(null);
	const setURL = (u) => {
		setU(u);
	};
	const addListener = (e, callback) => {
		if (ws) {
			ws.on(e, callback);
		}
	};
	const sendMessage = (e, data) => {
		if (ws) {
			ws.emit(e, data);
		}
	};
	useEffect(() => {
		setw(webSocket(url));
	}, [url]);
	return {
		ws,
		url,
		setURL,
		addListener,
		sendMessage
	};
}

export default useWebSocket;
