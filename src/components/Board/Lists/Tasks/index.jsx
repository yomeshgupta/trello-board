import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Proptypes from 'prop-types';

import Task from './Task';

class Tasks extends Component {
	render() {
		const { id, tasks, deleteTask, dispatch } = this.props;

		return (
			<Droppable droppableId={id} type="task">
				{provided => (
					<div {...provided.droppableProps} ref={provided.innerRef}>
						<div className="tasks custom-scrollbar">
							{tasks.map((task, index) => {
								return (
									<Task
										key={`${task.id}`}
										{...task}
										id={task.id}
										index={index}
										deleteTask={deleteTask}
										dispatch={dispatch}
									/>
								);
							})}
						</div>
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		);
	}
}

Tasks.propTypes = {
	tasks: Proptypes.array.isRequired,
	id: Proptypes.oneOfType([Proptypes.number, Proptypes.string]).isRequired,
	deleteTask: Proptypes.func.isRequired,
	dispatch: Proptypes.func.isRequired
};

export default Tasks;
