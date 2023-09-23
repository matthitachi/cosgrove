import {Button, Col, Container, Nav, Navbar, NavDropdown, Offcanvas, Row} from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
import {useState} from "react";
import {useEffect} from "react";
import {useRef} from "react";
import {Link} from "@inertiajs/inertia-react";
import {router} from '@inertiajs/react'
import {projects, houseTypes} from "../../../Data/data";

interface navbarProp {
    isDark?: boolean;
}

export default function ({isDark = false}: navbarProp) {
    const [scrollOpacity, setScrollOpacity] = useState(0);
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const navBarRef = useRef<HTMLElement | null>(null);
    const [isProjectsHovered, setIsProjectsHovered] = useState(false);
    const [isHomesHovered, setIsHomesHovered] = useState(false);
    // @ts-ignore
    const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(
        null
    );
    const handleCloseOffcanvas = () => {
        setShowOffcanvas(!showOffcanvas);
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
        textDecoration: "none"
    };
    const handleMouseEnterHomes = () => {
        if (isProjectsHovered) {
            setIsProjectsHovered(false);
        }
        clearTimeout(hoverTimeout!);
        setHoverTimeout(setTimeout(() => setIsHomesHovered(true), 200));
    };

    const handleMouseLeaveHomes = () => {
        clearTimeout(hoverTimeout!);
        setHoverTimeout(setTimeout(() => setIsHomesHovered(false), 200));
    };

    const handleMouseEnterProjects = () => {
        clearTimeout(hoverTimeout!);
        if (isHomesHovered) {
            setIsHomesHovered(false)
        }
        setHoverTimeout(setTimeout(() => setIsProjectsHovered(true), 200));
    };

    const handleMouseLeaveProjects = () => {
        clearTimeout(hoverTimeout!);
        setHoverTimeout(setTimeout(() => setIsProjectsHovered(false), 200));
    };

    return (
        <Navbar expand="lg" fixed={"top"} className={styles.navBar} ref={navBarRef}
                style={{
                    backgroundColor: `${(isDark) ? `rgba(0, 0, 0)` : `rgba(0, 0, 0, ${scrollOpacity})`}`,
                    margin: `${(isDark || window.innerWidth < 500) ? ((window.innerWidth < 500) ? `0 ${4 * (1 - scrollOpacity)}px` : '0') : `0 ${100 * (1 - scrollOpacity)}px`}`,
                    borderBottom: `${(isDark) ? 'none' : `1px solid rgba(255,255,255, ${1 - scrollOpacity})`}`
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
                        {/*<Link href="/" className={styles.navLink}>*/}
                        {/*    Home*/}
                        {/*</Link>*/}
                        <Link href="/about" className={styles.navLink}>
                            About
                        </Link>

                        <NavDropdown
                            title="House Types"
                            id="homes-dropdown"
                            show={isHomesHovered}
                            onMouseEnter={handleMouseEnterHomes}
                            onMouseLeave={handleMouseLeaveHomes}
                            onClick={(e) => {
                                if(e.target.id == 'homes-dropdown') {
                                    router.get('/project-homes')
                                }
                            }}
                            className={`${styles.navLink}`}
                        >
                            <Row>
                                {
                                    houseTypes.map((item, index) =>

                                        (
                                            <Col xs={6} key={index}>
                                                <Link href={'/houses/' + item.slug}>
                                                    {item.name}
                                                </Link>
                                            </Col>
                                        ))

                                }
                            </Row>

                        </NavDropdown>

                        <NavDropdown
                            title="Projects"
                            id="projects-dropdown"
                            show={isProjectsHovered}
                            onMouseEnter={handleMouseEnterProjects}
                            onMouseLeave={handleMouseLeaveProjects}
                            // onClick={(e) => router.visit('/projects')}
                            onClick={(e) => {
                                if(e.target.id == 'projects-dropdown') {
                                    router.visit('/projects')
                                }
                            }}

                            className={styles.navLink}
                        >
                            <Row>
                                {
                                    projects.map((item, index) =>

                                        (
                                            <Col xs={6} key={index}>
                                                <Link href={'/projects/' + item.slug}>
                                                    {item.name}
                                                </Link>
                                            </Col>
                                        ))

                                }
                            </Row>
                        </NavDropdown>

                        <Link href="/contact" className={styles.navLink}>
                            Contact
                        </Link>
                    </Nav>
                    <Offcanvas
                        show={isOffcanvasOpen}
                        onHide={() => setIsOffcanvasOpen(false)}
                        placement="end"
                        className={styles.offCanvas}
                    >
                        <Offcanvas.Header
                            closeButton
                            className={`text-light ${styles.canvasClose}`}
                            style={{color: "white"}}
                        >
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            {/* Your Offcanvas content goes here */}
                            <Nav className={`me-auto ${styles.mobileLinks}`}>
                                <Nav.Link
                                    onClick={handleCloseOffcanvas}
                                    href="/"
                                    className={styles.mobileNav}
                                >
                                    Home
                                </Nav.Link>

                                <Nav.Link
                                    href="/about"
                                    className={styles.navLink}
                                    onClick={handleCloseOffcanvas}
                                >
                                    About
                                </Nav.Link>
                                {/* First Dropdown  */}
                                <NavDropdown
                                    title="Our Homes"
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
                                    href="/contact"
                                    className={styles.navLink}
                                >
                                    Contact
                                </Nav.Link>
                            </Nav>
                            <Link style={mobButtonStyles} href={'/contact'}>Book a Tour</Link>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Navbar.Collapse>
                <Link className={styles.navButton} href={'/contact'}>Book a Tour</Link>
            </Container>
        </Navbar>
    );
}
