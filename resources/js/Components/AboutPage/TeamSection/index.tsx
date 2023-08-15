import {Col, Container, Row} from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
// @ts-ignore
import {ReactComponent as ArrowRight2Svg} from "/public/assets/svg/arrow-right-2.svg";
// @ts-ignore
import arrowRightSvg from "/public/assets/svg/arrow-right.svg";
// @ts-ignore
import {ReactComponent as MapPinSvg} from "/public/assets/svg/map-pin.svg";

export default function () {
    return (
        <section className={styles.teamSection}>
            <Container>
                <h4 className={'subHeader'}>The Core Team</h4>
                <h2 className={'headerDark  mb-4'}>Meet the Minds Behind Cosgrove</h2>

                <Row className={styles.teamItem}>
                    <Col sm={12} md={4} lg={3} >
                        <div className={`imageContainerEffect ${styles.teamImg}`} style={{
                            background: 'url("/assets/images/teams/umar.png")'
                        }}>

                        </div>
                    </Col>
                    <Col sm={12} md={8}  lg={9} className={styles.teamInfo}>
                        <h4 className={'subHeader mb-4'}>Chairman/Chief Executive Officer</h4>
                        <h2 className={'headerDark  mb-25'}>Umar Abdullahi</h2>

                        <div>
                            <p className={'textPrimary'}>
                                The Cosgrove founder, Umar comes with over 2 decades varied experience in Real Estate
                                Development, Investment, and Financial Services. Notably, Umar served as the pioneer
                                Managing Director of Brains & Hammers Ltd. for 8 years.
                            </p>
                            <p className={'textPrimary'}>
                                He directed the foundations for
                                the company’s success; and spearheaded the conceptualization, development, construction,
                                and management of a myriad of housing estates and gated communities. He is specially
                                adept at managing complex projects and diverse teams.
                            </p>
                            <p className={'textPrimary'}>
                                Umar also brings extensive experience from his corporate banking background as well as
                                expertise in negotiations with a commitment to compliance with corporate governance and
                                fiscal discipline. An astute leader whose vision is achieving Cosgrove strategic business
                                goals.
                            </p>
                            <p className={'textPrimary'}>
                                His variegated International Executive Leadership training programs equip him for
                                his new role to steer the company to achieve its long-term vision.

                            </p>
                            <p className={'textPrimary'}>
                                Umar is a graduate of Bayero University, Kano and an alumnus of Cranfield University,
                                UK and attends the Harvard Business School Executive Programs.
                            </p>
                        </div>
                    </Col>
                </Row>




            </Container>



        </section>
    );
}


