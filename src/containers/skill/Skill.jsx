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

const Skills = (props) => {
    return (
        <div className="skill-list">
            <Header />
            <Container>
                <Row>
                    <Col>
                        <SkillList />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
};

export default Skills;