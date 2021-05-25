import React from "react";
import PropTypes from "prop-types";
import * as rbs from "react-bootstrap";
// import { Button } from "./Button";
import styles from "./Header.module.css";
import BrandLogoType from "./BrandLogo";

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <rbs.Navbar bg="light" expand="lg">
      <rbs.Navbar.Brand href="#home">
        <BrandLogoType />
      </rbs.Navbar.Brand>
      <rbs.Navbar.Toggle aria-controls="basic-navbar-nav" />
      <rbs.Navbar.Collapse id="basic-navbar-nav">
        <rbs.Nav className="mr-auto">
          <rbs.Nav.Link href="#home">Home</rbs.Nav.Link>
          <rbs.Nav.Link href="#link">Link</rbs.Nav.Link>
          <rbs.NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <rbs.NavDropdown.Item href="#action/3.1">
              Action
            </rbs.NavDropdown.Item>
            <rbs.NavDropdown.Item href="#action/3.2">
              Another action
            </rbs.NavDropdown.Item>
            <rbs.NavDropdown.Item href="#action/3.3">
              Something
            </rbs.NavDropdown.Item>
            <rbs.NavDropdown.Divider />
            <rbs.NavDropdown.Item href="#action/3.4">
              Separated link
            </rbs.NavDropdown.Item>
          </rbs.NavDropdown>
        </rbs.Nav>
        <rbs.Form inline>
          <rbs.FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
          <rbs.Button variant="outline-success">Search</rbs.Button>
        </rbs.Form>
      </rbs.Navbar.Collapse>
      <div>
        {user ? (
          <rbs.Button size="sm" onClick={onLogout} variant="primary">
            Log out
          </rbs.Button>
        ) : (
          <>
            <rbs.Button
              size="sm"
              onClick={onLogin}
              value="Log in"
              type="button"
            >
              Log in
            </rbs.Button>
            <rbs.Button
              variant="outline-primary"
              size="sm"
              onClick={onCreateAccount}
              value="Sign up"
              type="button"
            >
              Sign up
            </rbs.Button>
          </>
        )}
      </div>
    </rbs.Navbar>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
