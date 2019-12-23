import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Skills.css';
import {
    Container,
    Row,
    Col,
    Progress,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { findAllSkills } from '../../store/modules/skill/action';
import ScrollAnimation from 'react-animate-on-scroll';


const Skills = (props) => {

    const dispatch = useDispatch();
    const skillModule = useSelector(store => store.skills);

    useEffect(() => {
        dispatch(findAllSkills());
    }, []);

    return (
        <div className="skills mt-4 mb-4">
            <ScrollAnimation className="skills-animation-container" animateIn="fadeIn">        
                <Container>
                    <Row> 
                        <Col md={{size: 8, offset: 2}}>
                            <h4 className="py-4">S K I L L S</h4>
                            {skillModule.data.map(skill => (
                                <div key={skill.id}>
                                    <div className="form-inline mt-4">
                                    <Col md="6" xs="12">
                                        <span className="float-md-left">{skill.name}</span>
                                    </Col>
                                    <Col md="6" xs="12">
                                        <span className="float-md-right">{skill.percentage} %</span>
                                    </Col>
                                    </div>
                                    <Progress
                                        barClassName="progress-bar-custom"
                                        className="mt-1"
                                        value={skill.percentage}
                                    />
                                </div>
                            ))}
                            <Col md="12" className="mt-5">
                                <FontAwesomeIcon className="fa-custom-icon" icon={faCode} size="2x"/>
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </ScrollAnimation>
        </div>
    )
}

export default Skills;