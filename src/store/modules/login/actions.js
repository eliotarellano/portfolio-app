import { login } from '../../../client/login.client';

import {
    LOGIN_USER_START,
    LOGIN_USER_OK,
    LOGIN_USER_NOK,
    LOGOUT_USER,
} from './const';

const loginStartActionCreator = () => ({
    type: LOGIN_USER_START,
    payload: null,
});

const loginOkActionCreator = (token) => ({
    type: LOGIN_USER_OK,
    payload: token,
});

const loginNokActionCreator = (errorMessage) => ({
    type: LOGIN_USER_NOK,
    payload: errorMessage,
});

export const logoutActionCreator = () => ({
    type: LOGOUT_USER,
    payload: null,
})

export const loginAsyncActionCreator = (email, password) => {
    return (dispatch, getStore) => {
        dispatch(loginStartActionCreator());
        login({email, password})
        .catch(err => {
            dispatch(loginNokActionCreator('Error:', err));
        }).then(response => {
            if (response.message !== 'success') {
                dispatch(loginNokActionCreator('Error: generico'))
            } else {
                dispatch(loginOkActionCreator(response.data))
            }
        });
    }
}