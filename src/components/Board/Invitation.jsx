import React, { useState } from 'react';

import Banner from '../shared/Banner';
import { INVITATION_DEFAULT_MESSAGE } from '../../constants/index';

const Invitation = ({ onClose }) => {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState(INVITATION_DEFAULT_MESSAGE);

	function handleSubmit(e) {
		e.preventDefault();
		const isInvalid = !email || !message || (email && !email.trim().length) || (message && !message.trim().length);

		if (isInvalid) return alert('Please enter valid content');

		alert(`Invitation sent to ${email}`);
		setEmail('');
		return setMessage(INVITATION_DEFAULT_MESSAGE);
	}

	function handleChange(e) {
		const { target } = e;
		const { value } = target;
		const key = target.getAttribute('data-key');

		return key === 'email' ? setEmail(value) : setMessage(value);
	}

	return (
		<div className="user-invitation">
			<Banner title="Invite To Board" onClose={onClose} />
			<form onSubmit={handleSubmit} style={{ margin: '20px 0px' }}>
				<input
					name="email"
					type="email"
					className="email"
					placeholder="Enter email address"
					value={email}
					onChange={handleChange}
					data-key="email"
				/>
				<textarea
					value={message}
					className="message"
					placeholder={'Enter content...'}
					onChange={handleChange}
					aria-label="invitation-message"
					data-key="message"
				/>
				<input
					type="submit"
					className={`u-btn-primary u-text-pointer ${email ? '' : 'u-btn-disabled'} `}
					disabled={email ? false : true}
					placeholder="Send Invitation"
				/>
			</form>
		</div>
	);
};

export default Invitation;
