import {
    SKILLS_FIND_ALL,
    SKILLS_DELETE_BYID,
    SKILLS_UPDATE_BYID,
    SKILLS_INCREASE_COUNTER,
    SKILLS_CREATE_SKILL,
} from './const';

const initialState = {
    data: [
        {
            id: 0,
            name: 'H T M L',
            percentage: '90',
        },
        {
            id:1,
            name: 'C S S',
            percentage: '80',
        },
        {
            id:2,
            name: 'R e a c t  J s',
            percentage: '70',
        },
        {
            id: 3,
            name: 'J a v a S c r i p t',
            percentage: '80',
        },
        {
            id:4,
            name: 'N o d e  J s',
            percentage: '50',
        },
        {
            id:5,
            name: 'U I  D e s i g n',
            percentage: '70',
        },
        {
            id:6,
            name: 'P h o t o s h o p',
            percentage: '90',
        }
    ],
    counter: 6,
    loading: false,
    error: null,
    success: null,
    errorMessage: '',
}

const skillReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case SKILLS_INCREASE_COUNTER:
            return {
                ...prevState,
                counter: prevState.counter + 1,
            }
        case SKILLS_CREATE_SKILL:
            return {
                ...prevState,
                data: prevState.data.concat({
                    id: prevState.counter,
                    name: action.payload.name, 
                    percentage: action.payload.percentage,
                }),
            }
        case SKILLS_FIND_ALL:
            return {
                ...prevState,
                success: true,
            }
        case SKILLS_DELETE_BYID:
            return {
                ...prevState,
                data: prevState.data.filter(skill => skill.id !== action.id),
            }
        case SKILLS_UPDATE_BYID:
            return {
                ...prevState,
                data: prevState.data.map(skill => {
                    const currentSkill = skill.id === action.payload.id;
                    return currentSkill ? {...skill, name: action.payload.name, percentage: action.payload.percentage } : skill;
                })
            }
        default:
            return prevState;
    }
}

export default skillReducer;