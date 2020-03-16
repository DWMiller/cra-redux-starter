import {
	createSlice,
	createEntityAdapter,
	createSelector
} from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const tasksAdapter = createEntityAdapter();

const tasksSlice = createSlice({
	name: 'tasks',
	initialState: tasksAdapter.getInitialState(),
	reducers: {
		taskAdded: {
			reducer: (state, action) => {
				tasksAdapter.addOne(state, {
					...action.payload,
					isComplete: false,
					id: uuidv4()
				});
			}
		},
		taskCompleted: (state, action) => {
			tasksAdapter.updateOne(state, {
				id: action.payload,
				changes: {
					isComplete: true
				}
			});
		},
		taskRemoved: tasksAdapter.removeOne
	}
});

const adaptorSelectors = tasksAdapter.getSelectors(state => state.tasks);

const incompleteTasksSelector = createSelector(
	adaptorSelectors.selectAll,
	tasks => tasks.filter(task => !task.isComplete)
);

const completeTasksSelector = createSelector(
	adaptorSelectors.selectAll,
	tasks => tasks.filter(task => task.isComplete)
);

export const tasksSelectors = {
	...adaptorSelectors,
	incompleteTasksSelector,
	completeTasksSelector
};

export const { taskAdded, taskCompleted, taskRemoved } = tasksSlice.actions;

export default tasksSlice.reducer;
