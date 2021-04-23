import { useDispatch } from 'react-redux';

import { setRoom } from '../store/actions/config';
import { setMsgBuffLen } from '../store/actions/config';
import '../assets/scss/setting.scss';

function Setting() {
	const dispatch = useDispatch();
	const handleRoomNumber = (e) => {
		dispatch(setRoom(e.target.value));
	};
	const handleMesgBuffLen = (e) => {
		dispatch(setMsgBuffLen(e.target.value));
	};
	return (
		<div id="setting">
			<h1>R0 Setting</h1>
			<section>
				<h2>Basic</h2>
				<table>
					<tbody>
						<tr>
							<td>Room Number: </td>
							<td>
								<input
									onBlur={handleRoomNumber}
									type="number"
								/>
							</td>
						</tr>
						<tr>
							<td>Message Buffer Length: </td>
							<td>
								<input
									onBlur={handleMesgBuffLen}
									type="number"
								/>
							</td>
						</tr>
					</tbody>
				</table>
			</section>

			<button onClick={(e) => (window.location.hash = '')}>back</button>
		</div>
	);
}

export default Setting;
