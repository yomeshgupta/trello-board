import React from 'react';

const Menu = ({ title, toggleBookmark }) => {
	return (
		<div className="board-menu" role="region">
			<div className="controls" role="navigation">
				<h3 role="heading" className="u-btn-transparent" id="menu-heading">
					{title}
				</h3>
				<div
					className="u-btn-transparent u-margin-r2 u-text-pointer"
					id="bookmark-icon"
					role="button"
					onClick={toggleBookmark}
				>
					<svg viewBox="0 0 32 32" className="icon icon-star" viewBox="0 0 32 32" aria-hidden="true">
						<path d="M16 4.588l2.833 8.719H28l-7.416 5.387 2.832 8.719L16 22.023l-7.417 5.389 2.833-8.719L4 13.307h9.167L16 4.588z" />
					</svg>
				</div>
				<div className="u-btn-transparent u-text-pointer" role="button">
					Tech
				</div>
				<div className="u-btn-transparent u-text-pointer" role="button">
					Private
				</div>
				<div className="u-btn-transparent u-text-pointer" role="button">
					Invite
				</div>
			</div>
		</div>
	);
};

export default Menu;
