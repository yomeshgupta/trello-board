import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Task = ({ id, title, index }) => {
	return (
		<Draggable draggableId={id} index={index}>
			{provided => (
				<div
					className="task"
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
				>
					{title}
				</div>
			)}
		</Draggable>
	);
};

export default Task;
