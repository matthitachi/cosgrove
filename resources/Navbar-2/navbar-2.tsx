import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
import { useState, useEffect, useRef } from "react";

export default function () {
    const [scrollOpacity, setScrollOpacity] = useState(0);
    const navBarRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const opacity = Math.min(scrollY / 300, 1);
            setScrollOpacity(opacity);

            if (navBarRef.current) {
                // Check if the ref is available
                if (scrollY > 100) {
                    navBarRef.current.classList.add("scrolled");
                } else {
                    navBarRef.current.classList.remove("scrolled");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Navbar
            ref={navBarRef}
            expand="lg"
            fixed={"top"}
            className={styles.navBar}
            style={{ backgroundColor: `rgba(0, 0, 0, ${scrollOpacity})` }}
        >
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
                            Our homes
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
