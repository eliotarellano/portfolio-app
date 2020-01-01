import { API_HOST } from './config';

const MODULE = 'post';

export const getAllSkills = () => {
    return fetch(`${API_HOST}/api/${MODULE}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
}

export const addSkill = (skill) => {
    return fetch(`${API_HOST}/api/${MODULE}/1`, {
        method: 'PATCH',
        body: JSON.stringify(skill),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
}