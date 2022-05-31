import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as e from "reactstrap";

export default class BootstrapComp extends Component {
  render() {
    return (
      <div>
        <e.Navbar color="dark" dark expand="md" light>
          <e.NavbarBrand href="/">reactstrap</e.NavbarBrand>
          <e.NavbarToggler onClick={function noRefCheck() {}} />
          <e.Collapse navbar>
            <e.Nav className="me-auto" navbar>
              <Link to="/" class="nav-link" aria-current="page">
                HOME
              </Link>
              <Link to="/about" class="nav-link" aria-current="page">
                ABOUT
              </Link>
              <Link to="/buku/list" class="nav-link" aria-current="page">
                DATA BUKU
              </Link>
              {/* <e.UncontrolledDropdown inNavbar nav>
                <e.DropdownToggle caret nav>
                  Options
                </e.DropdownToggle>
                <e.DropdownMenu right>
                  <e.DropdownItem>Option 1</e.DropdownItem>
                  <e.DropdownItem>Option 2</e.DropdownItem>
                  <e.DropdownItem divider />
                  <e.DropdownItem>Reset</e.DropdownItem>
                </e.DropdownMenu>
              </e.UncontrolledDropdown> */}
            </e.Nav>
            <e.NavbarText>Simple Text</e.NavbarText>
          </e.Collapse>
        </e.Navbar>
      </div>
    );
  }
}
