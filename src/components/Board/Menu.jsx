import React, { useState, Fragment } from 'react';
import Invitation from './Invitation';

const Controls = ({ title, isBookmarked, toggleBookmark }) => {
	const [showInvite, setInvite] = useState(false);
	const [styles, setStyles] = useState({});

	const toggleInvite = e => {
		const { target } = e;
		const fromMenuBtn = target.getAttribute('data-key') === 'menu-btn';

		if (!fromMenuBtn) {
			setStyles({});
		} else {
			const coordinates = target.getBoundingClientRect();
			const styles = {
				position: 'absolute',
				maxWidth: '300px',
				padding: '10px',
				zIndex: 999,
				backgroundColor: 'white',
				left: coordinates.left,
				right: coordinates.right,
				top: coordinates.top + coordinates.height + 10
			};
			setStyles(styles);
		}

		setInvite(state => !state);
	};

	return (
		<Fragment>
			<div className="controls" role="navigation">
				<h3 role="heading" className="u-btn-transparent" id="menu-heading" title={title}>
					{title}
				</h3>
				<div
					className={`u-btn-transparent u-margin-r2 u-text-pointer ${isBookmarked ? 'u-text-yellow' : ''}`}
					id="bookmark-icon"
					role="button"
					onClick={toggleBookmark}
					title={`${isBookmarked ? 'Unbookmark' : 'Bookmark'} board`}
				>
					<svg viewBox="0 0 32 32" className="icon icon-star" viewBox="0 0 32 32" aria-hidden="true">
						<path d="M16 4.588l2.833 8.719H28l-7.416 5.387 2.832 8.719L16 22.023l-7.417 5.389 2.833-8.719L4 13.307h9.167L16 4.588z" />
					</svg>
				</div>
				<div className="u-btn-transparent u-text-pointer" role="button" title="Team Info">
					Tech
				</div>
				<div className="u-btn-transparent u-text-pointer" role="button" title="Permissions Info">
					Private
				</div>
				<div
					className="u-btn-transparent u-text-pointer"
					role="button"
					title="Invite to Board"
					onClick={toggleInvite}
					data-key="menu-btn"
				>
					Invite
				</div>
			</div>
			{showInvite ? <Invitation styles={styles} onClose={toggleInvite} /> : null}
		</Fragment>
	);
};

const Menu = ({ title, isBookmarked, toggleBookmark, toggleMenu }) => {
	return (
		<div className="menu" role="region">
			<Controls title={title} isBookmarked={isBookmarked} toggleBookmark={toggleBookmark} />
			<div className="u-btn-transparent u-text-pointer" role="button" id="menu-btn" onClick={toggleMenu}>
				<svg viewBox="0 0 32 32" className="icon icon-more" viewBox="0 0 32 32" aria-hidden="true">
					<path d="M10.429 16a2.715 2.715 0 1 1-5.43 0 2.715 2.715 0 0 1 5.43 0zM16 13.286a2.715 2.715 0 1 0 .001 5.429A2.715 2.715 0 0 0 16 13.286zm8.285 0a2.714 2.714 0 1 0 0 5.428 2.714 2.714 0 0 0 0-5.428z" />
				</svg>
				<span>Show Menu</span>
			</div>
		</div>
	);
};

export default Menu;
