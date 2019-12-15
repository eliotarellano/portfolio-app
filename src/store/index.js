import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const rootReducer = combineReducers({
    auth: null,
    user: null,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;