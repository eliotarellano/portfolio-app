import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import loginReducer from './modules/login/reducer';

const rootReducer = combineReducers({
    login: loginReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;