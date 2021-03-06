import React from 'react';

export const saveState = state => {
	try {
		const serializedState = JSON.stringify(state);

		localStorage.setItem('state', serializedState);
	} catch (err) {
		// Ignore write errors.
	}
};

export const loadState = () => {
	try {
		const serializedState = localStorage.getItem('state');
		if (serializedState === null) {
			return undefined;
		}

		const savedState = JSON.parse(serializedState);

		return savedState;
	} catch (err) {
		return undefined;
	}
};

export const useLocalStorageSync = (store, key = 'state') => {
	React.useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			//TODO Throttle/debounce
			// TODO More advanced whitelisting/blacklisting

			//! Careful when delete props, we are not deeply cloning the state and nested state is real state
			const state = { ...store.getState() };

			saveState(state, key);
		});

		return () => unsubscribe();
	}, [store, key]);
};
