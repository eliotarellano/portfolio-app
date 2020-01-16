import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import loginReducer from './modules/login/reducer';
import postReducer from './modules/posts/reducer';
import skillReducer from './modules/skill/reducer';

const rootReducer = combineReducers({
    login: loginReducer,
    posts: postReducer,
    skills: skillReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;