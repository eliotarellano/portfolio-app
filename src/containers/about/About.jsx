import React, { useContext } from 'react';
import AboutCard from '../../components/about-card/AboutCard';
import Context from '../../context/Context';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';

const About = (props) => {
    const contextData = useContext(Context);
    const theme = contextData.theme;
    return (
        <div className={theme !== 'dark' ? 'home-light bg-light' : 'home-dark bg-dark'}>
            <ScrollAnimation className="skills-animation-container" animateIn="fadeIn">  
                <Container>
                    <Row>
                        <Col>
                            <AboutCard />
                        </Col>
                    </Row>
                </Container>
            </ScrollAnimation>
        </div>
    );
}
  
export default About;