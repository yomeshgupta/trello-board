import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import List from './List';

class Lists extends Component {
	render() {
		const { tasks, lists, listOrder } = this.props;

		return (
			<Droppable droppableId="all-lists" direction="horizontal" type="list">
				{provided => {
					return (
						<div className="lists" {...provided.droppableProps} ref={provided.innerRef}>
							{listOrder.map((listId, index) => {
								const list = lists[listId];
								return <List key={`${list.id}`} list={list} taskMap={tasks} index={index} />;
							})}
							{provided.placeholder}
						</div>
					);
				}}
			</Droppable>
		);
	}
}

export default Lists;
