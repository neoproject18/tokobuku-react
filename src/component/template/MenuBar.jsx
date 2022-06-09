import { Button } from "bootstrap";
import React, { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
} from "reactstrap";
import { AuthContext } from "../../App";

export default function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const { state, dispatch } = useContext(AuthContext);

  return (
    <Fragment>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">TOKOBUKU</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse navbar isOpen={isOpen}>
          <Nav className="me-auto" navbar>
            <Link to="/" className="nav-link" aria-current="page">
              HOME
            </Link>
            <Link to="/about" className="nav-link" aria-current="page">
              ABOUT
            </Link>
            <Link to="/buku/list" className="nav-link" aria-current="page">
              DATA BUKU
            </Link>
            <Link to="/kelas" className="nav-link" aria-current="page">
              KELAS
            </Link>
            <Link to="/hooks" className="nav-link" aria-current="page">
              HOOK
            </Link>
            <Link to="/reducer" className="nav-link" aria-current="page">
              REDUCER
            </Link>
          </Nav>
          <NavbarText>
            {state.isAuthenticated && <Link>LOGOUT</Link>}
          </NavbarText>
        </Collapse>
      </Navbar>
    </Fragment>
  );
}
