import { getAllSkills, addSkill, updateSkill, deleteSkill } from '../../../client/skill.client';

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
        .catch(error => {
            dispatch(findAllSkillNokActionCreator('Error:', error));
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
        .catch(error => {
            dispatch(addSkillNokActionCreator('Error:', error));
        }).then(response => {
            if (response.message !== 'success') {
                dispatch(addSkillNokActionCreator('Error: generico'));
            } else {
                dispatch(addSkillOkActionCreator(JSON.parse(response.data.description)));
            }
        });
    }
}

// EDIT SKILL

const updateSkillActionCreator = () => ({
    type: SKILL_EDIT_START,
    payload: null,
});

const updateSkillOkActionCreator = (data) =>({
    type: SKILL_EDIT_OK,
    payload: data,
});

const updateSkillNokActionCreator = (errorMessage) => ({
    type: SKILL_EDIT_NOK,
    payload: errorMessage,
});

export const updateSkillAsyncActionCreator = (data) => {
    return (dispatch, getStore) => {
        dispatch(updateSkillActionCreator());
        updateSkill(data)
        .catch(error => {
            dispatch(updateSkillNokActionCreator('Error:', error));
        }).then (response => {
            if (response.message !== 'success') {
                dispatch(updateSkillNokActionCreator('Error: generico'));
            } else {
                dispatch(updateSkillOkActionCreator(JSON.parse(response.data.description)));
            }
        });
    }
};

// DELETE SKILL

const deleteSkillActionCreator = () => ({
    type: SKILL_DELETE_START,
    payload: null,
});

const deleteSkillOkActionCreator = (data) => ({
    type: SKILL_DELETE_OK,
    payload: data,
});

const deleteSkillNokActionCreator = (errorMessage) => ({
    type: SKILL_DELETE_NOK,
    payload: errorMessage,
});

export const deleteSkillAsyncActionCreator = (data) => {
    return (dispatch, getStore) => {
        dispatch(deleteSkillActionCreator());
        deleteSkill(data)
        .catch(error => {
            dispatch(deleteSkillNokActionCreator('Error:', error));
        }).then(response => {
            if (response.message !== 'success') {
                dispatch(deleteSkillNokActionCreator('Error: generico'));
            } else {
                dispatch(deleteSkillOkActionCreator(JSON.parse(response.data.description)));
            }
        });
    }
}