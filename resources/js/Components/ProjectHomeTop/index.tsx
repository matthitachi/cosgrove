import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import AOS from "aos";
import "aos/dist/aos.css";
import * as React from "react";
import {houseTypeItemProps} from "../../Data/data";
import RecordList from "../Elements/RecordList";
// @ts-ignore

interface topSection {
    houseType: houseTypeItemProps
}
export default function ({ houseType }:topSection) {
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
                        <h5 className={'subHeader'}>House Type</h5>
                        <h2 className={`headerDark ${styles.m65}`}>{houseType.name}</h2>
                    </Col>

                    <Col
                        md={12}
                        lg={7}
                        className={styles.infoHomeInfo}
                        data-aos="fade-right"
                    >
                        <p className={`textPrimary`}>
                            {houseType.moreDesc}
                        </p>

                        <div className="pt-5 pb-5">

                            <RecordList type={2} size={6} sizeMd={4}  sizeLg={4} recordList={houseType.specs}/>
                        </div>
                    </Col>
                    <Col
                        md={12}
                        lg={5}
                        className={styles.infoHomeCol}
                        data-aos="fade-left"
                    >
                        <div className={styles.infoHomeBG} style={{background: `url("${houseType.img}")`}}/>
                    </Col>
                </Row>
            </Container>
        </section>
        // <div/>
    );
}
