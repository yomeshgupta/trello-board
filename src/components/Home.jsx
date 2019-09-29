import React, { useReducer, useState } from 'react';

import initialData from '../data/index';
import Board from './Board/index';
import { STATE_ACTIONS } from '../constants/index';

function reducer(state, action) {
	switch (action.type) {
		case STATE_ACTIONS.UPDATE_LIST: {
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
		case STATE_ACTIONS.DELETE_TASK: {
			const { tasks } = state;
			const clone = { ...tasks };

			delete clone[action.data.id];

			return {
				...state,
				tasks: {
					...state.tasks,
					...clone
				}
			};
		}
		case STATE_ACTIONS.UPDATE_LIST_ORDER: {
			return {
				...state,
				listOrder: action.data.toUpdate
			};
		}
		case STATE_ACTIONS.UPDATE_BOOKMARK: {
			return {
				...state,
				meta: {
					...state.meta,
					isBookmarked: !state.meta.isBookmarked
				}
			};
		}
		case STATE_ACTIONS.UPDATE_BACKGROUND: {
			return {
				...state,
				meta: {
					...state.meta,
					background: {
						...state.meta.background,
						value: action.data
					}
				}
			};
		}
		case STATE_ACTIONS.ADD_TASK: {
			return {
				...state,
				tasks: {
					...state.tasks,
					[action.data.id]: action.data
				}
			};
		}
		case STATE_ACTIONS.ADD_LIST: {
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
	const [query, setQuery] = useState('');

	return <Board {...state} dispatch={dispatch} query={query} setQuery={setQuery} />;
};

export default Home;
