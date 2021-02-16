import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">HashBuckets</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Pic Some</Nav.Link>
                <Nav.Link href="/cart"><i class="fas fa-shopping-cart"></i></Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default NavBar;
