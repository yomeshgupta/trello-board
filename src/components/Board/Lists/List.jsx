import React, { Component } from 'react';

import Tasks from './Tasks/index';

class List extends Component {
	render() {
		const { taskMap, list } = this.props;
		const { id, title, taskIds } = list;
		const tasks = taskIds.map(taskId => taskMap[taskId]);

		return (
			<div className="list">
				<h3 className="list-header">{title}</h3>
				<Tasks tasks={tasks} id={id} />
				<div className="composer">+ Add another card</div>
			</div>
		);
	}
}

export default List;
