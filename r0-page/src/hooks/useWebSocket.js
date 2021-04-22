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
	useEffect(() => {
		setw(webSocket(url));
	}, [url]);
	return {
		ws,
		url,
		setURL,
		addListener
	};
}

export default useWebSocket;
