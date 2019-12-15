import React, { useState } from 'react';
import './UserCard.css';
import { Container, Row, Col, Nav, NavItem, NavLink, Tooltip } from 'reactstrap';
import photo from '../../assets/images/eriottoimg.jpg';

const UserCard = (props) => {

    const [tooltipLinkedin, setTooltipLinkedin] = useState(false);
    const [tooltipGitHub, setTooltipGitHub] = useState(false);
    const [tooltipInstagram, setTooltipInstagram] = useState(false);

    const toggleLinkedin = () => setTooltipLinkedin(!tooltipLinkedin);
    const toggleGitHub = () => setTooltipGitHub(!tooltipGitHub);
    const toggleInstagram = () => setTooltipInstagram(!tooltipInstagram);

    return (
        <div className="user-card">
            <Container>
                <Row>
                    <Col className="user-card-image-wrapper">
                        <img src={photo} className="user-card-image" alt="author"/>
                    </Col>
                    <Col className="user-card-info">
                        <h1 className="user-card-h1">I'm <b>Eliot Arellano</b></h1>
                        <p className="user-card-p-dev">𝙁𝙧𝙤𝙣𝙩-𝙚𝙣𝙙&nbsp; 𝘋𝘦𝘷𝘦𝘭𝘰𝘱𝘦𝘳.</p>
                        <p className="user-card-p">Responsible, dynamic and creative professional, with team work skills, initiative to solve problems efficiently.</p>
                        <br/>
                        <Nav>
                            <NavItem>
                                <NavLink id="tooltip-linkedin" href="https://www.linkedin.com/in/eliot-arellano/" className="user-card-a fab fa-linkedin " />
                                <Tooltip placement="top" isOpen={tooltipLinkedin} target="tooltip-linkedin" toggle={toggleLinkedin} className="user-card-a-tooltip">
                                    Linkedin
                                </Tooltip>
                            </NavItem>
                            <NavItem>
                                <NavLink id="tooltip-github" href="https://github.com/eliotarellano" className="user-card-a fab fa-github-square " />
                                <Tooltip placement="top" isOpen={tooltipGitHub} target="tooltip-github" toggle={toggleGitHub} className="user-card-a-tooltip">
                                    GitHub
                                </Tooltip>
                            </NavItem>
                            <NavItem>
                                <NavLink id="tooltip-instagram" href="https://www.instagram.com/eliotarellano" className="user-card-a fab fa-instagram" />
                                <Tooltip placement="top" isOpen={tooltipInstagram} target="tooltip-instagram" toggle={toggleInstagram} className="user-card-a-tooltip">
                                    Instagram
                                </Tooltip>
                            </NavItem>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default UserCard;