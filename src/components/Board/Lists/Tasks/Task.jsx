import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import Composer from '../../../shared/Composer';
import { STATE_ACTIONS } from '../../../../constants';

const Task = ({ id, title, index, deleteTask, dispatch }) => {
	const [edit, setEdit] = useState(false);
	const toggleEdit = () => setEdit(state => !state);
	const handleDelete = () => {
		if (window.confirm('Are you sure you want to delete this task?')) {
			return deleteTask(id);
		}
	};
	const handleSave = ({ title }) => {
		dispatch({
			type: STATE_ACTIONS.UPDATE_TASK,
			data: {
				id: id,
				toUpdate: {
					title
				}
			}
		});
		return toggleEdit();
	};

	if (edit)
		return (
			<Composer defaultValue={title} title={'Save'} onCancel={toggleEdit} onSave={handleSave} defaultFormValue />
		);

	return (
		<Draggable draggableId={id} index={index}>
			{provided => (
				<div
					className="task card"
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
				>
					{title}
					<svg
						version="1.1"
						id="Capa_1"
						x="0px"
						y="0px"
						width="528.899px"
						height="528.899px"
						viewBox="0 0 528.899 528.899"
						title="Edit Card"
						className="edit-icon control-icon"
						onClick={toggleEdit}
					>
						<g>
							<path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981   c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611   C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069   L27.473,390.597L0.3,512.69z" />
						</g>
						&nbsp;
					</svg>
					<svg
						viewBox="0 0 32 32"
						className="control-icon icon icon-clear"
						viewBox="0 0 32 32"
						aria-hidden="true"
						title="Delete Task"
						onClick={handleDelete}
					>
						<path d="M7.004 23.087l7.08-7.081-7.07-7.071L8.929 7.02l7.067 7.069L23.084 7l1.912 1.913-7.089 7.093 7.075 7.077-1.912 1.913-7.074-7.073L8.917 25z" />
					</svg>
				</div>
			)}
		</Draggable>
	);
};

export default Task;
