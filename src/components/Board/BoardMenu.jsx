import React, { useState } from 'react';

import Banner from '../shared/Banner';
import Invitation from './Invitation';

const Users = ({ users = [] }) => {
	if (!users || !users.length) return null;

	return (
		<ul className="board-users" role="list">
			{users.map(user => (
				<li key={user.id} title={user.name} className="u-text-pointer">
					{user.name.slice(0, 1).toUpperCase()}
				</li>
			))}
		</ul>
	);
};

const UserInvitation = () => {
	const [show, toggle] = useState(false);

	const clickHandler = () => toggle(state => !state);

	return (
		<div className="board-menu-user-inviation">
			{show ? (
				<Invitation onClose={clickHandler} />
			) : (
				<div onClick={clickHandler} className="board-invite-btn u-text-pointer">
					<svg viewBox="0 0 32 32" className="icon icon-person" viewBox="0 0 32 32" aria-hidden="true">
						<path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z" />
					</svg>
					Invite Users...
				</div>
			)}
		</div>
	);
};

const BoardMenu = ({ toggleMenu, users }) => {
	return (
		<div className="board-menu">
			<Banner title="Menu" onClose={toggleMenu} />
			<div className="board-menu-content">
				<Users users={users} />
				<UserInvitation />
			</div>
		</div>
	);
};

export default BoardMenu;
