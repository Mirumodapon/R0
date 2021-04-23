import { Fragment } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import useWebSocket from './hooks/useWebSocket';
import { newMessage } from './store/actions/message';

import Main from './components/Main';

function App() {
	const dispatch = useDispatch();
	const _config = useSelector((store) => store.config);
	// const ws = useWebSocket('http://localhost:4001');
	const ws = useWebSocket('https://sitc-r0.herokuapp.com');
	useEffect(() => {
		ws.addListener('onMessage', (e) => {
			dispatch(newMessage(e));
		});
	}, [ws, dispatch]);
	useEffect(() => {
		ws.sendMessage('setRoom', _config.roomNumber);
	}, [ws, _config.roomNumber]);
	return (
		<Fragment>
			<Main />
		</Fragment>
	);
}

export default App;
