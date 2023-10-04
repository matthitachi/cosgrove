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
                    {/*<Col md={12} lg={4} className={styles.infoContactCol}>*/}
                    {/*    <div className={styles.infoContactBg}/>*/}
                    {/*</Col>*/}

                    <Col md={12} className={styles.teams} >
                        <p>
                            When it comes to finding your ideal home, engaging with Cosgrove's expert advisors is your key to making the perfect choice. Our seasoned professionals understand that a home is more than just a space; it's a reflection of your lifestyle and aspirations. With a deep knowledge of our diverse range of properties and an attentive ear to your preferences, they are dedicated to guiding you towards a residence that resonates with you on every level. Let us navigate the journey together, ensuring that your new home aligns seamlessly with your dreams.
                        </p>
                    {/*</Col>*/}
                    {/*<Col md={12} className={styles.teams}>*/}


                        <div className={styles.peopleContainer}>
                            <Row>
                                <Col xs={12} sm={6} lg={4}>
                                    <li className={styles.personContainer}>
                                        <div style={{ marginRight: "1rem" }}>
                                            <img
                                                src="/assets/images/contacts/chioma.jpg"
                                                alt=""
                                            />
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
                                </Col>
                                <Col xs={12} sm={6} lg={4}>
                                    <li className={styles.personContainer}>
                                        <div style={{ marginRight: "1rem" }}>
                                            <img
                                                src="/assets/images/contacts/sakana.jpg"
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
                                </Col>
                                <Col xs={12} sm={6} lg={4}>
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
                                </Col>
                                <Col xs={12} sm={6} lg={4}>
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
                                </Col>
                                <Col xs={12} sm={6} lg={4}>
                                    <li className={styles.personContainer}>
                                        <div style={{ marginRight: "1rem" }}>
                                            <img
                                                src="/assets/images/contacts/nafisa.jpg"
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
                                </Col>
                                <Col xs={12} sm={6} lg={4}>
                                    <li className={styles.personContainer}>
                                        <div style={{ marginRight: "1rem" }}>
                                            <img
                                                src="/assets/images/contacts/raymond.jpg"
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
                                </Col>

                                <Col xs={12} sm={6} lg={4}>
                                    <li className={styles.personContainer}>
                                        <div style={{ marginRight: "1rem" }}>
                                            <img
                                                src="/assets/images/contacts/fatima.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div style={{ paddingTop: "1rem" }}>
                                            <h4>Fatima Mbaka</h4>
                                            <h5>Head, Customer Service</h5>
                                            <p>
                                                fatima.mbaka@cosgroveafrica.com
                                            </p>
                                        </div>
                                    </li>
                                </Col><Col xs={12} sm={6} lg={4}>
                                <li className={styles.personContainer}>
                                    <div style={{ marginRight: "1rem" }}>
                                        <img
                                            src="/assets/images/contacts/blesssing.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div style={{ paddingTop: "1rem" }}>
                                        <h4>Blessing Chinedu-Uzoh</h4>
                                        <h5>Head, health and safety environment</h5>
                                        <p>
                                            chinedu.uzoh@cosgroveafrica.com
                                        </p>
                                    </div>
                                </li>
                            </Col>


                                <Col xs={12} sm={6} lg={4}>
                                    <li className={styles.personContainer}>
                                        <div style={{ marginRight: "1rem" }}>
                                            <img
                                                src="/assets/images/contacts/generic.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div style={{ paddingTop: "1rem" }}>
                                            <h4>Tosin Afolabi</h4>
                                            <h5>Head of Project Monitoring Office</h5>
                                            <p>
                                                afolabi.tosin@cosgroveafrica.com
                                            </p>
                                        </div>
                                    </li>
                                </Col>
                                <Col xs={12} sm={6} lg={4}>

                                </Col>
                                <Col xs={12} sm={6} lg={4}>

                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
