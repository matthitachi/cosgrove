import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import AOS from "aos";
import "aos/dist/aos.css";
import * as React from "react";
// @ts-ignore
import { ReactComponent as Camera } from "/public/assets/svg/cctv-camera.svg";

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
                        <h5>About Us</h5>
                        <h2 className={`headerDark ${styles.m65}`}>
                            Cosgrove Smart Estate, Wuye
                        </h2>
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

                        <div className={`${styles.contact} `}>
                            <Row data-aos="fade-right">
                                <Col xs={6}>
                                    <img
                                        src={
                                            "/assets/images/icons/support1.png"
                                        }
                                    />
                                    <h5>See for yourself</h5>
                                    <p className={`textPrimary`}>
                                        Lorem Ipsum Dolor Sit amet impo rum
                                        emetsum
                                    </p>
                                    <button className={styles.yellow}>
                                        Let’s Talk
                                    </button>
                                </Col>
                                <Col xs={6}>
                                    <img
                                        src={
                                            "/assets/images/icons/brochure.png"
                                        }
                                    />
                                    <h5>Project Brochures</h5>
                                    <p>
                                        Lorem Ipsum Dolor Sit amet impo rum
                                        emetsum
                                    </p>
                                    <button className={styles.dark}>
                                        Download Brochures
                                    </button>
                                </Col>
                            </Row>
                        </div>

                        <div className={styles.records} data-aos="fade-right">
                            <div className={styles.recordItem}>
                                <img src={"/assets/images/icons/homes.png"} />
                                <div>
                                    <h3>
                                        <VisibilitySensor partialVisibility>
                                            {({ isVisible }) => (
                                                <CountUp
                                                    end={450}
                                                    duration={5}
                                                    // @ts-ignore
                                                    start={isVisible ? 0 : null}
                                                />
                                            )}
                                        </VisibilitySensor>
                                        +
                                    </h3>
                                    <div className={styles.title}>
                                        Homes Built
                                    </div>
                                </div>
                            </div>

                            <div className={styles.recordItem}>
                                <img
                                    src={"/assets/images/icons/projects.png"}
                                />
                                <div>
                                    <h3>
                                        <VisibilitySensor partialVisibility>
                                            {({ isVisible }) => (
                                                <CountUp
                                                    end={8}
                                                    duration={5}
                                                    // @ts-ignore
                                                    start={isVisible ? 0 : null}
                                                />
                                            )}
                                        </VisibilitySensor>
                                    </h3>
                                    <div className={styles.title}>Projects</div>
                                </div>
                            </div>

                            <div className={styles.recordItem}>
                                <img src={"/assets/images/icons/awards.png"} />
                                <div>
                                    <h3>
                                        <VisibilitySensor partialVisibility>
                                            {({ isVisible }) => (
                                                <CountUp
                                                    end={30}
                                                    duration={5}
                                                    // @ts-ignore
                                                    start={isVisible ? 0 : null}
                                                />
                                            )}
                                        </VisibilitySensor>
                                        +
                                    </h3>
                                    <div className={styles.title}>Awards</div>
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

            <Container data-aos="fade-up">
                <h5 className={`subHeaderDark`}>Estate Features</h5>
                <Row className={styles.estateFeatures}>
                    <Col sm={4} xs={6} md={2} className={styles.eFeatureItem}>
                        <Camera />
                        <h5 className={`subHeaderSmall dark mt-3 mb-4`}>
                            Luxurious Homes
                        </h5>
                    </Col>
                    <Col sm={4} xs={6} md={2} className={styles.eFeatureItem}>
                        <Camera />
                        <h5 className={`subHeaderSmall dark mt-3 mb-4`}>
                            Luxurious Homes
                        </h5>
                    </Col>
                    <Col sm={4} xs={6} md={2} className={styles.eFeatureItem}>
                        <Camera />
                        <h5 className={`subHeaderSmall dark mt-3 mb-4`}>
                            Luxurious Homes
                        </h5>
                    </Col>
                    <Col sm={4} xs={6} md={2} className={styles.eFeatureItem}>
                        <Camera />
                        <h5 className={`subHeaderSmall dark mt-3 mb-4`}>
                            Luxurious Homes
                        </h5>
                    </Col>
                    <Col sm={4} xs={6} md={2} className={styles.eFeatureItem}>
                        <Camera />
                        <h5 className={`subHeaderSmall dark mt-3 mb-4`}>
                            Luxurious Homes
                        </h5>
                    </Col>
                    <Col sm={4} xs={6} md={2} className={styles.eFeatureItem}>
                        <Camera />
                        <h5 className={`subHeaderSmall dark mt-3 mb-4`}>
                            Luxurious Homes
                        </h5>
                    </Col>
                    <Col sm={4} xs={6} md={2} className={styles.eFeatureItem}>
                        <Camera />
                        <h5 className={`subHeaderSmall dark mt-3 mb-4`}>
                            Luxurious Homes
                        </h5>
                    </Col>
                    <Col sm={4} xs={6} md={2} className={styles.eFeatureItem}>
                        <Camera />
                        <h5 className={`subHeaderSmall dark mt-3 mb-4`}>
                            Luxurious Homes
                        </h5>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
