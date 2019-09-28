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
		default:
			return state;
	}
}

const Home = () => {
	const [state, dispatch] = useReducer(reducer, initialData);
	return <Board {...state} dispatch={dispatch} />;
};

export default Home;
