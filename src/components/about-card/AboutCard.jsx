import React from 'react';
import './AboutCard.css';
import {
    Container,
    Col,
    Row,
    Card,
    CardTitle,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPen } from '@fortawesome/free-solid-svg-icons';

const AboutCard = (props) => {
    return (
        <div className="about-card">
            <Container className="mt-4 mb-4">
                <Col md="12" className="py-4 text-center">
                    <h4>Hi, I'm <b>Eliot</b>. Nice to meet you.</h4>
                </Col>
                <Col md="12" className="py-4 text-center">
                    <p>Since beginning of my career, I've done some work for agencies, consulted for startups,
                        and collaborated with talented people to create digital products.
                        I'm creative, curious and perpetually working on improving my skills.
                    </p>
                </Col>
                <Col xs="12" md="12">
                    <Row>
                        <Col sm="12" md="12" className="mt-2 mb-2 mt-sm-2 mb-sm-0">
                            <Card body className="text-center">
                                <CardTitle className="row mt-2">
                                    <Col sm="12" md="6">
                                        <Col md="12"><FontAwesomeIcon className="db-cards-custom-title" icon={faCode} size="3x" /></Col>
                                        <Col md="12 mt-2"><b><i>Front-end</i></b>&nbsp; <i>Developer</i></Col>
                                    </Col>
                                    <Col sm="12" md="6">
                                        <Col md="12"><FontAwesomeIcon className="db-cards-custom-title" icon={faPen} size="3x" /></Col>
                                        <Col md="12 mt-2"><b><i>Designer</i></b></Col>
                                    </Col>
                                </CardTitle>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Container>
        </div>
    )
};

export default AboutCard;