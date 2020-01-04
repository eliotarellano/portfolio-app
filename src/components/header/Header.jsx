import React, { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Header.css';
import Context from '../../context/Context';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Button,
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import logo from '../../assets/images/eriottologo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { logoutActionCreator } from '../../store/modules/login/actions';

const Header = (props) => {
    const dispatch = useDispatch();
    const isLogin = useSelector(store => store.login.isLogin);
    const contextData = useContext(Context);
    const theme = contextData.theme;

    const [isOpen, setIsOpen] = useState(false);
    const [location, setLocation] = useState(window.location.pathname);

    const toggle = () => setIsOpen(!isOpen);

    const handlerOnClick = (event) => {
        const path = event.target.getAttribute('id');
        setLocation(path)
    };

    const handlerLogOut = () => {
        dispatch(logoutActionCreator());
    }

  return (
    <div className="header">
        <Navbar expand="md" className={theme !== 'dark' ? 'custom-navbar text-center navbar-light bg-light' : 'custom-navbar text-center  navbar-dark bg-dark'}>
            <NavbarBrand className="pl-5" tag={RRNavLink} exact to="/">
                <img  
                    alt=""
                    src={logo}
                    height="30"
                    className="mr-auto header-logo"
                />
            </NavbarBrand>
            <Button outline color="danger" onClick={toggle} tag={NavbarToggler} className="navbar-btn-collapse">
                <FontAwesomeIcon icon={faBars} />
            </Button>
            <Collapse isOpen={isOpen} navbar>
            <Nav navbar className="mr-auto navbar"/>
            <NavbarText>
                <Nav className="pr-4">
                    <NavItem className="m-3">
                        <NavLink 
                            tag={RRNavLink}
                            exact to="/"
                            activeClassName="active"
                            id={'/'}
                            onClick={handlerOnClick}
                        >
                            {location === '/' ? '/ /' : '| |'}&nbsp; H O M E 
                        </NavLink>
                    </NavItem>
                    {!isLogin 
                    ?
                    <NavItem className="m-3">
                        <NavLink 
                            tag={RRNavLink}
                            to="/about"
                            activeClassName="active"
                            id={'/about'}
                            onClick={handlerOnClick}
                        >
                        {location === '/about' ? '/ /' : '| |'}&nbsp; A B O U T
                        </NavLink>
                    </NavItem>
                    : ''
                    }
                    {!isLogin 
                    ?
                        <NavItem className="m-3">
                            <NavLink 
                                tag={RRNavLink}
                                to="/contact"
                                activeClassName="active"
                                id={'/contact'}
                                onClick={handlerOnClick}
                            >
                                {location === '/contact' ? '/ /' : '| |'}&nbsp; C O N T A C T
                            </NavLink>
                        </NavItem>
                    : ''
                    }
                    {isLogin 
                    ?
                        <NavItem className="m-3">
                            <NavLink 
                                tag={RRNavLink}
                                to="/private/skills"
                                activeClassName="active"
                                id={'/private/skills'}
                                onClick={handlerOnClick}
                            >
                                {location === '/private/skills' ? '/ /' : '| |'}&nbsp; S K I L L S
                            </NavLink>
                        </NavItem>
                    : ''
                    }
                    {isLogin 
                    ?
                        <NavItem className="m-3">
                        <NavLink 
                            tag={RRNavLink}
                            exact to="/private/home"
                            activeClassName="active"
                            id={'/private/home'}
                            onClick={handlerOnClick}
                        >
                            {location === '/private/home' ? '/ /' : '| |'}&nbsp; P R O F I L E
                        </NavLink>
                    </NavItem> 
                    : ''
                    }
                    {isLogin 
                        ?
                        <NavItem className="m-3">
                            <NavLink 
                                tag={RRNavLink}
                                to="/login"
                                activeClassName="active"
                                onClick={handlerLogOut}
                            >
                                &nbsp; | |&nbsp; L O G O U T
                            </NavLink>
                        </NavItem>
                        :
                        <NavItem className="m-3">
                            <NavLink 
                                tag={RRNavLink}
                                to="/login"
                                activeClassName="active"
                                id={'/login'}
                                onClick={handlerOnClick}
                            >
                            {location === '/login' ? '/ /' : '| |'}&nbsp; L O G I N 
                            </NavLink>
                        </NavItem>
                    }
                </Nav>
            </NavbarText>
            </Collapse>
        </Navbar>
    </div>
  );
};

export default Header;