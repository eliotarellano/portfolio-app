import {
    SKILL_SAVE_START,
    SKILL_SAVE_OK,
    SKILL_SAVE_NOK,
    SKILL_SAVE_VOID,
} from './const';

const initialState = {
    data: [],
    loading: false,
    error: null,
    success: null,
    errorMessage: '',
};

const skillAddReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case SKILL_SAVE_START:
            return {
                ...prevState,
                loading: true,
                data: {},
            }
        case SKILL_SAVE_OK:
            return {
                ...prevState,
                loading: false,
                success: true,
                error: false,
                data: action.payload,
            }
        case SKILL_SAVE_NOK:
            return {
                ...prevState,
                loading: false,
                success: false,
                error: true,
                errorMessage: action.payload,
            }
        case SKILL_SAVE_VOID:
            return {
                ...prevState,
                data: {},
            }
        default:
            return prevState;
    }
};

export default skillAddReducer;


