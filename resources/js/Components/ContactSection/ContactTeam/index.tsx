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
                        <div className={styles.infoContactBg}/>
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
                                            <img
                                                src="/assets/images/teams/ray.png"
                                                alt=""
                                            />
                                        </div>
                                        <div style={{ paddingTop: "1rem" }}>
                                            <h4>Raymond Ricketts</h4>
                                            <h5>
                                                Chief Information Technology
                                                Officer
                                            </h5>
                                            <p>
                                                raymond.rick@cosgroveafrica.com
                                            </p>
                                        </div>
                                    </li>

                                    <li className={styles.personContainer}>
                                        <div style={{ marginRight: "1rem" }}>
                                            <img
                                                src="/assets/images/teams/ibrahim.png"
                                                alt=""
                                            />
                                        </div>
                                        <div style={{ paddingTop: "1rem" }}>
                                            <h4>Imam Ibrahim</h4>
                                            <h5>Head, Procurement</h5>
                                            <p>
                                                imam.ibrahim@cosgroveafrica.com
                                            </p>
                                        </div>
                                    </li>

                                    <li className={styles.personContainer}>
                                        <div style={{ marginRight: "1rem" }}>
                                            <img
                                                src="/assets/images/teams/ochua.png"
                                                alt=""
                                            />
                                        </div>
                                        <div style={{ paddingTop: "1rem" }}>
                                            <h4>Ochua Umoru</h4>
                                            <h5>Head, Marketing</h5>
                                            <p>
                                                ochua.umoru@cosgroveafrica.com
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
                                            <img
                                                src="/assets/images/teams/sakana.png"
                                                alt=""
                                            />
                                        </div>
                                        <div style={{ paddingTop: "1rem" }}>
                                            <h4>Sakana D. Philip</h4>
                                            <h5>
                                                Director, Corporate
                                                Communications & Branding
                                            </h5>
                                            <p>
                                                sakana.dikko@cosgroveafrica.com
                                            </p>
                                        </div>
                                    </li>

                                    <li className={styles.personContainer}>
                                        <div style={{ marginRight: "1rem" }}>
                                            <img
                                                src="/assets/images/teams/tosin.png"
                                                alt=""
                                            />
                                        </div>
                                        <div style={{ paddingTop: "1rem" }}>
                                            <h4>Tosin Afolabi</h4>
                                            <h5>Head of PMO</h5>
                                            <p>
                                                afolabi.tosin@cosgroveafrica.com
                                            </p>
                                        </div>
                                    </li>

                                    <li className={styles.personContainer}>
                                        <div style={{ marginRight: "1rem" }}>
                                            <img
                                                src="/assets/images/teams/fatima.png"
                                                alt=""
                                            />
                                        </div>
                                        <div style={{ paddingTop: "1rem" }}>
                                            <h4>Fatima Mbaka</h4>
                                            <h5>Head, Customer Service</h5>
                                            <p>
                                                chioma.ugwu@cosgroveafrica.com
                                            </p>
                                        </div>
                                    </li>

                                    <li className={styles.personContainer}>
                                        <div style={{ marginRight: "1rem" }}>
                                            <img
                                                src="/assets/images/teams/nafisa.png"
                                                alt=""
                                            />
                                        </div>
                                        <div style={{ paddingTop: "1rem" }}>
                                            <h4>Nafisa Aliyu</h4>
                                            <h5>Head, Digital Marketing</h5>
                                            <p>
                                                nafisa.aliyu@cosgroveafrica.com
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
