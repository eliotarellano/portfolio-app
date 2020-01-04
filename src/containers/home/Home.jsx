import React, { Component } from 'react';
import Context from '../../context/Context';
import UserCard from '../../components/user-card/UserCard';
import Skills from '../../components/skills/Skills';
import './Home.css';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

class Home extends Component {
    static contextType = Context;
    render() {
        return (
            <div className={this.context.theme !== 'dark' ? 'home-light bg-light' : 'home-dark bg-dark'}>
                {/* <Header /> */}
                <Container className="home-custom">
                    <Row>
                        <Col md="12" sm="12" className="custom-col-home-card">
                            <UserCard />
                        </Col>
                        <Col md="12" sm="12" className="custom-col-home-skills">
                            <Skills />
                        </Col>
                    </Row>
                </Container>
                {/* <Footer /> */}
            </div>
        );
    }
}
  
export default Home;