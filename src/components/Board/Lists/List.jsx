import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import Tasks from './Tasks/index';
import Composer from '../../shared/Composer';

class List extends Component {
	saveHandler = data => {
		const { dispatch, list } = this.props;
		const updatedTasksIds = [...list.taskIds];

		data.id = `task-${data.id}`;
		updatedTasksIds.push(data.id);

		dispatch({
			type: 'ADD_TASK',
			data
		});
		return dispatch({
			type: 'UPDATE_LIST',
			data: {
				id: list.id,
				toUpdate: {
					taskIds: updatedTasksIds
				}
			}
		});
	};

	render() {
		const { taskMap, list, index } = this.props;
		const { id, title, taskIds } = list;
		const tasks = taskIds.map(taskId => taskMap[taskId]);

		return (
			<Draggable draggableId={id} index={index}>
				{provided => {
					return (
						<div className="list" {...provided.draggableProps} ref={provided.innerRef} role="list">
							<h3 className="list-header" {...provided.dragHandleProps}>
								{title}
							</h3>
							<Tasks tasks={tasks} id={id} />
							<Composer title="Add Card" onSave={this.saveHandler} />
						</div>
					);
				}}
			</Draggable>
		);
	}
}

export default List;
