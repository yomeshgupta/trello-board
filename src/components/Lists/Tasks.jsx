import React, { Component } from 'react';

import Task from './Task';

class Tasks extends Component {
	render() {
		const { tasks } = this.props;

		return (
			<div className="tasks">
				{tasks.map(task => {
					return <Task key={`task-${task.id}`} {...task} />;
				})}
			</div>
		);
	}
}

export default Tasks;
