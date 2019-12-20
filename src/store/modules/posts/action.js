import { getAllPosts } from '../../../client/post.client';

import {
    POSTS_FIND_ALL_START,
    POSTS_FIND_ALL_OK,
    POSTS_FIND_ALL_NOK,
} from './const';

const findAllPostsActionCreator = () => ({
    type: POSTS_FIND_ALL_START,
    payload: null,
});

const findAllPostsOkActionCreator = (data) => ({
    type: POSTS_FIND_ALL_OK,
    payload: data,
});

const findAllPostsNokActionCreator = (errorMessage) => ({
    type: POSTS_FIND_ALL_NOK,
    payload: errorMessage,
});

export const findPostsAsyncActionCreator = () => {
    return (dispatch, getStore) => {
        dispatch(findAllPostsActionCreator());
        getAllPosts()
        .catch(err => {
            dispatch(findAllPostsNokActionCreator('Error:', err));
        }).then(response => {
            if (response.message !== 'success') {
                dispatch(findAllPostsNokActionCreator('Error: generico'))
            } else {
                dispatch(findAllPostsOkActionCreator(response.data))
            }
        });
    }
}