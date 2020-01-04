import React, { useState, useContext } from 'react';
import './UserCard.css';
import Context from '../../context/Context';
import { 
    Container,
    Row,
    Col,
    Nav,
    NavItem,
    NavLink,
    Tooltip,
} from 'reactstrap';
import photo from '../../assets/images/eriottoimg.png';
import TypedTitle from '../typed-title/TypedTitle';

const UserCard = (props) => {
    const contextData = useContext(Context);
    const theme = contextData.theme;
    const [tooltipLinkedin, setTooltipLinkedin] = useState(false);
    const [tooltipGitHub, setTooltipGitHub] = useState(false);
    // const [tooltipInstagram, setTooltipInstagram] = useState(false);
    const [tooltipBehance, setTooltipBehance] = useState(false);

    const toggleLinkedin = () => setTooltipLinkedin(!tooltipLinkedin);
    const toggleGitHub = () => setTooltipGitHub(!tooltipGitHub);
    // const toggleInstagram = () => setTooltipInstagram(!tooltipInstagram);
    const toggleBehance = () => setTooltipBehance(!tooltipBehance);

    return (
        <div className="user-card" >
            <Container>
                <Row className="text-center">
                    <Col sm="12" md="6" className="user-card-image-wrapper">
                        <img src={photo} className="user-card-image" alt="author"/>
                    </Col>
                    <Col sm="12" md="6" className="user-card-info">
                        <TypedTitle />
                        <p className="user-card-p-dev">𝙁𝙧𝙤𝙣𝙩-𝙚𝙣𝙙&nbsp; 𝘋𝘦𝘷𝘦𝘭𝘰𝘱𝘦𝘳.</p>
                        <p className="user-card-p">Responsible, dynamic and creative professional, with team work skills and initiative to solve problems efficiently.</p>
                        <br/>
                        <Nav className="">
                            <NavItem className="user-card-container-a">
                                <NavLink
                                    id="tooltip-github"
                                    target="_blank"
                                    href="https://github.com/eliotarellano" 
                                    className={
                                        theme !== 'dark'
                                        ? 'user-card-a-light fab fa-github-square'
                                        : 'user-card-a-dark fab fa-github-square'
                                    } 
                                />
                                <Tooltip placement="top" isOpen={tooltipGitHub} target="tooltip-github" toggle={toggleGitHub}>
                                    GitHub
                                </Tooltip>
                            </NavItem>
                            <NavItem className="user-card-container-a">
                                <NavLink
                                    id="tooltip-linkedin"
                                    target="_blank"
                                    href="https://www.linkedin.com/in/eliot-arellano/"
                                    className={
                                        theme !== 'dark'
                                        ? 'user-card-a-light fab fa-linkedin'
                                        : 'user-card-a-dark fab fa-linkedin'
                                    } 
                                />
                                <Tooltip placement="top" isOpen={tooltipLinkedin} target="tooltip-linkedin" toggle={toggleLinkedin}>
                                    Linkedin
                                </Tooltip>
                            </NavItem>
                            <NavItem className="user-card-container-a">
                                <NavLink
                                    id="tooltip-behance"
                                    target="_blank"
                                    href="https://www.behance.net/eliotarellano"
                                    className={
                                        theme !== 'dark'
                                        ? 'user-card-a-light fab fa-behance-square'
                                        : 'user-card-a-dark fab fa-behance-square'
                                    } 
                                />
                                <Tooltip placement="top" isOpen={tooltipBehance} target="tooltip-behance" toggle={toggleBehance}>
                                    Behance
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

// <NavItem className="user-card-container-a">
// <NavLink id="tooltip-instagram" target="_blank" href="https://www.instagram.com/eliotarellano" className="user-card-a fab fa-instagram" />
// <Tooltip placement="top" isOpen={tooltipInstagram} target="tooltip-instagram" toggle={toggleInstagram}>
//     Instagram
// </Tooltip>
// </NavItem>