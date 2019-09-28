import React, { useReducer } from 'react';
import initialData from '../data/index';
import Board from './Board/index';

import 'semantic-ui-css/semantic.min.css';

function reducer(state, action) {
	switch (action.type) {
		case 'UPDATE_LIST': {
			return {
				...state,
				lists: {
					...state.lists,
					[action.data.id]: {
						...state.lists[action.data.id],
						...action.data.toUpdate
					}
				}
			};
		}
		case 'UPDATE_LIST_ORDER': {
			return {
				...state,
				listOrder: action.data.toUpdate
			};
		}

		case 'ADD_TASK': {
			return {
				...state,
				tasks: {
					...state.tasks,
					[action.data.id]: action.data
				}
			};
		}

		case 'ADD_LIST': {
			return {
				...state,
				lists: {
					...state.lists,
					[action.data.id]: action.data
				}
			};
		}

		default:
			return state;
	}
}

const Home = () => {
	const [state, dispatch] = useReducer(reducer, initialData);
	return <Board {...state} dispatch={dispatch} />;
};

export default Home;
