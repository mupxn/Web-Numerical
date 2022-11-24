import React from "react";
import { Navbar,Container,Nav,Dropdown, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

var BrandStyle1={
    color: '#00000',
    fontSize: '100%',
}

export const NavBar = ()=>{
    return(
    <Navbar bg="light" sticky="top"expand="md" variant="light">
        <Container fluid>
            <Navbar.Brand><babel style={BrandStyle1}>Pimpakarn Project</babel></Navbar.Brand>
            <Navbar.Collapse >
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <NavDropdown title="Root of Equation" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/Bisection">Bisection</NavDropdown.Item>
                        <NavDropdown.Item href="/False-Position">False-Position</NavDropdown.Item>
                        <NavDropdown.Item href="/One-Point">One-Point</NavDropdown.Item>
                        <NavDropdown.Item href="/Newton-Raphson">Newton-Raphson</NavDropdown.Item>
                        <NavDropdown.Item href="/Secant">Secant</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Linear Algebra" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/Carmer">Carmer</NavDropdown.Item>
                        <NavDropdown.Item href="/GaussElimination">Gauss Elimination</NavDropdown.Item>
                        <NavDropdown.Item href="/MatrixInversion">Matrix Inversion</NavDropdown.Item>
                        <NavDropdown.Item href="/Jacobi">Jacobi</NavDropdown.Item>
                        <NavDropdown.Item href="/GaussSeidel">Gauss Seidel</NavDropdown.Item>
                        <NavDropdown.Item href="/Conjugate">Conjugate</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Interpolation and Extrapolation" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/Lagrange">Lagrange</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Regression" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/Linear">Linear</NavDropdown.Item>
                        <NavDropdown.Item href="/MultipleLinear">MultipleLinear</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}