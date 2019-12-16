import {
    LOGIN_USER_START,
    LOGIN_USER_OK,
    LOGIN_USER_NOK,
    LOGOUT_USER,
} from './const';

import parseJwt from '../../../utils/parseJwt';

const localStorage = window.localStorage;

const initialState = {
    isLogin: !!localStorage.getItem('token'),
    token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
    loading: false,
    errorMessage: '',
    error: null,
    success: null,
    jwt: localStorage.getItem('token') ? parseJwt(localStorage.getItem('token')) : {},
};

const loginReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_START:
            return {
                isLogin: false,
                success: false,
                error: false,
                loading: true,
            }
        case LOGIN_USER_OK:
            localStorage.setItem('token', action.payload)
            return {
                ...prevState,
                isLogin: true,
                token: action.payload,
                success: true,
                error: false,
                loading: false,
                jwt: parseJwt(action.payload),
            }
        case LOGIN_USER_NOK:
            return {
                isLogin: false,
                token: '',
                success: false,
                error: true,
                errorMessage: action.payload,
                loading: false,
            }
        case LOGOUT_USER:
            localStorage.removeItem('token');
            return {
                ...prevState,
                isLogin: false,
                token: '',
            }
        default:
            return prevState;
    }
}

export default loginReducer;