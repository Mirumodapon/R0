import { useEffect } from 'react';
import useWebSocket from './hooks/useWebSocket';

function App() {
	const ws = useWebSocket('http://localhost:4000');
	useEffect(() => {
		ws.addListener('onMessage', (e) => console.log(e));
	}, [ws]);
	return <div>r0</div>;
}

export default App;
