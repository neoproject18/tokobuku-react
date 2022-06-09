import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
} from "reactstrap";
import { swal_alert_action, swal_confirm } from "../js/sweetshow";

export default function NavBar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    swal_alert_action(200, "Anda berhasil keluar", () => {
      navigate("/");
      navigate.router.replace("/");
    });
  };

  return (
    <div>
      <Navbar color="dark" dark expand="md" light>
        <NavbarBrand href="/home">reactstrap</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <Link to="/home" className="nav-link" aria-current="page">
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
            {/* <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
          </Nav>
          <NavbarText>
            <Link
              to=""
              onClick={() =>
                swal_confirm("Ingin keluar?", () => {
                  logout();
                })
              }
              className="nav-link"
              aria-current="page"
            >
              LOGOUT
            </Link>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}
