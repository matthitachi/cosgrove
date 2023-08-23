import {
    Button,
    Container,
    Nav,
    Navbar,
    NavDropdown,
    Offcanvas,
} from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
import { useState, useEffect, useRef } from "react";

export default function () {
    const [scrollOpacity, setScrollOpacity] = useState(0);
    const [isProjectsHovered, setIsProjectsHovered] = useState(false);
    const [isHomesHovered, setIsHomesHovered] = useState(false);
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

                        <NavDropdown
                            title="Our homes"
                            id="homes-dropdown"
                            className={`${styles.navLink}`}
                        >
                            <div>
                                <NavDropdown.Item href="#home">
                                    Château
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#home">
                                    Villa
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#home">
                                    Oak
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#home">
                                    Oakville
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#home">
                                    Scarlet Oak
                                </NavDropdown.Item>
                            </div>
                            {/* DropDown Item 2 */}
                            <div>
                                <NavDropdown.Item href="#home">
                                    Acacia
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#home">
                                    Maple
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#home">
                                    Penthouse
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#home">
                                    Pine
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#home">
                                    Olive
                                </NavDropdown.Item>
                            </div>
                        </NavDropdown>

                        <NavDropdown
                            title="Projects"
                            id="projects-dropdown"
                            show={isProjectsHovered}
                            onMouseEnter={() => setIsProjectsHovered(true)}
                            onMouseLeave={() => setIsProjectsHovered(false)}
                            className={styles.navLink}
                        >
                            <div>
                                <NavDropdown.Item href="#projects">
                                    Neuvau
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#projects">
                                    The Châteaux
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#projects">
                                    Tetra
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#projects">
                                    Fourteen
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#projects">
                                    Smart Estate Wuye
                                </NavDropdown.Item>
                            </div>

                            <div>
                                <NavDropdown.Item href="#projects">
                                    Smart Estate Mabushi
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#projects">
                                    Smart City Katampe
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#projects">
                                    Smart Estate Guzape
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#projects">
                                    Smart Estate Wuse 2
                                </NavDropdown.Item>
                            </div>
                        </NavDropdown>

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
