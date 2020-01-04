import React, { useContext } from 'react';
import Context from '../../context/Context';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import LoginForm from '../../components/login-form/LoginForm';
import ScrollAnimation from 'react-animate-on-scroll';

const Login = (props) => {
    const contextData = useContext(Context);
    const theme = contextData.theme;
    return (
        <div className={theme !== 'dark' ? 'home-light bg-light' : 'home-dark bg-dark'}>
            <ScrollAnimation className="skills-animation-container" animateIn="fadeIn">   
                <Container>
                    <Row>
                    <Col>
                        <LoginForm {...props} />
                    </Col>
                    </Row>
                </Container>
            </ScrollAnimation>
        </div>
    );
}
  
export default Login;