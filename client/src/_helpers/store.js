/**
 * Created by 300126 on 1/31/2019.
 */

import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../_reducers';

const loggerMiddleware = createLogger();

const initialState = {};

export const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(thunkMiddleware, loggerMiddleware),
        (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) || compose
    )
);
