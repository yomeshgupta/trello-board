import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import Tasks from './Tasks/index';

class List extends Component {
	render() {
		const { taskMap, list, index } = this.props;
		const { id, title, taskIds } = list;
		const tasks = taskIds.map(taskId => taskMap[taskId]);

		return (
			<Draggable draggableId={id} index={index}>
				{provided => {
					return (
						<div className="list" {...provided.draggableProps} ref={provided.innerRef}>
							<h3 className="list-header" {...provided.dragHandleProps}>
								{title}
							</h3>
							<Tasks tasks={tasks} id={id} />
							<div className="composer">+ Add another card</div>
						</div>
					);
				}}
			</Draggable>
		);
	}
}

export default List;
