import {
    Button,
    Col,
    Container,
    Nav,
    Navbar,
    NavDropdown,
    Row,
} from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import AOS from "aos";
import "aos/dist/aos.css";
import * as React from "react";
// @ts-ignore
import arrowRightSvg from "/public/assets/svg/arrow-right.svg";

export default function () {
    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <section className={styles.infoHomeSection}>
            <Container fluid>
                <Row>
                    <Col sm={12} md={6} className={styles.infoHomeCol}>
                        <div
                            className={styles.infoHomeBG}
                            data-aos="fade-right"
                        ></div>
                    </Col>

                    <Col sm={12} md={6} className={styles.infoHomeInfo}>
                        <h5 data-aos="fade-left">About Us</h5>
                        <h2 data-aos="fade-left" className={styles.m65}>
                            We are Building the Future <br /> of African Real
                            Estate
                        </h2>
                        <p data-aos="fade-left">
                            At Cosgrove Africa, we don't just develop properties
                            – we envision the future. As leaders in the real
                            estate industry in Africa, we masterfully shape
                            residential and commercial spaces that marry
                            unparalleled luxury with cutting-edge technology.
                            <br />
                            <br />
                            Our commitment to sustainability breathes life into
                            each of our projects, creating environments that are
                            as eco-conscious as they are exquisite. Here, we
                            design the extraordinary. Here, we set the standard.
                        </p>
                        <button data-aos="fade-left" className={styles.text}>
                            Learn More{" "}
                            <img
                                className={styles.arrowRightSvg}
                                src={arrowRightSvg}
                                alt="Your SVG"
                            />
                        </button>

                        <div className={styles.records} data-aos="fade-left">
                            <Row className={styles.recordRow}>
                                <Col sxs={6}>
                                    <div className={styles.recordItem}>
                                        <img
                                            src={
                                                "/assets/images/icons/homes.png"
                                            }
                                        />
                                        <div>
                                            <h3>
                                                <VisibilitySensor>
                                                    <CountUp
                                                        end={450}
                                                        duration={5}
                                                    />
                                                </VisibilitySensor>
                                                +
                                            </h3>
                                            <div className={styles.title}>
                                                Homes Built
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={6}>
                                    <div className={styles.recordItem}>
                                        <img
                                            src={
                                                "/assets/images/icons/projects.png"
                                            }
                                        />
                                        <div>
                                            <h3>
                                                <CountUp end={8} duration={5} />
                                            </h3>
                                            <div className={styles.title}>
                                                Projects
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className={styles.recordRow}>
                                <Col xs={6}>
                                    <div className={styles.recordItem}>
                                        <img
                                            src={
                                                "/assets/images/icons/awards.png"
                                            }
                                        />
                                        <div>
                                            <h3>
                                                <CountUp
                                                    end={30}
                                                    duration={5}
                                                />
                                                +
                                            </h3>
                                            <div className={styles.title}>
                                                Awards
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={6}>
                                    <div className={styles.recordItem}>
                                        <img
                                            src={
                                                "/assets/images/icons/clients.png"
                                            }
                                        />
                                        <div>
                                            <h3>
                                                <CountUp
                                                    end={800}
                                                    duration={5}
                                                />{" "}
                                                +
                                            </h3>
                                            <div className={styles.title}>
                                                Global clients
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <div className={styles.contact} data-aos="fade-left">
                            <Row>
                                <Col xs={6}>
                                    <img
                                        src={"/assets/images/icons/support.png"}
                                    />
                                    <h5>Talk To Us</h5>
                                    <p>
                                        Lorem Ipsum Dolor Sit amet impo rum
                                        emetsum{" "}
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
                                        emetsum{" "}
                                    </p>
                                    <button className={styles.dark}>
                                        Download Brochures
                                    </button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
