import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.min.css'

function NavBar() {
    return (
        <Navbar bg="light" expand="lg" sticky="top" style={{ paddingLeft: "1rem" }}>
            <LinkContainer to="/" exact>
                <Navbar.Brand>Cryptid Tracker</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/cryptid" exact>
                        <Nav.Link>Cryptids</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/submit">
                        <Nav.Link>Submit</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;