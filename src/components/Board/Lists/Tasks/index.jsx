import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import Task from './Task';

class Tasks extends Component {
	render() {
		const { id, tasks, deleteTask, dispatch } = this.props;

		return (
			<Droppable droppableId={id} type="task">
				{provided => (
					<div {...provided.droppableProps} ref={provided.innerRef}>
						<div className="tasks">
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

export default Tasks;
