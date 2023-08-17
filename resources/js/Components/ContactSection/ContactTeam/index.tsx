import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
// @ts-ignore
import { ReactComponent as Chioma } from "/public/assets/svg/chioma.svg";

export default function () {
    return (
        <section className={styles.mainSection}>
            <Container fluid>
                <Row>
                    <Col sm={12} className={styles.infoContactInfo}>
                        <h5>Contact Us</h5>
                        <h2 className={`headerDark ${styles.m65}`}>
                            Speak to an expert from the team.
                        </h2>
                    </Col>
                    <Col md={12} lg={4} className={styles.infoContactCol}>
                        <div className={styles.infoContactBg}></div>
                    </Col>

                    <Col md={12} lg={8} className={styles.teams}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Amet netus
                            at pulvinar turpis eros leo. Varius nisl viverra sit
                            facilisis ipsum facilisi a massa natoque. Porttitor
                            aliquam massa rhoncus sollicitudin eget integer
                            gravida nunc. Nam.
                        </p>

                        <div className={styles.peopleContainer}>
                            <div>
                                <ul>
                                    <li className={styles.personContainer}>
                                        <div style={{ marginRight: "1rem" }}>
                                            <Chioma />
                                        </div>
                                        <div style={{ paddingTop: "1rem" }}>
                                            <h4>Chioma Ugwu</h4>
                                            <h5>
                                                Director, Business Development
                                            </h5>
                                            <p>
                                                chioma.ugwu@cosgroveafrica.com
                                            </p>
                                        </div>
                                    </li>

                                    <li className={styles.personContainer}>
                                        <div style={{ marginRight: "1rem" }}>
                                            <Chioma />
                                        </div>
                                        <div style={{ paddingTop: "1rem" }}>
                                            <h4>Chioma Ugwu</h4>
                                            <h5>
                                                Director, Business Development
                                            </h5>
                                            <p>
                                                chioma.ugwu@cosgroveafrica.com
                                            </p>
                                        </div>
                                    </li>

                                    <li className={styles.personContainer}>
                                        <div style={{ marginRight: "1rem" }}>
                                            <Chioma />
                                        </div>
                                        <div style={{ paddingTop: "1rem" }}>
                                            <h4>Chioma Ugwu</h4>
                                            <h5>
                                                Director, Business Development
                                            </h5>
                                            <p>
                                                chioma.ugwu@cosgroveafrica.com
                                            </p>
                                        </div>
                                    </li>

                                    <li className={styles.personContainer}>
                                        <div style={{ marginRight: "1rem" }}>
                                            <Chioma />
                                        </div>
                                        <div style={{ paddingTop: "1rem" }}>
                                            <h4>Chioma Ugwu</h4>
                                            <h5>
                                                Director, Business Development
                                            </h5>
                                            <p>
                                                chioma.ugwu@cosgroveafrica.com
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Second Row Item  */}
                            <div className={styles.secondItem}>
                                <ul>
                                    <li className={styles.personContainer}>
                                        <div style={{ marginRight: "1rem" }}>
                                            <Chioma />
                                        </div>
                                        <div style={{ paddingTop: "1rem" }}>
                                            <h4>Chioma Ugwu</h4>
                                            <h5>
                                                Director, Business Development
                                            </h5>
                                            <p>
                                                chioma.ugwu@cosgroveafrica.com
                                            </p>
                                        </div>
                                    </li>

                                    <li className={styles.personContainer}>
                                        <div style={{ marginRight: "1rem" }}>
                                            <Chioma />
                                        </div>
                                        <div style={{ paddingTop: "1rem" }}>
                                            <h4>Chioma Ugwu</h4>
                                            <h5>
                                                Director, Business Development
                                            </h5>
                                            <p>
                                                chioma.ugwu@cosgroveafrica.com
                                            </p>
                                        </div>
                                    </li>

                                    <li className={styles.personContainer}>
                                        <div style={{ marginRight: "1rem" }}>
                                            <Chioma />
                                        </div>
                                        <div style={{ paddingTop: "1rem" }}>
                                            <h4>Chioma Ugwu</h4>
                                            <h5>
                                                Director, Business Development
                                            </h5>
                                            <p>
                                                chioma.ugwu@cosgroveafrica.com
                                            </p>
                                        </div>
                                    </li>

                                    <li className={styles.personContainer}>
                                        <div style={{ marginRight: "1rem" }}>
                                            <Chioma />
                                        </div>
                                        <div style={{ paddingTop: "1rem" }}>
                                            <h4>Chioma Ugwu</h4>
                                            <h5>
                                                Director, Business Development
                                            </h5>
                                            <p>
                                                chioma.ugwu@cosgroveafrica.com
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
