import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

const HomePrivate = (props) => {
  return (
    <div className="home-private">
      <Header />
        <Container>
          <Row>
            <Col>
              Home Private
            </Col>
          </Row>
        </Container>
      <Footer />
    </div>
  );
}
  
export default HomePrivate;