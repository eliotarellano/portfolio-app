import {
    SKILLS_FIND_ALL_START,
    SKILLS_FIND_ALL_OK,
    SKILLS_FIND_ALL_NOK,
    SKILL_SAVE_START,
    SKILL_SAVE_OK,
    SKILL_SAVE_NOK,
    SKILL_EDIT_START,
    SKILL_EDIT_OK,
    SKILL_EDIT_NOK,
    SKILL_DELETE_START,
    SKILL_DELETE_OK,
    SKILL_DELETE_NOK,
} from './const';

const initialState = {
    data: [],
    loading: false,
    error: null,
    success: null,
    errorMessage: '',
}

const skillReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case SKILLS_FIND_ALL_START:
            return {
                ...prevState,
                loading: true,
            };
        case SKILLS_FIND_ALL_OK:
            return {
                ...prevState,
                loading: false,
                success: true,
                error: null,
                data: action.payload,
            };
        case SKILLS_FIND_ALL_NOK:
            return {
                ...prevState,
                loading: false,
                success: false,
                error: true,
                errorMessage: action.payload,
            };
        case SKILL_SAVE_START:
            return {
                ...prevState,
                loading: true,
            }
        case SKILL_SAVE_OK:
            return {
                ...prevState,
                loading: false,
                success: true,
                error: null,
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
        case SKILL_EDIT_START:
            return {
                ...prevState,
                loading: true,
            }
        case SKILL_EDIT_OK:
            return {
                ...prevState,
                loading: false,
                success: true,
                error: null,
                data: action.payload,
            }
        case SKILL_EDIT_NOK:
            return {
                ...prevState,
                loading: false,
                success: false,
                error: true,
                errorMessage: action.payload,
            }
        case SKILL_DELETE_START:
            return {
                ...prevState,
                loading: true,
            }
        case SKILL_DELETE_OK:
            return {
                ...prevState,
                loading: false,
                success: true,
                error: null,
                data: action.payload,
            }
        case SKILL_DELETE_NOK:
            return {
                ...prevState,
                loading: false,
                success: false,
                error: true,
                errorMessage: action.payload,
            }
        default:
            return prevState;
    }
}

export default skillReducer;

// userDetailData: [
//     {
//         userId: 1,
//         userDetailId: 1,
//         name: 'Eliot',
//         lastName: 'Arellano',
//         jobName: 'Front-end Developer',
//         userDescription: 'Responsible, dynamic and creative professional, with team work skills and initiative to solve problems efficiently.',
//         email: 'eliot@e.io',
//         phone: '+56 9 6239 9504',
//         gitHubUser: 'eliotarellano',
//         linkedinUser: 'eliot-arellano',
//         behanceUser: 'eliotarellano',
//         instagramUser: 'eliotarellano',
//     },
// ],
// skillData: [
//     {
//         id: 0,
//         name: 'H T M L',
//         percentage: '90',
//     },
//     {
//         id:1,
//         name: 'C S S',
//         percentage: '80',
//     },
//     {
//         id:2,
//         name: 'R e a c t  J s',
//         percentage: '70',
//     },
//     {
//         id: 3,
//         name: 'J a v a S c r i p t',
//         percentage: '80',
//     },
//     {
//         id:4,
//         name: 'N o d e  J s',
//         percentage: '50',
//     },
//     {
//         id:5,
//         name: 'U I  D e s i g n',
//         percentage: '70',
//     },
//     {
//         id:6,
//         name: 'P h o t o s h o p',
//         percentage: '90',
//     }
// ],
// portfolioData : [
//     {
//         userId: 1,
//         itemId: 1,
//         itemName: 'Portfolio Test',
//         itemDescription: 'Item description test',
//         itemType: 'WordPress',
//         itemImage: 'url',
//         itemUrl: 'url href',
//     },
//     {
//         userId: 1,
//         itemId: 2,
//         itemName: 'Portfolio Test 2',
//         itemDescription: 'Item description test 2',
//         itemType: 'React Js',
//         itemImage: 'url',
//         itemUrl: 'url href',
//     },
// ],