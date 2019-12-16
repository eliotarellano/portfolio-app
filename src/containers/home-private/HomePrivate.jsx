import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';
import { logoutActionCreator } from '../../store/modules/login/actions';

const HomePrivate = (props) => {
  const dispatch = useDispatch();

  const handlerLogOut = () => {
    dispatch(logoutActionCreator());
  }

  return (
    <div className="home-private">
      <Header />
        <Container>
          <Row>
            <Col>
              <Button onClick={handlerLogOut}>Cerrar Sesión</Button>
            </Col>
          </Row>
        </Container>
      <Footer />
    </div>
  );
}
  
export default HomePrivate;