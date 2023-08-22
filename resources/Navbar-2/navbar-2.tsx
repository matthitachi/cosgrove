import {
    Button,
    Container,
    Nav,
    Navbar,
    NavDropdown,
    Offcanvas,
} from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
// @ts-ignore
import styles from "./styles.module.scss";
// @ts-ignore
import closeSvg from "/public/assets/svg/close.svg";
import * as React from "react";
import { useState, useEffect, useRef } from "react";

export default function () {
    const [scrollOpacity, setScrollOpacity] = useState(0);
    const [isProjectsHovered, setIsProjectsHovered] = useState(false);
    const [isHomesHovered, setIsHomesHovered] = useState(false);
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    // @ts-ignore
    const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(
        null
    );

    const navBarRef = useRef<HTMLElement | null>(null);

    const handleCloseOffcanvas = () => {
        setShowOffcanvas(!showOffcanvas); // Function to close the offcanvas
        console.log("iS IT closed!");
    };

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

    const handleMouseEnterHomes = () => {
        clearTimeout(hoverTimeout!);
        setHoverTimeout(setTimeout(() => setIsHomesHovered(true), 200));
    };

    const handleMouseLeaveHomes = () => {
        clearTimeout(hoverTimeout!);
        setHoverTimeout(setTimeout(() => setIsHomesHovered(false), 200));
    };

    const handleMouseEnterProjects = () => {
        clearTimeout(hoverTimeout!);
        setHoverTimeout(setTimeout(() => setIsProjectsHovered(true), 400));
    };

    const handleMouseLeaveProjects = () => {
        clearTimeout(hoverTimeout!);
        setHoverTimeout(setTimeout(() => setIsProjectsHovered(false), 400));
    };

    const mobButtonStyles = {
        borderRadius: "10px",
        border: "1px solid #FBBD00",
        background: "transparent",
        color: "#FBBD00",
        fontFamily: "Inter, serif",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal",
        padding: "5px 15px",
        marginTop: "1.5rem",
    };

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
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={() => setIsOffcanvasOpen(!isOffcanvasOpen)}
                />
                <Navbar.Collapse
                    id="basic-navbar-nav"
                    className={styles.navCollapse}
                    role={"parent"}
                >
                    <Nav className={`me-auto ${styles.Nav} ${styles.navy}`}>
                        <Nav.Link href="#link" className={styles.navLink}>
                            Home
                        </Nav.Link>
                        <Nav.Link href="#link" className={styles.navLink}>
                            About
                        </Nav.Link>

                        <NavDropdown
                            title="Our homes"
                            id="homes-dropdown"
                            show={isHomesHovered}
                            onMouseEnter={handleMouseEnterHomes}
                            onMouseLeave={handleMouseLeaveHomes}
                            onClick={(e) => e.preventDefault()}
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
                            onMouseEnter={handleMouseEnterProjects}
                            onMouseLeave={handleMouseLeaveProjects}
                            onClick={(e) => e.preventDefault()}
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
                    <Offcanvas
                        show={isOffcanvasOpen}
                        onHide={() => setIsOffcanvasOpen(false)}
                        placement="end"
                        className={styles.offcanvas}
                    >
                        <Offcanvas.Header
                            closeButton
                            className="text-light"
                            style={{ color: "white" }}
                        >
                            <Offcanvas.Title></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            {/* Your Offcanvas content goes here */}
                            <Nav className={`me-auto ${styles.mobileLinks}`}>
                                <Nav.Link
                                    onClick={handleCloseOffcanvas}
                                    href="#link"
                                    className={styles.mobileNav}
                                >
                                    Home
                                </Nav.Link>

                                <Nav.Link
                                    href="#link"
                                    className={styles.navLink}
                                    onClick={handleCloseOffcanvas}
                                >
                                    About
                                </Nav.Link>
                                {/* First Dropdown  */}
                                <NavDropdown
                                    title="Our homes"
                                    id="homes-dropdown"
                                    className={`${styles.navLink}`}
                                >
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

                                    {/* DropDown Item 2 */}
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
                                </NavDropdown>
                                {/* Second Dropdown  */}
                                <NavDropdown
                                    title="Projects"
                                    id="projects-dropdown"
                                    className={styles.navLink}
                                >
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
                                </NavDropdown>
                                <Nav.Link
                                    href="#link"
                                    className={styles.navLink}
                                >
                                    Contact
                                </Nav.Link>
                            </Nav>
                            <button style={mobButtonStyles}>Book a Tour</button>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Navbar.Collapse>
                <button className={styles.navButton}>Book a Tour</button>
            </Container>
        </Navbar>
    );
}

// check is code for me and  help me very why there's a glitch when i hover on the dropdown
