import React, { Component } from 'react';
import './app.css';
import withBooksStoreService from '../hoc';
//Router
import { Route, Switch } from 'react-router-dom';
//Pages
import { HomePage, CartPage } from '../pages';
class App extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/cart" component={CartPage} />
			</Switch>
		);
	}
}

export default withBooksStoreService()(App);
