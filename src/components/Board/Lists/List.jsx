import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Proptypes from 'prop-types';

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

	deleteTask = taskId => {
		const { list, dispatch } = this.props;
		let taskIds = [...list.taskIds];

		taskIds = taskIds.filter(id => id !== taskId);

		dispatch({
			type: STATE_ACTIONS.DELETE_TASK,
			data: {
				id: taskId
			}
		});
		return dispatch({
			type: STATE_ACTIONS.UPDATE_LIST,
			data: {
				id: list.id,
				toUpdate: {
					taskIds
				}
			}
		});
	};

	render() {
		const { taskMap, list, index, query, dispatch, deleteHandler } = this.props;
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
								<svg
									viewBox="0 0 32 32"
									className="control-icon icon icon-clear"
									viewBox="0 0 32 32"
									aria-hidden="true"
									title="Delete List"
									style={{ float: 'right', cursor: 'pointer' }}
									onClick={() => deleteHandler(id)}
								>
									<path d="M7.004 23.087l7.08-7.081-7.07-7.071L8.929 7.02l7.067 7.069L23.084 7l1.912 1.913-7.089 7.093 7.075 7.077-1.912 1.913-7.074-7.073L8.917 25z" />
								</svg>
							</h3>
							<Tasks tasks={tasks} id={id} deleteTask={this.deleteTask} dispatch={dispatch} />
							<Composer title="Add Card" onSave={this.saveHandler} />
						</div>
					);
				}}
			</Draggable>
		);
	}
}

List.propTypes = {
	taskMap: Proptypes.object.isRequired,
	list: Proptypes.object.isRequired,
	query: Proptypes.string,
	index: Proptypes.oneOfType([Proptypes.number, Proptypes.string]).isRequired,
	deleteHandler: Proptypes.func.isRequired,
	dispatch: Proptypes.func.isRequired
};

List.defaultProps = {
	query: ''
};

export default List;
