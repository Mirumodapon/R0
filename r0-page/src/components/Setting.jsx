import { useDispatch, useSelector } from 'react-redux';

import { addAdmin, addBan, setRoom } from '../store/actions/config';
import { setMsgBuffLen } from '../store/actions/config';
import '../assets/scss/setting.scss';

function Setting() {
	const dispatch = useDispatch();
	const admin = useSelector((s) => s.config.admin);
	const ban = useSelector((s) => s.config.ban);
	const handleRoomNumber = (e) => {
		dispatch(setRoom(e.target.value));
	};
	const handleMesgBuffLen = (e) => {
		dispatch(setMsgBuffLen(e.target.value));
	};
	const handleAdminAdd = (e) => {
		const name = prompt('Enter Name');
		if (name) dispatch(addAdmin(name));
	};
	const handleBanAdd = (e) => {
		const name = prompt('Enter Name');
		if (name) dispatch(addBan(name));
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
			<section>
				<h2>Admin</h2>
				<button onClick={handleAdminAdd}>Add</button>
				<button>Remove</button>
				<button>style</button>
				<div className="name_list">
					{admin.map((x, i) => (
						<span key={i}>{x}</span>
					))}
				</div>
			</section>
			<section>
				<h2>Ban</h2>
				<button onClick={handleBanAdd}>Add</button>
				<button>Remove</button>
				<div className="name_list">
					{ban.map((x, i) => (
						<span key={i}>{x}</span>
					))}
				</div>
			</section>
		</div>
	);
}

export default Setting;
