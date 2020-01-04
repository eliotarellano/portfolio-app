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

    const [isOpen, setIsOpen] = useState(false);

    const theme = contextData.theme;

    const toggle = () => setIsOpen(!isOpen);

    const handlerOnClick = (event) => {
      event.stopPropagation();
    };

    const handlerLogOut = () => {
        dispatch(logoutActionCreator());
    }

  return (
    <div className="header">
        <Navbar
            expand="md"
            className={
                theme !== 'dark' 
                ? 'custom-navbar text-center navbar-light bg-light' 
                : 'custom-navbar text-center  navbar-dark bg-dark'
        }>
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
                    <NavItem className="m-3" onClick={handlerOnClick}>
                        <NavLink 
                            tag={RRNavLink}
                            exact to="/"
                            activeClassName="active"
                            disabled={window.location.pathname === '/' ? true : false}
                        >
                            {window.location.pathname === '/' ? '/ /' : '| |'}&nbsp; H O M E 
                        </NavLink>
                    </NavItem>
                    {!isLogin 
                    ?
                    <NavItem className="m-3" onClick={handlerOnClick}>
                        <NavLink 
                            tag={RRNavLink}
                            to="/about"
                            activeClassName="active"
                            disabled={window.location.pathname === '/about' ? true : false}
                        >
                        {window.location.pathname === '/about' ? '/ /' : '| |'}&nbsp; A B O U T
                        </NavLink>
                    </NavItem>
                    : ''
                    }
                    {!isLogin 
                    ?
                        <NavItem className="m-3" onClick={handlerOnClick}>
                            <NavLink 
                                tag={RRNavLink}
                                to="/contact"
                                activeClassName="active"
                                disabled={window.location.pathname === '/contact' ? true : false}
                            >
                                {window.location.pathname === '/contact' ? '/ /' : '| |'}&nbsp; C O N T A C T
                            </NavLink>
                        </NavItem>
                    : ''
                    }
                    {isLogin 
                    ?
                        <NavItem className="m-3" onClick={handlerOnClick}>
                            <NavLink 
                                tag={RRNavLink}
                                to="/private/skills"
                                activeClassName="active"
                                disabled={window.location.pathname === '/private/skills' ? true : false}
                            >
                                {window.location.pathname === '/private/skills' ? '/ /' : '| |'}&nbsp; S K I L L S
                            </NavLink>
                        </NavItem>
                    : ''
                    }
                    {isLogin 
                    ?
                        <NavItem className="m-3" onClick={handlerOnClick}>
                        <NavLink 
                            tag={RRNavLink}
                            exact to="/private/home"
                            activeClassName="active"
                            disabled={window.location.pathname === '/private/home' ? true : false}
                        >
                            {window.location.pathname === '/private/home' ? '/ /' : '| |'}&nbsp; P R O F I L E
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
                        <NavItem className="m-3" onClick={handlerOnClick}>
                            <NavLink 
                                tag={RRNavLink}
                                to="/login"
                                activeClassName="active"
                                disabled={window.location.pathname === '/login' ? true : false}
                            >
                            {window.location.pathname === '/login' ? '/ /' : '| |'}&nbsp; L O G I N 
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