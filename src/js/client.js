import React from "react";
import { render } from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { Provider } from "react-redux";

import Layout from "./containers/Layout";

import configureStore from './store'

let initialState = {
	todos: [
		{
			id: 0,
			text: 'Initial todo',
			completed: false
		}
	]
}

let store = configureStore(initialState)

const app = document.getElementById('app');

render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={Layout}>
			</Route>
		</Router>
	</Provider>,
app);
