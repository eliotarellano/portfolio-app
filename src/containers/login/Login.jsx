import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import LoginForm from '../../components/login-form/LoginForm';

const Login = (props) => {
  return (
    <div className="login">
      <Header />
        <Container>
          <Row>
            <Col>
              <LoginForm {...props} />
            </Col>
          </Row>
        </Container>
      <Footer />
    </div>
  );
}
  
export default Login;