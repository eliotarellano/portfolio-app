import React, { useContext } from 'react';
import './Footer.css';
import Context from '../../context/Context';
import {
    Container,
    Row,
    Col,
  } from 'reactstrap';
// import logo from '../../assets/images/kotodama100.png'

/**
 * Footer
 * @version v1.0.0
 * 
 * @param {*} props 
 */
const Footer = (props) => {
    const contextData = useContext(Context);
    const theme = contextData.theme;
    return (
        <div 
            className={
                theme !== 'dark' 
                ? 'footer footer-light bg-light' 
                : 'footer footer-dark bg-dark'
        }>        
            <Container className="text-center mw-100 w-100 pt-4 pb-4 custom-footer">
            {/* custom-footer fixed-bottom */}
                <Row>    
                    <Col xs="12" md="12" lg="12" className="">
                        <span>C O P Y R I G H T &nbsp; © &nbsp; 2 0 1 9</span>
                    </Col>
                    <Col xs="12" md="12" lg="12" className="">
                        エリオット &nbsp; ( &nbsp; E L I O T &nbsp;  / / &nbsp; A R E L L A N O &nbsp; )    
                    </Col>
                </Row>        
            </Container>
        </div>
    );
};

export default Footer;