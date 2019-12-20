import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

const About = (props) => {
  return (
    <div className="about">
      <Header />
        <Container>
          <Row>
            <Col>
              About
            </Col>
          </Row>
        </Container>
      <Footer />
    </div>
  );
}
  
export default About;