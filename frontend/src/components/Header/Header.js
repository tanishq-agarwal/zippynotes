import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar bg="primary" expand="lg" variant='dark'>
                <Container>
                    <Navbar.Brand href="/">Zippy Notes</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className='m-auto'>
                            <Form className="d-flex ml-auto">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                            </Form>
                        </Nav>
                        <Nav>

                            <Nav.Link href="/mynotes">My notes</Nav.Link>
                            <NavDropdown title="Tanishq Agarwal" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;