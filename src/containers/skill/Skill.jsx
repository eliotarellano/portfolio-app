import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './Skill.css';
import Context from '../../context/Context';
import SkillList from '../../components/skill-list/SkillList';
import SkillListAdd from '../../components/skill-list-add/SkillListAdd';
import {
    Container,
    Col
} from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import { findDataAsyncActionCreator } from '../../store/modules/skill/action';

const Skills = (props) => {
    const contextData = useContext(Context);
    const theme = contextData.theme;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findDataAsyncActionCreator());
    }, []);

    return (
        <div className={theme !== 'dark' ? 'skill-list home-light bg-light' : 'skill-list home-dark bg-dark'}>
            <ScrollAnimation className="skills-animation-container" animateIn="fadeIn">
                <Container className="mt-5 mb-5">
                    <Col xs="12" md="12" className="text-center">
                        <h4>S K I L L &nbsp; L I S T</h4>
                    </Col>
                    <Col xs="12" md={{size:8, offset:2}}>
                        <SkillListAdd />
                        <SkillList/>
                    </Col>
                </Container>
            </ScrollAnimation>
        </div>
    )
};

export default Skills;