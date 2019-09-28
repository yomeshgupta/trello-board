import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import Task from './Task';

class Tasks extends Component {
	render() {
		const { id, tasks } = this.props;

		return (
			<Droppable droppableId={id} type="task">
				{provided => (
					<div {...provided.droppableProps} ref={provided.innerRef}>
						<div className="tasks">
							{tasks.map((task, index) => {
								return <Task key={`${task.id}`} {...task} id={task.id} index={index} />;
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
