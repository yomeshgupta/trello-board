import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import Menu from './Menu';
import Lists from './Lists/index';
import BoardMenu from './BoardMenu';
import { STATE_ACTIONS } from '../../constants/index';
import '../../styles/board.scss';

class Board extends Component {
	state = {
		showMenu: false
	};

	onDragEnd = ({ draggableId, source, destination, type }) => {
		const hasDestination = !!destination;
		const isSamePosition = hasDestination
			? destination.droppableId === source.droppableId && destination.index === source.index
			: false;
		const shouldReturn = !hasDestination || isSamePosition;
		const { lists, listOrder, dispatch } = this.props;

		if (shouldReturn) return;

		if (type.toLowerCase() === 'list') {
			const updatedListOrder = [...listOrder];
			updatedListOrder.splice(source.index, 1);
			updatedListOrder.splice(destination.index, 0, draggableId);

			return dispatch({
				type: 'UPDATE_LIST_ORDER',
				data: {
					toUpdate: updatedListOrder
				}
			});
		}

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

	toggleBookmark = () => {
		const { dispatch } = this.props;
		return dispatch({
			type: STATE_ACTIONS.UPDATE_BOOKMARK
		});
	};

	toggleMenu = () => this.setState(state => ({ showMenu: !state.showMenu }));

	render() {
		const {
			title,
			tasks,
			lists,
			listOrder,
			meta: { background, isBookmarked },
			users,
			dispatch
		} = this.props;
		const { showMenu } = this.state;
		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
				<div className="board-wrapper" style={{ backgroundColor: background.value }} role="main">
					<div id="board" role="region">
						<Menu
							title={title}
							isBookmarked={isBookmarked}
							toggleBookmark={this.toggleBookmark}
							toggleMenu={this.toggleMenu}
						/>
						<Lists tasks={tasks} lists={lists} listOrder={listOrder} dispatch={dispatch} />
					</div>
					{showMenu ? <BoardMenu toggleMenu={this.toggleMenu} users={users} /> : null}
				</div>
			</DragDropContext>
		);
	}
}

export default Board;
