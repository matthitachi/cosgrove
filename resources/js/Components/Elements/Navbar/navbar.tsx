import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";

export default function () {
    return (
        <Navbar expand="lg" fixed={"top"} className={styles.navBar}>
            <Container className={styles.navContainer}>
                <Navbar.Brand href="/">
                    <img
                        className={styles.navBrandImg}
                        src="/assets/images/logo.png"
                        alt={""}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                    id="basic-navbar-nav"
                    className={styles.navCollapse}
                    role={"parent"}
                >
                    <Nav className={`me-auto ${styles.Nav}`}>
                        <Nav.Link href="#link" className={styles.navLink}>
                            Home
                        </Nav.Link>
                        <Nav.Link href="#link" className={styles.navLink}>
                            About
                        </Nav.Link>
                        <Nav.Link href="#link" className={styles.navLink}>
                            Out homes
                        </Nav.Link>
                        <Nav.Link href="#link" className={styles.navLink}>
                            Projects
                        </Nav.Link>
                        <Nav.Link href="#link" className={styles.navLink}>
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <button className={styles.navButton}>Book a Tour</button>
            </Container>
        </Navbar>
    );
}
