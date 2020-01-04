import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './Skill.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import SkillList from '../../components/skill-list/SkillList';
import SkillListAdd from '../../components/skill-list-add/SkillListAdd';
import {
    Container,
    Col
} from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import { findDataAsyncActionCreator } from '../../store/modules/skill/action';

const Skills = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findDataAsyncActionCreator());
    }, []);

    return (
        <div className="skill-list">
            <Header />
            <ScrollAnimation className="skills-animation-container" animateIn="fadeIn">
                <Container className="mt-4">
                    <Col xs="12" md="12" className="text-center mt-5 mb-5">
                        <h4>S K I L L &nbsp; L I S T</h4>
                    </Col>
                    <Col xs="12" md={{size:8, offset:2}}>
                        <SkillListAdd />
                        <SkillList/>
                    </Col>
                </Container>
            </ScrollAnimation>
            <Footer />
        </div>
    )
};

export default Skills;