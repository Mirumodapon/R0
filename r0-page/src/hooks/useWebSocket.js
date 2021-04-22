import { useEffect, useState } from 'react';

import webSocket from 'socket.io-client';

function useWebSocket(x) {
	const [url, setU] = useState(x);
	const [ws, setw] = useState(null);
	const setURL = (u) => {
		setU(u);
	};
	const connectWS = () => {
		setw(webSocket(url));
	};
	const addListener = (e, callback) => {
		if (ws) {
			ws.on(e, callback);
		}
	};
	useEffect(() => {
		connectWS();
	}, [url]);
	useEffect(() => {
		eventListener();
	}, [ws]);
	return {
		ws,
		url,
		connectWS,
		setURL,
		addListener
	};
}

export default useWebSocket;
