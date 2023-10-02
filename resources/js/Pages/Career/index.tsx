import * as React from "react";

import NavBar from "../../Components/Elements/Navbar/navbar";
import HeaderItem from "../../Components/Elements/HeaderItem/index";
import Footer from "../../Components/Elements/Footer";
import {Col, Container, Row} from "react-bootstrap";
import {useState} from "react";
import {useEffect} from "react";

// @ts-ignore
import styles from "./styles.module.scss";
export default function () {

    const [loading, setLoading] = useState<boolean>(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        }, 1000)
    }, []);
    return (
        <div>
            {/*<Cube color={'#f7f7f7'} background={"#fbbd00"} customLoading={loading}/>*/}
            <NavBar isDark={true} />
            <HeaderItem height={50} bgImage={'/assets/images/bg/bgContact.png'} />
            <section className={styles.topSection}>
                <Container fluid>
                    <Row>
                        <Col sm={12} className={styles.infoHomeInfo}>
                            <h5>Career</h5>
                            <h2 className={`headerDark ${styles.m65}`}>
                                Current Openings
                            </h2>
                        </Col>

                        <Col md={12} lg={7} className={styles.infoHomeInfo}>
                            <p className={`textPrimary`}>
                                Start your career where you will get every opportunity to grow and improve your skills. Fill the form below and we would get back to you..
                            </p>

                            <form className={styles.contactInTouch}>

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
                                <input
                                    placeholder={"Position"}
                                    className={styles.formItem}
                                />
                                <textarea
                                    placeholder={"Message"}
                                    className={styles.formItem}
                                />

                                <button>Submit</button>
                            </form>
                        </Col>
                        <Col md={12} lg={5} className={styles.infoHomeCol}>
                            <div className={styles.infoHomeBG}/>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer/>
        </div>
        // <Footer
    );
}
