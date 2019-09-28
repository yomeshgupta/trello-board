import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import Header from './Header';
import Lists from './Lists/index';
import '../../styles/board.scss';

class Board extends Component {
	onDragEnd = () => {};

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
