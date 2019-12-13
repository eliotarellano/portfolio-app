import React, { useState } from 'react';
import './Navbar.css';
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
import logo from '../../assets/images/kotodama100.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

/**
 * Navbar
 * @version v1.0.0
 * 
 * @param {*} props 
 */
const NavBar = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar light expand="md" className="custom-navbar">
            <NavbarBrand className="pl-5" tag={RRNavLink} exact to="/">
                <img  
                    alt=""
                    src={logo}
                    height="35"
                    className="mr-auto"
                />
            </NavbarBrand>
            <Button outline color="danger" onClick={toggle} tag={NavbarToggler}>
                <FontAwesomeIcon icon={faBars} />
            </Button>
            <Collapse isOpen={isOpen} navbar >
                <Nav navbar className="mr-auto navbar" />
                <NavbarText>
                    <Nav className="pr-4">
                        <NavItem className="m-3">
                            <NavLink tag={RRNavLink} exact to="/" activeClassName="active">Home</NavLink>
                        </NavItem>
                        <NavItem className="m-3">
                            <NavLink tag={RRNavLink} to="/about">About</NavLink>
                        </NavItem>
                        <NavItem className="m-3">
                            <NavLink tag={RRNavLink} to="/contact">Contact</NavLink>
                        </NavItem>
                        <NavItem className="m-3">
                            <NavLink tag={RRNavLink} to="/login">Login</NavLink>
                        </NavItem>
                    </Nav>
                </NavbarText>
            </Collapse>
        </Navbar>
    );
};

export default NavBar;