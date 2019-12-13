import React from 'react';
import './Footer.css';
import {
    Container,
    Row,
    Col,
  } from 'reactstrap';
import logo from '../../assets/images/kotodama100.png'

/**
 * Footer
 * @version v1.0.0
 * 
 * @param {*} props 
 */
const Footer = (props) => {
    return (
        <Container className="text-center mw-100 w-100 mt-4 mb-4 custom-footer">
        {/* custom-footer fixed-bottom */}
            <Row>    
                <Col xs="12" md="12" lg="12" className="mt-4">
                    <span>Copyright © 2019 Eliot Arellano.</span>
                </Col>
                {/* <Col xs="12" md="12" lg="12" className="mt-1">
                    <img  
                        alt=""
                        src={logo}
                        height="20"
                        className="mr-auto"
                    />
                </Col> */}
            </Row>        
        </Container>
    );
};

export default Footer;