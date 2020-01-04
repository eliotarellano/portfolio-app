import React, { useContext } from 'react';
import Context from '../../context/Context';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import NotFoundComp from '../../components/not-found/NotFound';
import ScrollAnimation from 'react-animate-on-scroll';

const NotFound = (props) => {
    const contextData = useContext(Context);
    const theme = contextData.theme;
    return (
        <div className={theme !== 'dark' ? 'not-found home-light bg-light' : 'not-found home-dark bg-dark'}>
            <ScrollAnimation className="skills-animation-container" animateIn="fadeIn">  
                <Container>
                    <Row>
                    <Col className="mt-4 mb-4 text-center">
                        <NotFoundComp />
                    </Col>
                    </Row>
                </Container>
            </ScrollAnimation>
        </div>
    );
  }
    
  export default NotFound;