import React, { useContext } from 'react';
import DbCards from '../../components/db-cards/DbCards';
import Context from '../../context/Context';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';

const HomePrivate = (props) => {
    const contextData = useContext(Context);
    const theme = contextData.theme;

    return (
        <div className={theme !== 'dark' ? 'home-private home-light bg-light' : 'home-private home-dark bg-dark'}>
            <ScrollAnimation className="skills-animation-container" animateIn="fadeIn">  
                <Container>
                    <Row>
                    <Col>
                        <DbCards />
                    </Col>
                    </Row>
                </Container>
            </ScrollAnimation>
        </div>
    );
}
  
export default HomePrivate;