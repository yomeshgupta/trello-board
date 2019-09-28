import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import Header from './Header';
import Lists from './Lists/index';
import '../../styles/board.scss';

class Board extends Component {
	onDragEnd = ({ draggableId, source, destination }) => {
		const hasDestination = !!destination;
		const isSamePosition = hasDestination
			? destination.droppableId === source.droppableId && destination.index === source.index
			: false;
		const shouldReturn = !hasDestination || isSamePosition;

		if (shouldReturn) return;
		const { lists, dispatch } = this.props;
		const start = lists[source.droppableId];
		const finish = lists[destination.droppableId];
		const isSameColumn = start === finish;

		if (isSameColumn) {
			const list = lists[source.droppableId];
			const updatedTaskIds = [...list.taskIds];

			updatedTaskIds.splice(source.index, 1);
			updatedTaskIds.splice(destination.index, 0, draggableId);

			return dispatch({
				type: 'UPDATE_LIST',
				data: {
					id: list.id,
					toUpdate: {
						taskIds: updatedTaskIds
					}
				}
			});
		}

		const startUpdatedTaskIds = [...start.taskIds];
		startUpdatedTaskIds.splice(source.index, 1);

		const finishUpdatedTasks = [...finish.taskIds];
		finishUpdatedTasks.splice(destination.index, 0, draggableId);

		dispatch({
			type: 'UPDATE_LIST',
			data: {
				id: start.id,
				toUpdate: {
					taskIds: startUpdatedTaskIds
				}
			}
		});
		return dispatch({
			type: 'UPDATE_LIST',
			data: {
				id: finish.id,
				toUpdate: {
					taskIds: finishUpdatedTasks
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
				<div className="board-wrapper" style={{ backgroundColor: background.value }} role="main">
					<div id="board" role="region">
						<Header title={title} />
						<Lists tasks={tasks} lists={lists} listOrder={listOrder} />
					</div>
				</div>
			</DragDropContext>
		);
	}
}

export default Board;
