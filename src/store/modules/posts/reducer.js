import {
    POSTS_FIND_ALL_START,
    POSTS_FIND_ALL_OK,
    POSTS_FIND_ALL_NOK,
} from './const';

const initialState = {
    data: [],
    loading: false,
    error: null,
    success: null,
    errorMessage: '',
};

const postReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case POSTS_FIND_ALL_START:
            return {
                ...prevState,
                loading: true,
            };
        case POSTS_FIND_ALL_OK:
            return {
                ...prevState,
                loading: false,
                success: true,
                error: null,
                data: action.payload,
            };
        case POSTS_FIND_ALL_NOK:
            return {
                ...prevState,
                loading: false,
                success: false,
                error: true,
                errorMessage: action.payload,
            };
        default:
            return prevState;
    }
}
export default postReducer;