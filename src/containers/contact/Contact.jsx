import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ContactCards from '../../components/contact-cards/ContactCards';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';

const Contact = (props) => {
  return (
    <div className="contact">
      <Header />
        <ScrollAnimation className="skills-animation-container" animateIn="fadeIn">   
            <Container>
                <Row>
                    <Col>
                        <ContactCards />
                    </Col>
                </Row>
            </Container>
        </ScrollAnimation>
      <Footer />
    </div>
  );
}
  
export default Contact;