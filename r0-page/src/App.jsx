import { Fragment } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import useWebSocket from './hooks/useWebSocket';
import { newMessage } from './store/actions/message';

import Setting from './components/Setting';

function App() {
	const dispatch = useDispatch();
	// const ws = useWebSocket('http://localhost:4001');
	const ws = useWebSocket('https://sitc-r0.herokuapp.com');
	useEffect(() => {
		ws.addListener('onMessage', (e) => {
			dispatch(newMessage(e));
		});
	}, [ws, dispatch]);
	return (
		<Fragment>
			<Router>
				<Switch>
					<Route path="/setting" component={Setting}></Route>
				</Switch>
			</Router>
		</Fragment>
	);
}

export default App;
