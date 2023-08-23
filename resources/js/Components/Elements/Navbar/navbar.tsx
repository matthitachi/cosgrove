import {Button, Container, Nav, Navbar, NavDropdown, Offcanvas} from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
import {useState} from "react";
import {useEffect} from "react";
import {useRef} from "react";

interface navbarProp {
    isDark? : boolean;
}

export default function ({isDark = false}:navbarProp) {
    const [scrollOpacity, setScrollOpacity] = useState(0);
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const navBarRef = useRef<HTMLElement | null>(null);
    const handleCloseOffcanvas = () => {
        setShowOffcanvas(!showOffcanvas); // Function to close the offcanvas
        console.log("iS IT closed!");
    };
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const opacity = Math.min(scrollY / 700, 1);
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
        <Navbar expand="lg" fixed={"top"} className={styles.navBar} ref={navBarRef}
                style={{
                    backgroundColor: `${(isDark)? `rgba(0,0,0)` :`rgba(0, 0, 0, ${scrollOpacity})`}`,
                    margin: `${(isDark || window.innerWidth < 500)? '0' :`0 ${100 * (1- scrollOpacity)}px`}`,
                    borderBottom: `${(isDark)?'none' :`1px solid rgba(255,255,255, ${1 - scrollOpacity})`}`
                }}
        >
            <Container className={styles.navContainer}>
                <Navbar.Brand href="/">
                    <img
                        className={styles.navBrandImg}
                        src="/assets/images/logo.png"
                        alt={""}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.toggleButton}
                               onClick={() => setIsOffcanvasOpen(!isOffcanvasOpen)}/>
                <Navbar.Collapse
                    id="basic-navbar-nav"
                    className={styles.navCollapse}
                    role={"parent"}
                >
                    <Nav className={`me-auto ${styles.Nav}  ${styles.navy}`}>
                        <Nav.Link href="/" className={styles.navLink}>
                            Home
                        </Nav.Link>
                        <Nav.Link href="/about" className={styles.navLink}>
                            About
                        </Nav.Link>
                        <Nav.Link href="/project-homes" className={styles.navLink}>
                            Our homes
                        </Nav.Link>
                        <Nav.Link href="/projects" className={styles.navLink}>
                            Projects
                        </Nav.Link>
                        <Nav.Link href="/contact" className={styles.navLink}>
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
