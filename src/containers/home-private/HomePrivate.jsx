import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import DbCards from '../../components/db-cards/DbCards';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';

const HomePrivate = (props) => {

  return (
    <div className="home-private">
      <Header />
        <ScrollAnimation className="skills-animation-container" animateIn="fadeIn">  
          <Container>
            <Row>
              <Col>
                <DbCards />
              </Col>
            </Row>
          </Container>
        </ScrollAnimation>
      <Footer />
    </div>
  );
}
  
export default HomePrivate;