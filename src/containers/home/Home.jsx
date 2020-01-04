import React, { Component } from 'react';
import Context from '../../context/Context';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ToggleTheme from '../../components/toggle-theme/ToggleTheme';
import UserCard from '../../components/user-card/UserCard';
import Skills from '../../components/skills/Skills';
import './Home.css';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'light',
        };
    }

    toggleTheme = () => {
        this.setState({
            theme: this.state.theme !== 'dark' ? 'dark' : 'light'
        });
    }
    
    render() {
        const contextData = {
            theme: this.state.theme,
            toggler: this.toggleTheme,
        };
        return (
            <div className={this.state.theme !== 'dark' ? 'home-light bg-light' : 'home-dark bg-dark'}>
                    <Context.Provider value={contextData}>
                        <Header />
                        <ToggleTheme />
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
                        <Footer />
                    </Context.Provider>
            </div>
        );
    }
}
  
export default Home;