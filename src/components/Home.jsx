import React, { useReducer } from 'react';
// import 'semantic-ui-css/semantic.min.css';

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
		case STATE_ACTIONS.UPDATE_LIST_ORDER: {
			return {
				...state,
				listOrder: action.data.toUpdate
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

		case STATE_ACTIONS.UPDATE_BOOKMARK: {
			return {
				...state,
				meta: {
					...state.meta,
					isBookmarked: !state.meta.isBookmarked
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
