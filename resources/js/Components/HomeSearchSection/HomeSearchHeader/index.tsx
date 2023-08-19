import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
// @ts-ignore
import closeSvg from "/public/assets/svg/close.svg";
// @ts-ignore
import searchSvg from "/public/assets/svg/search.svg";
import Buttons from "../DynamicButtons";

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
            <Container className={styles.searchContent}>
                <Row>
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
            </Container>
        </section>
    );
}
