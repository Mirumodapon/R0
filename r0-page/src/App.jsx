import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import useWebSocket from './hooks/useWebSocket';

import { newMessage } from './store/actions/message';

function App() {
	const dispatch = useDispatch();
	const ws = useWebSocket('http://localhost:4001');
	// const ws = useWebSocket('https://sitc-r0.herokuapp.com');
	useEffect(() => {
		ws.addListener('onMessage', (e) => {
			dispatch(newMessage(e));
			console.log(e);
		});
		ws.sendMessage('setRoom', 123);
	}, [ws, dispatch]);
	return <div>r0</div>;
}

export default App;
