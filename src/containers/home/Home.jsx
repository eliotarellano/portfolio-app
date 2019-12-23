import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import UserCard from '../../components/user-card/UserCard';
import Skills from '../../components/skills/Skills';
import './Home.css';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

const Home = (props) => {
  return (
    <div className="home">
        <Header />
            <Container className="home-custom">
                <Row>
                <Col md="12" sm="12" className="custom-col-home-card">
                    <UserCard />
                </Col>
                <Col md="12" sm="12" className="custom-col-home-skills mt-2 m-b2">
                    <Skills />
                </Col>
                </Row>
            </Container>
        <Footer />
    </div>
  );
}
  
export default Home;