import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
// @ts-ignore
import closeSvg from "/public/assets/svg/close.svg";
// @ts-ignore
import searchSvg from "/public/assets/svg/search.svg";
// @ts-ignore
import Download from "/public/assets/svg/download.svg";
import HouseTypes from "../../ProjectDetailsSection/HouseTypes";

export default function () {
    const [activeButtonIndex, setActiveButtonIndex] = React.useState(0);
    const buttonLabels = [
        "Show All",
        "Projects",
        "House Types",
        "Brochures",
        "Blog",
        "Press",
    ];

    const handleButtonClick = (index) => {
        setActiveButtonIndex(index);
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
                <Row className={styles.searchContent}>
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
                                        activeButtonIndex === index
                                            ? "active"
                                            : ""
                                    }`}
                                    onClick={() => handleButtonClick(index)}
                                >
                                    {label}
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
                    <Col>
                        <h4>Brochures (3 results)</h4>
                        <div>
                            <a href="">Cosgrove 2020 Brochure.pdf</a>
                        </div>

                        <div>
                            <a href="">Tetra By Cosgrove Brochure.pdf</a>
                        </div>
                        <div>
                            <a href="">Cosgrove Smart Estate Wuye</a>
                        </div>
                    </Col>
                </Row>
                <Row
                    className={styles.searchBrochure}
                    style={{ marginBottom: "2rem", padding: "1rem 0" }}
                >
                    <Col>
                        Press (1 result)
                        <div>
                            <a href="">
                                Cosgrove Completes 4 Bedroom apartment complex
                                in Asokoro - ThisDay
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
