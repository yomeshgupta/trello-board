import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Proptypes from 'prop-types';

import List from './List';
import Composer from '../../shared/Composer';
import { STATE_ACTIONS } from '../../../constants/index';

class Lists extends Component {
	saveHandler = data => {
		const { dispatch, listOrder } = this.props;
		const updatedListOrder = [...listOrder];

		data.id = `list-${data.id}`;
		data.taskIds = [];
		updatedListOrder.push(data.id);

		dispatch({
			type: STATE_ACTIONS.ADD_LIST,
			data
		});
		return dispatch({
			type: STATE_ACTIONS.UPDATE_LIST_ORDER,
			data: {
				toUpdate: updatedListOrder
			}
		});
	};

	deleteHandler = id => {
		if (window.confirm('Are you sure you want to delete this list?')) {
			const { listOrder, dispatch } = this.props;
			const updatedListOrder = [...listOrder].filter(listId => listId !== id);

			dispatch({
				type: STATE_ACTIONS.UPDATE_LIST_ORDER,
				data: {
					toUpdate: updatedListOrder
				}
			});
			return dispatch({
				type: STATE_ACTIONS.DELETE_LIST,
				data: {
					id
				}
			});
		}
	};

	render() {
		const { tasks, lists, listOrder, query, dispatch } = this.props;

		return (
			<Droppable droppableId="all-lists" direction="horizontal" type="list">
				{provided => {
					return (
						<div className="lists" {...provided.droppableProps} ref={provided.innerRef} role="list">
							{listOrder.map((listId, index) => {
								const list = lists[listId];
								return (
									<List
										key={`${list.id}`}
										list={list}
										taskMap={tasks}
										index={index}
										query={query}
										dispatch={dispatch}
										deleteHandler={this.deleteHandler}
									/>
								);
							})}
							{provided.placeholder}
							<Composer
								title="Add List"
								onSave={this.saveHandler}
								classNames="add-list-section u-btn-transparent"
							/>
						</div>
					);
				}}
			</Droppable>
		);
	}
}

Lists.propTypes = {
	tasks: Proptypes.object.isRequired,
	lists: Proptypes.object.isRequired,
	query: Proptypes.string,
	listOrder: Proptypes.array.isRequired,
	dispatch: Proptypes.func.isRequired
};

Lists.defaultProps = {
	query: ''
};

export default Lists;
