import React, { useState, Fragment } from 'react';
import Proptypes from 'prop-types';

import Banner from '../shared/Banner';
import Invitation from './Invitation';
import { BACKGROUND_COLORS, STATE_ACTIONS } from '../../constants/index';

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

const Menu = ({ toggleMenu, users, background, setView }) => {
	return (
		<Fragment>
			<Banner title="Menu" onClose={toggleMenu} />
			<div className="board-menu-content">
				<Users users={users} />
				<UserInvitation />
				<div className="navigation-item u-text-pointer" onClick={() => setView(2)}>
					<div
						style={{
							backgroundColor: background
						}}
					></div>
					Change Background
				</div>
				<div className="navigation-item u-text-pointer" onClick={() => setView(3)}>
					<svg viewBox="0 0 32 32" className="icon icon-search" viewBox="0 0 32 32" aria-hidden="true">
						<path d="M27 24.57l-5.647-5.648a8.895 8.895 0 0 0 1.522-4.984C22.875 9.01 18.867 5 13.938 5 9.01 5 5 9.01 5 13.938c0 4.929 4.01 8.938 8.938 8.938a8.887 8.887 0 0 0 4.984-1.522L24.568 27 27 24.57zm-13.062-4.445a6.194 6.194 0 0 1-6.188-6.188 6.195 6.195 0 0 1 6.188-6.188 6.195 6.195 0 0 1 6.188 6.188 6.195 6.195 0 0 1-6.188 6.188z" />
					</svg>
					Filter Cards
				</div>
			</div>
		</Fragment>
	);
};

const Background = ({ dispatch, setView }) => {
	return (
		<Fragment>
			<Banner title="Change Background" onClose={() => setView(1)} />
			<ul className="bg-colors">
				{BACKGROUND_COLORS.map(color => (
					<li
						key={color}
						style={{ backgroundColor: color }}
						className="bg-color-tile u-text-pointer"
						onClick={() =>
							dispatch({
								type: STATE_ACTIONS.UPDATE_BACKGROUND,
								data: color
							})
						}
					></li>
				))}
			</ul>
		</Fragment>
	);
};

const Filter = ({ query, setQuery, setView }) => {
	return (
		<Fragment>
			<Banner title="Filter Cards" onClose={() => setView(1)} />
			<form className="filter-cards-form">
				<input
					name="search"
					value={query}
					placeholder={'What needs to be filtered?'}
					onChange={e => setQuery(e.target.value)}
					className="search"
				/>
			</form>
		</Fragment>
	);
};

const BoardMenu = ({ users, background, query, dispatch, setQuery, toggleMenu }) => {
	const [view, setView] = useState(1);

	function renderView() {
		switch (view) {
			default:
			case 1: {
				return <Menu toggleMenu={toggleMenu} users={users} setView={setView} background={background} />;
			}
			case 2: {
				return <Background setView={setView} dispatch={dispatch} />;
			}
			case 3: {
				return <Filter setView={setView} query={query} setQuery={setQuery} />;
			}
		}
	}

	return (
		<div className="board-menu" role="region">
			{renderView()}
		</div>
	);
};

BoardMenu.propTypes = {
	background: Proptypes.string.isRequired,
	tasks: Proptypes.object.isRequired,
	lists: Proptypes.object.isRequired,
	query: Proptypes.string,
	users: Proptypes.array.isRequired,
	setQuery: Proptypes.func,
	toggleMenu: Proptypes.func.isRequired,
	dispatch: Proptypes.func.isRequired
};

BoardMenu.defaultProps = {
	query: '',
	setQuery: () => {}
};

export default BoardMenu;
