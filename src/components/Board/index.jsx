import React, { Component } from 'react';

import Header from './Header';
import Lists from './Lists/index';
import '../../styles/board.scss';

class Board extends Component {
	render() {
		const { title, tasks, lists, listOrder } = this.props;
		return (
			<div className="board-wrapper">
				<div id="board">
					<Header title={title} />
					<Lists tasks={tasks} lists={lists} listOrder={listOrder} />
				</div>
			</div>
		);
	}
}

export default Board;
