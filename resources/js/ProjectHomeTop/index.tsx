import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
// @ts-ignore

export default function () {
    return (
        <section className={styles.topSection}>
            <Container fluid>
                <Row>
                    <Col sm={12} className={styles.infoHomeInfo}>
                        <h5>House Type</h5>
                        <h2 className={`headerDark ${styles.m65}`}>Acacia</h2>
                    </Col>

                    <Col md={12} lg={7} className={styles.infoHomeInfo}>
                        <p className={`textPrimary`}>
                            Our projects are not just buildings; they're the
                            embodiment of forward-thinking design and
                            cutting-edge technology, seamlessly integrated to
                            create next-generation smart homes. Each home is a
                            testament to our commitment to quality, our passion
                            for innovation, and our dedication to crafting
                            spaces that go beyond the ordinary. Our projects are
                            not just buildings; they're the embodiment of
                            forward-thinking design and cutting-edge technology,
                            seamlessly integrated to create next-generation
                            smart homes. Each home is a testament to our
                            commitment to quality, our passion for innovation,
                            and our dedication to crafting spaces that go beyond
                            the ordinary. Our projects are not just buildings;
                            they're the embodiment of forward-thinking design
                            and cutting-edge technology, seamlessly integrated
                            to create next-generation smart homes. Each home is
                            a testament to our commitment to quality, our
                            passion for innovation, and our dedication to
                            crafting spaces that go beyond the ordinary.
                        </p>

                        <div className={styles.records}>
                            <div className={styles.recordItem}>
                                <img src={"/assets/images/icons/surface.png"} />
                                <div>
                                    <h3>
                                        284m{" "}
                                        <sup
                                            style={{
                                                fontSize: "1.5rem",
                                                marginLeft: "-10px",
                                            }}
                                        >
                                            2
                                        </sup>
                                    </h3>
                                    <div className={styles.title}>
                                        Surface Area
                                    </div>
                                </div>
                            </div>

                            <div className={styles.recordItem}>
                                <img src={"/assets/images/icons/spaces.png"} />
                                <div>
                                    <h3>3</h3>
                                    <div className={styles.title}>
                                        Parking Spaces
                                    </div>
                                </div>
                            </div>

                            <div className={styles.recordItem}>
                                <img src={"/assets/images/icons/maid.png"} />
                                <div>
                                    <h3>1</h3>
                                    <div className={styles.title}>
                                        Maid’s Quarters
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.records}>
                            <div className={styles.recordItem}>
                                <img src={"/assets/images/icons/bed.png"} />
                                <div>
                                    <h3>4</h3>
                                    <div className={styles.title}>Bedrooms</div>
                                </div>
                            </div>

                            <div className={styles.recordItem}>
                                <img src={"/assets/images/icons/bath.png"} />
                                <div>
                                    <h3>5</h3>
                                    <div className={styles.title}>
                                        Bathrooms
                                    </div>
                                </div>
                            </div>

                            <div
                                className={styles.recordItem}
                                style={{ marginRight: "57px" }}
                            >
                                <img src={"/assets/images/icons/room.png"} />
                                <div>
                                    <h3>2</h3>
                                    <div className={styles.title}>
                                        Living Rooms
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={5} className={styles.infoHomeCol}>
                        <div className={styles.infoHomeBG}></div>
                    </Col>
                </Row>
            </Container>
        </section>
        // <div/>
    );
}
