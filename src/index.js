import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import * as serviceWorker from './serviceWorker';
import configureStore from './store/confgureStore';

import { useLocalStorageSync, loadState } from 'utils/localStorage';

import GlobalStyle from './styles/global';
import theme from './styles/theme';

import App from './components/App';

const store = configureStore(loadState('named-state'));

function Root() {
	useLocalStorageSync(store, 'named-state');

	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<App />
			</ThemeProvider>
		</Provider>
	);
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
