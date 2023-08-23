import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import * as React from "react";
// @ts-ignore
import { ReactComponent as Select } from "/public/assets/svg/select.svg";

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
                        <h5>Booking a Tour</h5>
                        <h2 className={`headerDark ${styles.m65}`}>
                            See it with your eyes.
                        </h2>
                    </Col>

                    <Col
                        md={12}
                        lg={7}
                        className={styles.infoHomeInfo}
                        data-aos="fade-right"
                    >
                        <p className={`textPrimary`}>
                            Visit a Cosgrove home and experience opulence merged
                            with modern technology first-hand. Fill in the
                            comprehensive form below and one of our agents will
                            be in touch with details once a slot becomes
                            available.
                        </p>

                        <form className={styles.contactInTouch}>
                            <select>
                                <option disabled selected hidden>
                                    Select an Option
                                </option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                            <div>
                                <Select />
                            </div>
                            <input
                                placeholder={"Name"}
                                className={styles.formItem}
                            />
                            <input
                                placeholder={"Email"}
                                className={styles.formItem}
                            />
                            <input
                                placeholder={"Phone"}
                                className={styles.formItem}
                            />
                            <textarea
                                placeholder={"Type a message..."}
                                className={styles.formItem}
                            />

                            <button>Submit</button>
                        </form>
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
