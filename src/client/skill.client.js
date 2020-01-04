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

export const addSkill = (data) => {
    const token = localStorage.getItem('token');
    return fetch(`${API_HOST}/api/${MODULE}/1`, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(res => res.json())
}

export const updateSkill = (data) => {
    const token = localStorage.getItem('token');
    return fetch(`${API_HOST}/api/${MODULE}/1`, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(res => res.json())
}

export const deleteSkill = (data) => {
    const token = localStorage.getItem('token');
    return fetch(`${API_HOST}/api/${MODULE}/1`, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(res => res.json())  
}