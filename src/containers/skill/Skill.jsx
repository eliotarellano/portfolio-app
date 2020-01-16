import React from 'react';
import './Skill.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import SkillList from '../../components/skill-list/SkillList';
import {
    Container,
    Row,
    Col
  } from 'reactstrap';
  import ScrollAnimation from 'react-animate-on-scroll';

const Skills = (props) => {
    return (
        <div className="skill-list">
            <Header />
            <ScrollAnimation className="skills-animation-container" animateIn="fadeIn">
                <Container>
                    <Row>
                        <Col>
                            <SkillList />
                        </Col>
                    </Row>
                </Container>
            </ScrollAnimation>
            <Footer />
        </div>
    )
};

export default Skills;