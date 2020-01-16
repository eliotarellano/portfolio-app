import {
    SKILLS_FIND_ALL,
    SKILLS_DELETE_BYID,
    SKILLS_UPDATE_BYID,
    SKILLS_INCREASE_COUNTER,
    SKILLS_CREATE_SKILL,
} from './const';

export const increaseSkillCounter = () => ({
    type: SKILLS_INCREASE_COUNTER,
    payload: null,
});

export const addSkill = (data) => ({
    type: SKILLS_CREATE_SKILL,
    payload: data,
});

export const findAllSkills = (data) => ({
    type: SKILLS_FIND_ALL,
    payload: data,
});

export const deleteSkillById = (id) => ({
    type: SKILLS_DELETE_BYID,
    id: id,
});

export const updateSkillById = (data) => ({
    type: SKILLS_UPDATE_BYID,
    payload: data,
});