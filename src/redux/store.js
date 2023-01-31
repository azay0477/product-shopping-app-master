import { createStore, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import AppReducer from "./duck/reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(logger);
export const store = createStore(AppReducer, composeEnhancers(middleware));
