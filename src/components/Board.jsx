import React, { Component } from 'react';

import Lists from './Lists/index';
import '../styles/board.scss';

class Board extends Component {
	constructor(props) {
		super(props);
		this.state = { ...this.props };
	}

	renderHeader = () => {
		const { title } = this.props;
		return <div className="board-header">{title}</div>;
	};

	render() {
		const { tasks, lists, listOrder } = this.state;
		return (
			<div className="board-wrapper">
				<div id="board">
					{this.renderHeader()}
					<Lists tasks={tasks} lists={lists} listOrder={listOrder} />
				</div>
			</div>
		);
	}
}

export default Board;
