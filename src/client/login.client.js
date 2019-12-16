import { API_HOST } from './config';

export const login = (user) => {
    return fetch(`${API_HOST}/login`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
}