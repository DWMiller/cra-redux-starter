import React from 'react';

import Counter from './Counter';

import Page from './Page';
import Tasks from './Tasks';

function App() {
	return (
		<Page>
			<h1>CRA-Redux-Starter</h1>
			<Counter />
			<Tasks></Tasks>
		</Page>
	);
}

export default App;
