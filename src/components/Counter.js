import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { getCount, increment, decrement, reset } from 'store/counter';

const Container = styled.div`
	width: 200px;
	box-shadow: ${props => props.theme.shadows['shadow-100']};
	padding: 20px;
`;

function Counter() {
	const dispatch = useDispatch();

	const count = useSelector(getCount);

	return (
		<Container>
			<h2>Counter Example</h2>
			<p>{count}</p>
			<br />
			<button onClick={() => dispatch(increment())}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>
			<button onClick={() => dispatch(reset())}>Reset</button>
		</Container>
	);
}

export default Counter;
