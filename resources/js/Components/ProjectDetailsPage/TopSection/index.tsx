import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import AOS from "aos";
import "aos/dist/aos.css";
import * as React from "react";
// @ts-ignore
import { ReactComponent as Camera } from "/public/assets/svg/cctv-camera.svg";

// @ts-ignore
import { ReactComponent as ModernHome } from "/public/assets/svg/smart-home.svg";
// @ts-ignore
import { ReactComponent as Luxury } from "/public/assets/svg/modern-house.svg";
// @ts-ignore
import { ReactComponent as Generator } from "/public/assets/svg/generator.svg";
// @ts-ignore
import { ReactComponent as LicensePlate } from "/public/assets/svg/license-plate.svg";
// @ts-ignore
import { ReactComponent as Park } from "/public/assets/svg/park.svg";
import {ProjectItemProp} from "../../Elements/ProjectItem";
import SupportList from "../../Elements/SupportList";
import RecordList from "../../Elements/RecordList";
import FeaturesItem from "../../Elements/FeaturesItem";
import Slider from "../../Elements/Slider";

interface topSectionProp {
    project: ProjectItemProp
}
export default function ({project}:topSectionProp) {
    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        arrows: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                },
            },
        ],
    };
    return (
        <section className={styles.topSection}>
            <Container style={{marginBotton: '85px'}}>
                <Row>
                    <Col
                        sm={12}
                        className={styles.infoHomeInfo}
                        data-aos="fade-right"
                    >
                        <h5 className={'subHeader'}>Project</h5>
                        <h2 className={`headerDark ${styles.m65}`}>
                            {project.name}
                        </h2>
                    </Col>

                    <Col
                        md={12}
                        lg={7}
                        className={styles.infoHomeInfo}
                        data-aos="fade-right"
                    >
                        <p className={`textPrimary`}>
                            {project.description}
                        </p>
                        <SupportList supportList={[
                            {
                                title: "Talk To Us",
                                description: "Get started with Cosgrove by speaking to one of our experts.",
                                image: "/assets/images/icons/support1.png",
                                buttonText: "Let’s Talk",
                                buttonAction: () => {
                                    window.location.href = '/contact';
                                },
                            },
                            {
                                title: "Project Brochures",
                                description: "Explore our catalog through our collection of brochures. ",
                                image: "/assets/images/icons/brochure.png",
                                buttonText: "Download Brochures",
                                buttonBgDark: true,
                                buttonAction: () => {
                                    window.location.href = '/project-brochure';
                                },
                            },
                        ]}/>
                        <div style={{padding: '40px'}}/>
                        <RecordList size={4} type={2} recordList={ project.distFeature}/>


                    </Col>
                    <Col
                        md={12}
                        lg={5}
                        className={styles.infoHomeCol}
                        data-aos="fade-left"
                    >
                        <div className={styles.infoHomeBG} style={{background: `url("${project.detailsImg}")`}}/>
                    </Col>
                </Row>
            </Container>

            <Container data-aos="fade-up">
                <h5 className={`subHeaderDark`}>Estate Features</h5>

                <Row className={styles.estateFeatures} style={{paddingBottom: '50px'}}>
                    {project.estateFeatures && <Slider
                        settings={settings}
                        childrenItems={[
                            (project.estateFeatures.map((item, key) => <Col sm={4} xs={6} md={2} key={key} className={styles.eFeatureItem}>
                                {item.img}
                                <h5 className={`subHeaderSmall dark mt-3 mb-4`}>
                                    {item.title}
                                </h5>
                            </Col>))
                        ]}
                    />}
                    {/*<Col sm={4} xs={6} md={2} className={styles.eFeatureItem}>*/}
                    {/*    <Camera />*/}
                    {/*    <h5 className={`subHeaderSmall dark mt-3 mb-4`}>*/}
                    {/*        24/7 Security*/}
                    {/*    </h5>*/}
                    {/*</Col>*/}
                    {/*<Col sm={4} xs={6} md={2} className={styles.eFeatureItem}>*/}
                    {/*    <ModernHome />*/}
                    {/*    <h5 className={`subHeaderSmall dark mt-3 mb-4`}>*/}
                    {/*        Fully Serviced*/}
                    {/*    </h5>*/}
                    {/*</Col>*/}
                    {/*<Col sm={4} xs={6} md={2} className={styles.eFeatureItem}>*/}
                    {/*    <Luxury />*/}
                    {/*    <h5 className={`subHeaderSmall dark mt-3 mb-4`}>*/}
                    {/*        Luxurious Homes*/}
                    {/*    </h5>*/}
                    {/*</Col>*/}

                    {/*<Col sm={4} xs={6} md={2} className={styles.eFeatureItem}>*/}
                    {/*    <Generator />*/}
                    {/*    <h5 className={`subHeaderSmall dark mt-3 mb-4`}>*/}
                    {/*        Uninterrupted Electricity*/}
                    {/*    </h5>*/}
                    {/*</Col>*/}
                    {/*<Col sm={4} xs={6} md={2} className={styles.eFeatureItem}>*/}
                    {/*    <Park />*/}
                    {/*    <h5 className={`subHeaderSmall dark mt-3 mb-4`}>*/}
                    {/*        Community Park*/}
                    {/*    </h5>*/}
                    {/*</Col>*/}
                    {/*<Col sm={4} xs={6} md={2} className={styles.eFeatureItem}>*/}
                    {/*    <LicensePlate />*/}
                    {/*    <h5 className={`subHeaderSmall dark mt-3 mb-4`}>*/}
                    {/*        Numberplate Recognition*/}
                    {/*    </h5>*/}
                    {/*</Col>*/}

                </Row>
            </Container>
        </section>
    );
}
