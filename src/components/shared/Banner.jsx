import React from 'react';

const Banner = ({ title, onClose }) => {
	return (
		<header className="banner">
			<h3>{title}</h3>
			<div
				onClick={onClose}
				role="button"
				aria-label="Close Button"
				className="icon-close u-text-pointer"
				title="Close the Board Menu"
			>
				<svg viewBox="0 0 32 32" className="icon icon-clear" viewBox="0 0 32 32" aria-hidden="true">
					<path d="M7.004 23.087l7.08-7.081-7.07-7.071L8.929 7.02l7.067 7.069L23.084 7l1.912 1.913-7.089 7.093 7.075 7.077-1.912 1.913-7.074-7.073L8.917 25z" />
				</svg>
			</div>
		</header>
	);
};

export default Banner;
