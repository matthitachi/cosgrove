import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import * as React from "react";
// @ts-ignore
import closeSvg from "/public/assets/svg/close.svg";
// @ts-ignore
import searchSvg from "/public/assets/svg/search.svg";
// @ts-ignore
import Download from "/public/assets/images/icons/downloadnew.png";
import HouseTypes from "../../ProjectDetailsPage/HouseTypes";

export default function () {
    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    const [activeButtonIndex, setActiveButtonIndex] = React.useState(0);
    const buttonLabels = [
        {
            name: "Show All",
        },
        {
            name: "Projects",
        },
        {
            name: "House Types",
        },
        {
            name: "Brochures",
        },
        {
            name: " Blog ",
        },
        {
            name: "Press",
        },
    ];

    const handleButtonClick = (index) => {
        setActiveButtonIndex(index);
    };

    const back = {
        background: "#FBBD00",
    };

    return (
        <section className={styles.searchHeader}>
            <div className={styles.searchBar}>
                <form action="">
                    <input type="text" placeholder={"4 Bedroom"} />
                    <img
                        src={searchSvg}
                        alt="Search SVG"
                        className={styles.searchSvg}
                    />
                    <img
                        src={closeSvg}
                        alt="Close SVG"
                        className={styles.searchClose}
                    />
                </form>
            </div>
            <Container>
                <Row className={styles.searchContent} data-aos="fade-up">
                    <Col sm={12} className={styles.searchResult}>
                        <div>
                            <h4>Showing results for “4 Bedroom”</h4>
                            <p>1-15 of 15</p>
                        </div>
                    </Col>
                    <Col sm={12}>
                        <div className={styles.dynamicButtonContainer}>
                            {buttonLabels.map((label, index) => (
                                <button
                                    key={index}
                                    className={`${styles.dynamicButton} ${
                                        index === 0 ? `${back}` : ""
                                    }`}
                                    onClick={() => handleButtonClick(index)}
                                >
                                    {label.name}
                                </button>
                            ))}
                        </div>
                    </Col>
                </Row>
                <div className={styles.searchHouse}>
                    <HouseTypes headerContent="Projects (6 results)" />
                </div>

                <div className={styles.searchHouse}>
                    <HouseTypes headerContent="House Types (4 results)" />
                </div>

                <Row className={styles.searchBrochure}>
                    <Col data-aos="fade-right">
                        <h4>Brochures (3 results)</h4>
                        <div>
                            <a href="">Cosgrove 2020 Brochure.pdf</a>
                            <span>
                                <img src={Download} alt="" />
                            </span>
                        </div>

                        <div>
                            <a href="">Tetra By Cosgrove Brochure.pdf</a>
                            <span>
                                <img src={Download} alt="" />
                            </span>
                        </div>
                        <div>
                            <a href="">Cosgrove Smart Estate Wuye</a>
                            <span>
                                <img src={Download} alt="" />
                            </span>
                        </div>
                    </Col>
                </Row>
                <Row
                    className={styles.searchBrochure}
                    style={{ marginBottom: "2rem", padding: "1rem 0" }}
                >
                    <Col data-aos="fade-right">
                        Press (1 result)
                        <div>
                            <a href="">
                                Cosgrove Completes 4 Bedroom apartment complex
                                in Asokoro - ThisDay
                            </a>
                            <span>
                                <img src={Download} alt="" />
                            </span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col
                        className={styles.searchPagination}
                        data-aos="fade-left"
                    >
                        <div></div>
                        <div>
                            <div>
                                <button
                                    className={styles.pageBut}
                                    style={{ background: "#FBBD00" }}
                                >
                                    1
                                </button>
                                <button className={styles.pageBut}>2</button>
                                <button className={styles.pageBut}>3</button>
                                <button className={styles.pageBut}>4</button>
                                <button className={styles.pageBut}>5</button>
                            </div>
                            <button className={styles.nxt}>
                                Previous | Next
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
