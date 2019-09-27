import React, { Component } from 'react';

import '../styles/board.scss';

class Board extends Component {
	constructor(props) {
		super(props);
		this.state = { ...this.props };
	}

	render() {
		const { title, tasks, lists, listOrder } = this.state;
		return (
			<div className="board-wrapper">
				<div className="board-header">Header</div>
				<div id="board">
					{listOrder.map(listId => {
						const list = lists[listId];
						return (
							<div className="list" key={`list-${list.id}`}>
								{list.title}
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Board;
