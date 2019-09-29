import React from 'react';
import Proptypes from 'prop-types';

const Header = ({ query, setQuery }) => {
	return (
		<div className="board-header" role="header">
			<form className="filter-cards-form">
				<input
					name="search"
					value={query}
					placeholder={'What needs to be filtered?'}
					onChange={e => setQuery(e.target.value)}
					className="search"
				/>
			</form>
		</div>
	);
};

Header.propTypes = {
	query: Proptypes.string,
	setQuery: Proptypes.func
};

Header.defaultProps = {
	query: '',
	setQuery: () => {},
	onCancel: () => {}
};

export default Header;
