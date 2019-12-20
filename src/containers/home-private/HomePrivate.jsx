import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';

const HomePrivate = (props) => {

  return (
    <div className="home-private">
      <Header />
        <Container>
          <Row>
            <Col>
              HOME PRIVATE
            </Col>
          </Row>
        </Container>
      <Footer />
    </div>
  );
}
  
export default HomePrivate;