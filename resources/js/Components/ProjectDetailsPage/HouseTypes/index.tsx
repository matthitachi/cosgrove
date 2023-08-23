import {Col, Container, Row} from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
// @ts-ignore
import {ReactComponent as Camera} from "/public/assets/svg/cctv-camera.svg";

interface HouseTypesProps {
    headerContent: string;
}

interface houseTypeItemProps {
    img: string;
    name: string;
    desc: string;
}

const houseTypeItems: houseTypeItemProps[] = [
    {
        img: '/assets/images/house-types/image.png',
        name: 'Acacia',
        desc: ' 4 Bedroom Terrace Duplex with 1 Maid’s room'

    },
    {
        img: '/assets/images/house-types/oak.png',
        name: 'Oak',
        desc: '5-Bedroom fully detached duplex with 1 maid’s room'

    },
    {
        img: '/assets/images/house-types/maple.png',
        name: 'Maple',
        desc: '3-Bedroom apartment with 1 maid’s room'

    },
    {
        img: '/assets/images/house-types/pent-house.png',
        name: 'Pent House',
        desc: '4-Bedroom Luxury penthouse with 1 maid’s room'

    },
    {
        img: '/assets/images/house-types/image.png',
        name: 'Acacia',
        desc: ' 4 Bedroom Terrace Duplex with 1 Maid’s room'

    },
    {
        img: '/assets/images/house-types/maple.png',
        name: 'Maple',
        desc: '3-Bedroom apartment with 1 maid’s room'

    },
];

export default function ({headerContent}: HouseTypesProps) {
    return (
        <section className={styles.houseTypes}>
            <Container>
                <h5 className={`subHeaderDark`}>{headerContent}</h5>

                <Row data-aos="fade-up">

                    {
                        houseTypeItems.map((item, index) =>
                            (
                                <Col
                                    xs={6}
                                    md={4}
                                    lg={3}
                                    xl={2}
                                    className={styles.houseTypesItem}
                                    data-aos="fade-up"
                                >
                                    <a href={'/project-types'}>
                                    <div className={styles.imgCtx}
                                         style={{background: `url("${item.img}")`}}/>
                                    <h5 className={'subHeaderDark'}>{item.name}</h5>
                                    <div className={styles.description}>
                                       {item.desc}
                                    </div>
                                    </a>
                                </Col>
                            )
                        )
                    }


                    {/*<Col xs={6} md={4} lg={3} className={styles.houseTypesItem}>*/}
                    {/*    <div className={styles.imgCtx}>*/}
                    {/*        <img src={"/assets/images/house-types/image.png"}/>*/}
                    {/*    </div>*/}
                    {/*    <h5>Acacia</h5>*/}
                    {/*    <div className={styles.description}>*/}
                    {/*        4 Bedroom Terrace Duplex with 1 Maid’s room*/}
                    {/*    </div>*/}
                    {/*</Col>*/}
                </Row>
            </Container>
        </section>
    );
}
