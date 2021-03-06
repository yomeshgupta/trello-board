import React, { useState } from 'react';
import Proptypes from 'prop-types';

const Composer = ({ classNames, onSave, title, defaultValue, defaultFormValue, onCancel }) => {
	const [input, setInput] = useState(defaultValue);
	const [showForm, toggleForm] = useState(defaultFormValue);

	const toggleHandler = () => {
		onCancel();
		toggleForm(state => !state);
	};
	const changeHandler = e => setInput(e.target.value);
	const saveHandler = e => {
		e.preventDefault();
		if (!input || (input && !input.trim().length)) return alert('Please enter valid content.');

		const id = +new Date();
		const content = {
			id,
			title: input,
			description: ''
		};
		onSave(content);
		return setInput('');
	};

	if (!showForm) {
		return (
			<div className={`composer composer-add ${classNames} u-text-pointer`} role="button" onClick={toggleHandler}>
				+ {title}
			</div>
		);
	}
	return (
		<form className={`composer composer-form ${classNames}`} onSubmit={saveHandler}>
			<div className="card" role="region">
				<textarea
					className="composer-textarea"
					placeholder={'Enter content...'}
					onChange={changeHandler}
					aria-label={`${title} - input`}
					value={input}
				/>
			</div>
			<div className="controls" role="region">
				<input type="submit" value={title} aria-label={title} className="u-btn-primary" />
				<span
					onClick={toggleHandler}
					role="button"
					aria-label="Close Button"
					className="icon-close u-text-pointer"
				>
					<svg viewBox="0 0 32 32" className="icon icon-clear" viewBox="0 0 32 32" aria-hidden="true">
						<path d="M7.004 23.087l7.08-7.081-7.07-7.071L8.929 7.02l7.067 7.069L23.084 7l1.912 1.913-7.089 7.093 7.075 7.077-1.912 1.913-7.074-7.073L8.917 25z" />
					</svg>
				</span>
			</div>
		</form>
	);
};

Composer.propTypes = {
	classNames: Proptypes.string,
	onSave: Proptypes.func,
	onCancel: Proptypes.func,
	defaultFormValue: Proptypes.bool,
	defaultValue: Proptypes.string,
	title: Proptypes.string
};

Composer.defaultProps = {
	classNames: '',
	title: 'Add Card',
	onSave: () => {},
	onCancel: () => {},
	defaultFormValue: false,
	defaultValue: ''
};

export default Composer;
