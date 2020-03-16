import React from 'react';
import { Helmet } from 'react-helmet';

function Meta() {
	return (
		<Helmet>
			<title>App</title>
		</Helmet>
	);
}

export default React.memo(Meta);
