import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
// @ts-ignore
import { ReactComponent as Camera } from "/public/assets/svg/cctv-camera.svg";

interface HouseTypesProps {
    headerContent: string;
}

export default function ({ headerContent }: HouseTypesProps) {
    return (
        <section className={styles.houseTypes}>
            <Container>
                <h5 className={`subHeaderDark`}>{headerContent}</h5>

                <Row data-aos="fade-up">
                    <Col
                        xs={6}
                        md={4}
                        lg={3}
                        className={styles.houseTypesItem}
                        data-aos="fade-up"
                    >
                        <div className={styles.imgCtx}>
                            <img src={"/assets/images/house-types/image.png"} />
                        </div>
                        <h5>Acacia</h5>
                        <div className={styles.description}>
                            4 Bedroom Terrace Duplex with 1 Maid’s room
                        </div>
                    </Col>
                    <Col xs={6} md={4} lg={3} className={styles.houseTypesItem}>
                        <div className={styles.imgCtx}>
                            <img src={"/assets/images/house-types/image.png"} />
                        </div>
                        <h5>Acacia</h5>
                        <div className={styles.description}>
                            4 Bedroom Terrace Duplex with 1 Maid’s room
                        </div>
                    </Col>
                    <Col xs={6} md={4} lg={3} className={styles.houseTypesItem}>
                        <div className={styles.imgCtx}>
                            <img src={"/assets/images/house-types/image.png"} />
                        </div>
                        <h5>Acacia</h5>
                        <div className={styles.description}>
                            4 Bedroom Terrace Duplex with 1 Maid’s room
                        </div>
                    </Col>
                    <Col xs={6} md={4} lg={3} className={styles.houseTypesItem}>
                        <div className={styles.imgCtx}>
                            <img src={"/assets/images/house-types/image.png"} />
                        </div>
                        <h5>Acacia</h5>
                        <div className={styles.description}>
                            4 Bedroom Terrace Duplex with 1 Maid’s room
                        </div>
                    </Col>
                    <Col xs={6} md={4} lg={3} className={styles.houseTypesItem}>
                        <div className={styles.imgCtx}>
                            <img src={"/assets/images/house-types/image.png"} />
                        </div>
                        <h5>Acacia</h5>
                        <div className={styles.description}>
                            4 Bedroom Terrace Duplex with 1 Maid’s room
                        </div>
                    </Col>
                    <Col xs={6} md={4} lg={3} className={styles.houseTypesItem}>
                        <div className={styles.imgCtx}>
                            <img src={"/assets/images/house-types/image.png"} />
                        </div>
                        <h5>Acacia</h5>
                        <div className={styles.description}>
                            4 Bedroom Terrace Duplex with 1 Maid’s room
                        </div>
                    </Col>
                    <Col xs={6} md={4} lg={3} className={styles.houseTypesItem}>
                        <div className={styles.imgCtx}>
                            <img src={"/assets/images/house-types/image.png"} />
                        </div>
                        <h5>Acacia</h5>
                        <div className={styles.description}>
                            4 Bedroom Terrace Duplex with 1 Maid’s room
                        </div>
                    </Col>
                    <Col xs={6} md={4} lg={3} className={styles.houseTypesItem}>
                        <div className={styles.imgCtx}>
                            <img src={"/assets/images/house-types/image.png"} />
                        </div>
                        <h5>Acacia</h5>
                        <div className={styles.description}>
                            4 Bedroom Terrace Duplex with 1 Maid’s room
                        </div>
                    </Col>
                    <Col xs={6} md={4} lg={3} className={styles.houseTypesItem}>
                        <div className={styles.imgCtx}>
                            <img src={"/assets/images/house-types/image.png"} />
                        </div>
                        <h5>Acacia</h5>
                        <div className={styles.description}>
                            4 Bedroom Terrace Duplex with 1 Maid’s room
                        </div>
                    </Col>
                    <Col xs={6} md={4} lg={3} className={styles.houseTypesItem}>
                        <div className={styles.imgCtx}>
                            <img src={"/assets/images/house-types/image.png"} />
                        </div>
                        <h5>Acacia</h5>
                        <div className={styles.description}>
                            4 Bedroom Terrace Duplex with 1 Maid’s room
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
