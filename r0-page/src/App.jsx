import useWebSocket from './hooks/useWebSocket';

function App() {
	const ws = useWebSocket('http://localhost:4000');
	return <div>r0</div>;
}

export default App;
