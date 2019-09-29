import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import Tasks from './Tasks/index';
import Composer from '../../shared/Composer';
import { STATE_ACTIONS } from '../../../constants/index';

class List extends Component {
	saveHandler = data => {
		const { dispatch, list } = this.props;
		const updatedTasksIds = [...list.taskIds];

		data.id = `task-${data.id}`;
		updatedTasksIds.push(data.id);

		dispatch({
			type: STATE_ACTIONS.ADD_TASK,
			data
		});
		return dispatch({
			type: STATE_ACTIONS.UPDATE_LIST,
			data: {
				id: list.id,
				toUpdate: {
					taskIds: updatedTasksIds
				}
			}
		});
	};

	render() {
		const { taskMap, list, index, query } = this.props;
		const { id, title, taskIds } = list;
		let tasks = taskIds.map(taskId => taskMap[taskId]);

		if (query) {
			const pattern = new RegExp(query, 'ig');
			tasks = tasks.filter(task => task.title.match(pattern));
		}

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
