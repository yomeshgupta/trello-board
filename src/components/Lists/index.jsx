import React, { Component } from 'react';

import List from './List';

class Lists extends Component {
	render() {
		const { tasks, lists, listOrder } = this.props;
		return (
			<div className="lists">
				{listOrder.map(listId => {
					const list = lists[listId];
					return <List key={`list-${list.id}`} list={list} taskMap={tasks} />;
				})}
			</div>
		);
	}
}

export default Lists;
