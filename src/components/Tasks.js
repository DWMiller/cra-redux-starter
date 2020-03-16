import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import {
	tasksSelectors,
	taskAdded,
	taskCompleted,
	taskRemoved
} from '../store/tasks';

const Container = styled.div`
	width: 200px;
	box-shadow: ${props => props.theme.shadows['shadow-100']};
	padding: 20px;
`;

function Task(props) {
	const task = useSelector(tasksSelectors.selectEntities)[props.id];

	return (
		<div>
			{task.id}
			<div>
				{!task.isComplete && (
					<button onClick={() => props.updateTask(props.id)}>Complete</button>
				)}

				<button onClick={() => props.deleteTask(props.id)}>Delete</button>
			</div>
		</div>
	);
}

function Tasks() {
	const dispatch = useDispatch();

	const incompleteTasks = useSelector(tasksSelectors.incompleteTasksSelector);
	const completeTasks = useSelector(tasksSelectors.completeTasksSelector);

	const createTask = () => {
		dispatch(
			taskAdded({
				title: 'New Task'
			})
		);
	};

	const deleteTask = id => {
		dispatch(taskRemoved(id));
	};

	const updateTask = id => {
		dispatch(taskCompleted(id));
	};

	return (
		<Container>
			<h2>TODO Example</h2>
			<button onClick={createTask}>Add Item</button>
			<div>
				<h2>Incomplete</h2>
				{incompleteTasks.map(({ id }) => (
					<Task
						key={id}
						id={id}
						updateTask={updateTask}
						deleteTask={deleteTask}
					></Task>
				))}
			</div>
			<div>
				<h2>Completed</h2>
				{completeTasks.map(({ id }) => (
					<Task
						key={id}
						id={id}
						updateTask={updateTask}
						deleteTask={deleteTask}
					></Task>
				))}
			</div>
		</Container>
	);
}

export default Tasks;
