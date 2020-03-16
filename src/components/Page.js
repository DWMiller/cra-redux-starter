import React from 'react';
import styled from 'styled-components';

import Meta from './Meta';

// import 'normalize.css';

const StyledPage = styled.div`
	.inner {
		max-width: ${props => props.theme.layout.maxWidth};
	}

	.body {
		flex: 1 0 auto;
		padding: 20px;
	}
`;

function Page(props) {
	return (
		<StyledPage>
			<Meta />
			<div className="inner">
				<section className="body">{props.children}</section>
			</div>
		</StyledPage>
	);
}

export default Page;
