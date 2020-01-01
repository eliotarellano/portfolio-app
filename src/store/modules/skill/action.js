import { getAllSkills, addSkill } from '../../../client/skill.client';

import {
    SKILLS_FIND_ALL_START,
    SKILLS_FIND_ALL_OK,
    SKILLS_FIND_ALL_NOK,
    SKILLS_DELETE_BYID,
    SKILLS_UPDATE_BYID,
    SKILLS_INCREASE_COUNTER,
    SKILL_SAVE_START,
    SKILL_SAVE_OK,
    SKILL_SAVE_NOK,
    SKILL_SAVE_VOID,
} from './const';

export const increaseSkillCounter = () => ({
    type: SKILLS_INCREASE_COUNTER,
    payload: null,
});

export const deleteSkillById = (id) => ({
    type: SKILLS_DELETE_BYID,
    id: id,
});

export const updateSkillById = (data) => ({
    type: SKILLS_UPDATE_BYID,
    payload: data,
});

// FIND ALL SKILLS

const findAllSkillActionCreator = () => ({
    type: SKILLS_FIND_ALL_START,
    payload: null,
});

const findAllSkillOkActionCreator = (data) => ({
    type: SKILLS_FIND_ALL_OK,
    payload: data,
});

const findAllSkillNokActionCreator = (errorMessage) => ({
    type: SKILLS_FIND_ALL_NOK,
    payload: errorMessage,
});

export const findDataAsyncActionCreator = () => {
    return (dispatch, getStore) => {
        dispatch(findAllSkillActionCreator());
        getAllSkills()
        .catch(err => {
            dispatch(findAllSkillNokActionCreator('Error:', err));
        }).then(response => {
            if (response.message !== 'success') {
                dispatch(findAllSkillNokActionCreator('Error: generico'))
            } else {
                const rs = response.data;
                const nlrs = rs.map((r) => ({
                  ...r,
                  description: JSON.parse(r.description),
                }));
                dispatch(findAllSkillOkActionCreator(nlrs[0].description))
            }
        });
    }
}

// CREATE NEW SKILL

const addSkillActionCreator = () => ({
    type: SKILL_SAVE_START,
    payload: null,
});

const addSkillOkActionCreator = (data) => ({
    type: SKILL_SAVE_OK,
    payload: data,
});

const addSkillNokActionCreator = (errorMessage) => ({
    type: SKILL_SAVE_NOK,
    payload: errorMessage,
});

export const addSkillAsyncActionCreator = (data) => {
    return (dispatch, getStore) => {
        dispatch(addSkillActionCreator());
        addSkill(data)
        .catch(err => {
            dispatch(addSkillNokActionCreator('Error:', err));
        }).then(response => {
            if (response.message !== 'success') {
                dispatch(addSkillNokActionCreator('Error: generico'))
            } else {
                dispatch(findAllSkillOkActionCreator(JSON.parse(response.data.description)))
            }
        });
    }
}