import React, { useState } from 'react';
import './Header.css';
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
import logo from '../../assets/images/eriottologo100.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

/**
 * Navbar
 * @version v1.0.0
 * 
 * @param {*} props 
 */
const Header = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header">
      <Navbar light expand="md" className="custom-navbar">
        <NavbarBrand className="pl-5" tag={RRNavLink} exact to="/">
          <img  
              alt=""
              src={logo}
              height="30"
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
                <NavLink 
                  tag={RRNavLink}
                  exact to="/"
                  activeClassName="active"
                >
                  {window.location.pathname === '/' ? '/ /' : ''}&nbsp; H O M E 
                </NavLink>
              </NavItem>
              <NavItem className="m-3">
                <NavLink 
                  tag={RRNavLink}
                  to="/about"
                  activeClassName="active"
                  
                >
                  {window.location.pathname === '/about' ? '/ /' : ''}&nbsp; A B O U T
                </NavLink>
              </NavItem>
              <NavItem className="m-3">
                <NavLink 
                  tag={RRNavLink}
                  to="/contact"
                  activeClassName="active"
                >
                  {window.location.pathname === '/contact' ? '/ /' : ''}&nbsp; C O N T A C T
                </NavLink>
              </NavItem>
              <NavItem className="m-3">
                <NavLink 
                  tag={RRNavLink}
                  to="/login"
                  activeClassName="active"
                >
                  {window.location.pathname === '/login' ? '/ /' : ''}&nbsp; L O G I N
                </NavLink>
              </NavItem>
            </Nav>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;