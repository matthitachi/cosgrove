import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
// @ts-ignore
import { ReactComponent as Select } from "/public/assets/svg/select.svg";
import {Link} from "@inertiajs/inertia-react";

export default function () {
    return (
        <section className={styles.topSection}>
            <Container fluid>
                <Row>
                    <Col sm={12} className={styles.infoHomeInfo}>
                        <h5>Agent Registration</h5>
                        <h2 className={`headerDark ${styles.m65}`}>
                            Agency/ Marketing Agreement Between an Agent and Cosgrove Investment Limited
                        </h2>
                    </Col>

                    <Col md={12} lg={7} className={styles.infoHomeInfo}>
                        <p className={`textPrimary`}>
                            Thank you for your interest in marketing our product. Below are the terms and conditions of the contract:
                        </p>

                        <ol>
                            <li>
                                <b>PROCEDURE/SCOPE OF WORK (Digital Marketing)</b>
                                <ul>
                                    <li className={'mb-3'}>
                                        All Social Media materials and content will be provided by Cosgrove and copies will be sent to you for your social media use. You are prohibited from creating social media content on behalf of the COSGROVE brand.
                                    </li>
                                    <li>
                                        Deployed resources and staff for ground marketing is entirely up to you; and COSGROVE will not bear any costs related therein.
                                    </li>
                                    <li>
                                        Cosgrove will handle all of her Branding and Promotions solely.
                                    </li>
                                    <li>
                                        Strategy plan for the client’s house(s) such as (Notices of Payment or Payment Reminder letters, Newsletters and Revocation Letters) will be prepared by Cosgrove.
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <b>TIME TABLE: </b> Cosgrove will assure you get all Marketing Tools/Essentials. E.g. (Newsletters and Brochure).
                            </li>
                            <li> <b>MARKETING/ MANAGEMENT FEE: </b> We are not under any obligation to pay
                                <b>THE AGENT</b> Marketing / Managerial fee. Cosgrove is responsible for managing its
                                own organization. Cosgrove Investment Limited shall pay a <b>5%</b> commission to
                                <b>THE AGENT</b> for every sale and this should cover the marketing fee (5% commission)
                                which will be paid on every installment received by Cosgrove.
                            <br/>
                                Cosgrove Investment Limited shall withhold payment of commission if client’s
                                Application Form and Acknowledgement copies of offer letters are not returned.
                            </li>
                        </ol>



                    </Col>
                    <Col md={12} lg={5} className={styles.infoHomeCol}>
                        <div className={styles.infoHomeBG}/>
                    </Col>
                    <Col md={12} lg={7} className={`${styles.infoHomeInfo} mt-4`}>
                        <p className={'text'}>
                            <b>* To formally confirm your acceptance of this contract  please download the form sign and send to hauwa.labaran@cosgroveafrica.com within five (5) working days from the day the form is filled.</b>
                        </p>
                        <p className={'text'}>
                            * Please fill the form on the right and download the full form  <a target={'_blank'} href={'/assets/COSGROVE_AGENT_FORM.docx'}>HERE</a>
                        </p>
                    </Col>
                    <Col md={12} lg={5} className={styles.infoHomeInfo} style={{padding: '0 20px'}}>


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
                            <textarea
                                placeholder={"Do you have a special request?"}
                                className={styles.formItem}
                            />

                            <button>Submit</button>
                        </form>
                    </Col>

                </Row>
            </Container>
        </section>
        // <div/>
    );
}
