import { applyMiddleware, compose, createStore } from 'redux';
import logger from "redux-logger"
import reducer from "./reducers"

let finalCreateStore = compose(
	applyMiddleware(logger())
)(createStore)

export default function configureStore(initialState = { todos: [] }) {
	return finalCreateStore(reducer, initialState)
}
