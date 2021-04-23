import { useEffect } from 'react';
import { Provider } from 'react-redux';

import useWebSocket from './hooks/useWebSocket';
import store from './store/index';

function App() {
	const ws = useWebSocket('http://sitc-r0.herokuapp.com');
	useEffect(() => {
		ws.addListener('onMessage', (e) => console.log(e));
	}, [ws]);
	return <Provider store={store}></Provider>;
}

export default App;
