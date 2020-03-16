import {
	combineReducers,
	configureStore,
	getDefaultMiddleware
} from '@reduxjs/toolkit';

import counter from './counter';
import tasks from './tasks';

const reducer = combineReducers({
	count: counter,
	tasks
});

const middleware = [...getDefaultMiddleware()];

export default preloadedState =>
	configureStore({
		reducer,
		preloadedState,
		middleware
	});
