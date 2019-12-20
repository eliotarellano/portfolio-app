import axios from 'axios';
import { API_HOST } from './config';

 const MODULE = 'skill';

export const getAllSkills = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${API_HOST}/api/${MODULE}`, {
        }).then(data => {
            resolve(data.data);
        }).catch(error => reject(error.message));
    })
}