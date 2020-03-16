import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
	name: 'counter',
	initialState: 0,
	reducers: {
		increment: state => state + 1,
		decrement: state => (state > 0 ? state - 1 : state),
		reset: () => 0
	}
});

export const { increment, decrement, reset } = counterSlice.actions;

export const getCount = state => state.count;

export default counterSlice.reducer;
