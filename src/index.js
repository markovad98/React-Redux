//React
import React from 'react';
import ReactDOM from 'react-dom';
//Redux
import { Provider } from 'react-redux';
import { store } from './store';
//Router
import { BrowserRouter as Router, Route } from 'react-router-dom';
//Components
import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import BooksStoreService from './services/bookStore-service';
import { BookStoreServiceProvider } from './components/bookStore-service-context';

const booksStoreService = new BooksStoreService();

ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundry>
			<BookStoreServiceProvider value={booksStoreService}>
				<Router>
					<App />
				</Router>
			</BookStoreServiceProvider>
		</ErrorBoundry>
	</Provider>,
	document.getElementById('root')
);
