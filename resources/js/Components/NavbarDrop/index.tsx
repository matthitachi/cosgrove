import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
// @ts-ignore
import styles from "./styles.module.scss";

const AppNavbar = () => {
    const [scrollOpacity, setScrollOpacity] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const opacity = Math.min(scrollY / 300, 1);
            setScrollOpacity(opacity);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <Navbar
            expand="lg"
            fixed="top"
            className={`${styles.navBar} ${
                scrollOpacity === 1 ? styles.scrolled : ""
            }`}
            style={{ backgroundColor: `rgba(0, 0, 0, ${scrollOpacity})` }}
        >
            <Navbar.Brand href="/">Logo</Navbar.Brand>
            <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                onClick={toggleSidebar}
            />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className={`mx-auto ${styles.navLinks}`}>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <NavDropdown
                        title="Our Homes"
                        id="homes-dropdown"
                        show={isDropdownOpen}
                        onMouseEnter={toggleDropdown}
                        onMouseLeave={toggleDropdown}
                        onClick={toggleDropdown}
                    >
                        <NavDropdown.Item href="#chateau">
                            Château
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#villa">Villa</NavDropdown.Item>
                        {/* Add more items */}
                    </NavDropdown>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                <Button className={styles.navButton}>Book a Tour</Button>
            </Navbar.Collapse>
            {isSidebarOpen && (
                <div className={styles.sidebar}>
                    <Nav className={styles.sidebarNav}>
                        <Nav.Link href="#home" onClick={toggleSidebar}>
                            Home
                        </Nav.Link>
                        <Nav.Link href="#about" onClick={toggleSidebar}>
                            About
                        </Nav.Link>
                        <Nav.Link href="#projects" onClick={toggleSidebar}>
                            Projects
                        </Nav.Link>
                        {/* Add more items */}
                    </Nav>
                </div>
            )}
            <FaBars className={styles.hamburgerIcon} onClick={toggleSidebar} />
        </Navbar>
    );
};

export default AppNavbar;
