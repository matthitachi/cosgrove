import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
// @ts-ignore
import { ReactComponent as Select } from "/public/assets/svg/select.svg";

export default function () {
    return (
        <section className={styles.topSection}>
            <Container fluid>
                <Row>
                    <Col sm={12} className={styles.infoHomeInfo}>
                        <h5>Booking a Tour</h5>
                        <h2 className={`headerDark ${styles.m65}`}>
                            See it with your eyes.
                        </h2>
                    </Col>

                    <Col md={12} lg={7} className={styles.infoHomeInfo}>
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
                                    Select an Project
                                </option>
                                <option value="option1">Cosgrove Smart Estate, Wuye</option>
                                <option value="option2">Cosgrove Smart Estate, Mabushi</option>
                                <option value="option3">Cosgrove Smart Estate, Guzape</option>
                                <option value="option4">Neauvaux by Cosgrove, Maitama</option>
                                <option value="option5">Tetra by Cosgrove, Wuye</option>
                                <option value="option6">Cosgrove Smart City, Katampe</option>
                                <option value="option7">Châteaux by Cosgrove, Wuse 2</option>
                                <option value="option8">Fourteen by Cosgrove, Wuye</option>
                                <option value="option9">Cosgrove Smart Estate, Wuse 2'</option>
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
                    <Col md={12} lg={5} className={styles.infoHomeCol}>
                        <div className={styles.infoHomeBG}></div>
                    </Col>
                </Row>
            </Container>
        </section>
        // <div/>
    );
}
