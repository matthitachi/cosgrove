import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import AOS from "aos";
import "aos/dist/aos.css";
import * as React from "react";
// @ts-ignore

export default function () {
    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <section className={styles.topSection}>
            <Container>
                <Row>
                    <Col
                        sm={12}
                        className={styles.infoHomeInfo}
                        data-aos="fade-right"
                    >
                        <h5 className={'subHeader'}>House Type</h5>
                        <h2 className={`headerDark ${styles.m65}`}>Acacia</h2>
                    </Col>

                    <Col
                        md={12}
                        lg={7}
                        className={styles.infoHomeInfo}
                        data-aos="fade-right"
                    >
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
                                        <VisibilitySensor partialVisibility>
                                            {({ isVisible }) => (
                                                <CountUp
                                                    end={284}
                                                    duration={5}
                                                    // @ts-ignore
                                                    start={isVisible ? 0 : null}
                                                />
                                            )}
                                        </VisibilitySensor>
                                        m
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
                                    <h3>
                                        <VisibilitySensor partialVisibility>
                                            {({ isVisible }) => (
                                                <CountUp
                                                    end={3}
                                                    duration={5}
                                                    // @ts-ignore
                                                    start={isVisible ? 0 : null}
                                                />
                                            )}
                                        </VisibilitySensor>
                                    </h3>
                                    <div className={styles.title}>
                                        Parking Spaces
                                    </div>
                                </div>
                            </div>

                            <div className={styles.recordItem}>
                                <img src={"/assets/images/icons/maid.png"} />
                                <div>
                                    <h3>
                                        <VisibilitySensor partialVisibility>
                                            {({ isVisible }) => (
                                                <CountUp
                                                    end={1}
                                                    duration={5}
                                                    // @ts-ignore
                                                    start={isVisible ? 0 : null}
                                                />
                                            )}
                                        </VisibilitySensor>
                                    </h3>
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
                                    <h3>
                                        <VisibilitySensor partialVisibility>
                                            {({ isVisible }) => (
                                                <CountUp
                                                    end={4}
                                                    duration={5}
                                                    // @ts-ignore
                                                    start={isVisible ? 0 : null}
                                                />
                                            )}
                                        </VisibilitySensor>
                                    </h3>
                                    <div className={styles.title}>Bedrooms</div>
                                </div>
                            </div>

                            <div className={styles.recordItem}>
                                <img src={"/assets/images/icons/bath.png"} />
                                <div>
                                    <h3>
                                        <VisibilitySensor partialVisibility>
                                            {({ isVisible }) => (
                                                <CountUp
                                                    end={5}
                                                    duration={5}
                                                    // @ts-ignore
                                                    start={isVisible ? 0 : null}
                                                />
                                            )}
                                        </VisibilitySensor>
                                    </h3>
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
                                    <h3>
                                        <VisibilitySensor partialVisibility>
                                            {({ isVisible }) => (
                                                <CountUp
                                                    end={2}
                                                    duration={5}
                                                    // @ts-ignore
                                                    start={isVisible ? 0 : null}
                                                />
                                            )}
                                        </VisibilitySensor>
                                    </h3>
                                    <div className={styles.title}>
                                        Living Rooms
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col
                        md={12}
                        lg={5}
                        className={styles.infoHomeCol}
                        data-aos="fade-left"
                    >
                        <div className={styles.infoHomeBG}></div>
                    </Col>
                </Row>
            </Container>
        </section>
        // <div/>
    );
}
