import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import NotFoundComp from '../../components/not-found/NotFound';

const NotFound = (props) => {
    return (
      <div className="not-found">
        <Header />
          <Container>
            <Row>
              <Col className="mt-4">
                <NotFoundComp />
              </Col>
            </Row>
          </Container>
        <Footer />
      </div>
    );
  }
    
  export default NotFound;