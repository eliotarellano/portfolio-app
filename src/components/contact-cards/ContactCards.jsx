import React, { useContext } from 'react';
import './ContactCards.css';
import {
    Container,
    Col,
    Row,
    Card,
    CardTitle,
} from 'reactstrap';
import Context from '../../context/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = (props) => {
    const contextData = useContext(Context);
    const theme = contextData.theme;

    return (
        <div className="contact-cards">
            <Container className="mt-4 mb-4">
                <Col className="py-4 text-center">
                    <h4>C O N T A C T</h4>
                    <span>G E T &nbsp; I N &nbsp; T O U C H</span>
                </Col>
                <Col xs="12" md={{size: 12}}>
                    <Row>
                        <Col sm="6" md={{size: 3, offset: 2}} className="mt-2 mb-2 mt-sm-2 mb-sm-0">
                            <Card body>
                                <CardTitle className="text-center">
                                    <FontAwesomeIcon className="db-cards-custom-title" icon={faPhone} size="3x" />
                                </CardTitle>
                            </Card>
                            <Col className="mt-4 text-center">
                                <a className={theme === 'light' ? 'custom-a-light' : 'custom-a-dark'} href="tel:+56962399504">+56 9 6239 9504</a>
                            </Col>
                        </Col>
                        <Col sm="6" md={{size: 3, offset: 2}} className=" mt-2 mb-2 mt-sm-2 mb-sm-0">
                            <Card body>
                                <CardTitle className="text-center">
                                    <FontAwesomeIcon className="db-cards-custom-title" icon={faEnvelope} size="3x" />
                                </CardTitle>
                            </Card>
                            <Col className="mt-4 text-center">
                                <a className={theme === 'light' ? 'custom-a-light' : 'custom-a-dark'}  href="mailto:contacto@eliotarellano.com">contacto@eliotarellano.com</a>
                            </Col>
                        </Col>
                    </Row>
                </Col>
            </Container>
        </div>
    );
}
  
export default Contact;