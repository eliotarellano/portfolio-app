import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

const Home = (props) => {
  return (
    <div className="login">
      <Header />
        <Container>
          <Row>
            <Col>
              Login
            </Col>
          </Row>
        </Container>
      <Footer />
    </div>
  );
}
  
export default Home;