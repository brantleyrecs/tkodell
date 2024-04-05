/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav,
} from 'react-bootstrap';

export default function NoAuthNavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="nav">
      <Container className="nav">
        <Link passHref href="/">
          <Navbar.Brand>K<span>i</span>le</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/contact">
              <Nav.Link>Contact</Nav.Link>
            </Link>
            <Link passHref href="/discography">
              <Nav.Link>D<span>i</span>scography</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
