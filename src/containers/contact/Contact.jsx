import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

const Contact = (props) => {
  return (
    <div className="contact">
      <Header />
        <Container>
          <Row>
            <Col>
              Contact
            </Col>
          </Row>
        </Container>
      <Footer />
    </div>
  );
}
  
export default Contact;