import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import Header from './Header';
import Lists from './Lists/index';
import '../../styles/board.scss';

class Board extends Component {
	onDragEnd = ({ draggableId, source, destination }) => {
		const hasDestination = !!destination;
		const isSamePosition = hasDestination
			? !!(destination.droppableId === source.droppableId && destination.index === source.index)
			: false;
		const shouldReturn = !!(!hasDestination || isSamePosition);

		if (shouldReturn) return;

		const { lists, dispatch } = this.props;
		const list = lists[source.droppableId];
		const updatedTaskIds = [...list.taskIds];

		updatedTaskIds.splice(source.index, 1);
		updatedTaskIds.splice(destination.index, 0, draggableId);

		dispatch({
			type: 'UPDATE_LIST',
			data: {
				id: list.id,
				toUpdate: {
					taskIds: updatedTaskIds
				}
			}
		});
	};

	render() {
		const {
			title,
			tasks,
			lists,
			listOrder,
			meta: { background }
		} = this.props;
		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
				<div className="board-wrapper" style={{ backgroundColor: background.value }}>
					<div id="board">
						<Header title={title} />
						<Lists tasks={tasks} lists={lists} listOrder={listOrder} />
					</div>
				</div>
			</DragDropContext>
		);
	}
}

export default Board;
