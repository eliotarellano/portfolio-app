import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

const NotFound = (props) => {
    return (
      <div className="not-found">
        <Header />
          <Container>
            <Row>
              <Col>
                Not Found
              </Col>
            </Row>
          </Container>
        <Footer />
      </div>
    );
  }
    
  export default NotFound;