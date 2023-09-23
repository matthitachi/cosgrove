import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import styles from "/resources/js/Components/ProjectTechHome/styles.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import * as React from "react";
// @ts-ignore

export default function () {
    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <section className={styles.contentTop}>
            <Container>
                <Row className={`mb-5`}>
                    <Col md={12} lg={5} data-aos="fade-right">
                        <h4 className={"subHeader"}>Our Homes</h4>
                        <h2 className={"headerDark  mb-4"}>
                            Smart Homes, Smarter Investments
                        </h2>
                    </Col>
                    <Col
                        md={12}
                        lg={7}
                        className={styles.topParagraph}
                        data-aos="fade-left"
                    >
                        <p>
                            Imbued with next-gen smart technology, our homes offer unparalleled convenience and security.
                            Every corner, every space is meticulously crafted to cater to the discerning dweller's needs.
                            Experience a home that's as intelligent as it is opulent, equipped with AI-powered security
                            systems and power-saving features. Spaces are designed for comfort, functionality, and
                            elegance, ensuring that every moment spent is a testament to quality living.

                        </p>
                    </Col>
                    <Col
                        sm={12}
                        className={styles.secondParagraph}
                        data-aos="fade-up"
                    >
                        <p className={`mb-4`}>
                            Beyond the tangible, our homes promise an investment that appreciates, delivering an ROI
                            that's as extraordinary as the life you'll live within its walls.

                        </p>
                        <p>
                            Welcome to the Cosgrove way of life.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
