import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import DbCards from '../../components/db-cards/DbCards';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

const HomePrivate = (props) => {

  return (
    <div className="home-private">
      <Header />
        <Container>
          <Row>
            <Col>
              <DbCards />
            </Col>
          </Row>
        </Container>
      <Footer />
    </div>
  );
}
  
export default HomePrivate;