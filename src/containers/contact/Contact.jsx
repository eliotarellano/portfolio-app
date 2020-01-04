import React, { useContext } from 'react';
import ContactCards from '../../components/contact-cards/ContactCards';
import Context from '../../context/Context';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';

const Contact = (props) => {
    const contextData = useContext(Context);
    const theme = contextData.theme;
    return (
        <div className={theme !== 'dark' ? 'home-light bg-light' : 'home-dark bg-dark'}>
            <ScrollAnimation className="skills-animation-container" animateIn="fadeIn">   
                <Container>
                    <Row>
                        <Col>
                            <ContactCards />
                        </Col>
                    </Row>
                </Container>
            </ScrollAnimation>
        </div>
    );
}
  
export default Contact;