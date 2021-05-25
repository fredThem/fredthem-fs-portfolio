import React from "react";
import * as rbs from "react-bootstrap";
class AppNav extends React.Component {
  render() {
    return (
      <rbs.Navbar bg="light" expand="lg">
        <rbs.Navbar.Brand href="#home">React-Bootstrap</rbs.Navbar.Brand>
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
      </rbs.Navbar>
    );
  }
}

export default AppNav;
