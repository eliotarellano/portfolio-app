// import { findUserById } from '../../../client/user.client';

// import {
//     USER_FIND_BY_ID_START,
//     USER_FIND_BY_ID_OK,
//     USER_FIND_BY_ID_NOK,
// } from '../../../client/user.client';

// const findUserIdActionCreator = () =>({
//     type: USER_FIND_BY_ID_START,
//     payload: null,
// });

// const findUserIdOkActionCreator = (data) =>({
//     type: USER_FIND_BY_ID_OK,
//     payload: data,
// });

// const findUserIdNokActionCreator = (errorMessage) =>({
//     type: USER_FIND_BY_ID_NOK,
//     payload: errorMessage,
// });

// export const findUserIdAsyncActionCreator = (id) {
//     return (dispatch, getStore) => {
//         dispatch(findUserIdActionCreator());
//         findUserById(id)
//     }
// }