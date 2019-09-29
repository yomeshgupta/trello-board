import React from 'react';

const Header = ({ query, setQuery }) => {
	return (
		<div className="board-header">
			<div className="left">
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
		</div>
	);
};

export default Header;
