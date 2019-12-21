import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import LoginForm from '../../components/login-form/LoginForm';
import ScrollAnimation from 'react-animate-on-scroll';

const Login = (props) => {
  return (
    <div className="login">
      <Header />
        <ScrollAnimation className="skills-animation-container" animateIn="fadeIn">   
          <Container>
            <Row>
              <Col>
                <LoginForm {...props} />
              </Col>
            </Row>
          </Container>
        </ScrollAnimation>
      <Footer />
    </div>
  );
}
  
export default Login;