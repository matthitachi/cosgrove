import {
    Button,
    Col,
    Container,
    Nav,
    Navbar,
    NavDropdown,
    Row,
} from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import AOS from "aos";
import "aos/dist/aos.css";
import * as React from "react";
import RecordList from "../../Elements/RecordList"
import SupportList from "../../Elements/SupportList"
// @ts-ignore
import arrowRightSvg from "/public/assets/svg/arrow-right.svg";
import {Link} from "@inertiajs/inertia-react";
import { ApiPageSection } from "../../../types/cms";

interface Props { cmsSection?: ApiPageSection; }

export default function ({ cmsSection }: Props) {
    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <section className={styles.infoHomeSection}>
            <p style={{ display: 'none' }}>A Real Estate Development, Property Development Company in Abuja, Nigeria</p>
            <Container fluid>
                <Row>
                    <Col sm={12} md={6} className={styles.infoHomeCol}>
                        <div className={styles.infoHomeBG} data-aos="fade-right"/>
                    </Col>

                    <Col sm={12} md={6} className={styles.infoHomeInfo}>
                        <h5 className={'subHeaderSmall'} data-aos="fade-left">
                            {(cmsSection?.data?.label as string) ?? 'About Us'}
                        </h5>
                        <h2 data-aos="fade-left" className={`headerDark ${styles.m65}`}>
                            {(cmsSection?.data?.heading as string) ?? "We are Building the Future of Africa's Real Estate"}
                        </h2>
                        <p className='textPrimary' data-aos="fade-left" style={{ whiteSpace: 'pre-line' }}>
                            {(cmsSection?.data?.body as string) ?? "At Cosgrove, we don't just develop properties – we envision the future. As leaders in the real estate industry in Africa, we masterfully shape residential and commercial spaces that marry unparalleled luxury with cutting-edge technology.\n\nOur commitment to sustainability breathes life into each of our projects, creating environments that are as eco-conscious as they are exquisite. Here, we design the extraordinary. Here, we set the standard."}
                        </p>
                        <div style={{marginBottom: '100px'}}>
                        <Link data-aos="fade-left" href={''} className='text'>
                            Learn More{" "}
                            <img
                                className={styles.arrowRightSvg}
                                src={arrowRightSvg}
                                alt="Cosgrove Real Estate - Learn More"
                            />
                        </Link>
                        </div>

                        <RecordList recordList={ [
                        {
                            image: "/assets/images/icons/homes.png",
                            title: (cmsSection?.data?.stat_1_label as string) ?? "Homes Built",
                            count: (cmsSection?.data?.stat_1_value as string) ?? "1000+",
                        },
                        {
                            image: "/assets/images/icons/projects.png",
                            title: (cmsSection?.data?.stat_2_label as string) ?? "Projects",
                            count: (cmsSection?.data?.stat_2_value as string) ?? "10+",
                        },
                        {
                            image: "/assets/images/icons/awards.png",
                            title: (cmsSection?.data?.stat_3_label as string) ?? "Awards",
                            count: (cmsSection?.data?.stat_3_value as string) ?? "30+",
                        },
                        {
                            image: "/assets/images/icons/clients.png",
                            title: (cmsSection?.data?.stat_4_label as string) ?? "Global Clients",
                            count: (cmsSection?.data?.stat_4_value as string) ?? "1000+",
                        },
                            ]}/>


                            <SupportList supportList={[
                                {
                                    title: (cmsSection?.data?.cta_1_label as string) ?? "Talk To Us",
                                    description: (cmsSection?.data?.cta_1_desc as string) ?? "Get started with Cosgrove by speaking to one of our experts.",
                                    image: "/assets/images/icons/support.png",
                                    buttonText: (cmsSection?.data?.cta_1_button as string) ?? "Let’s Talk",
                                    buttonAction: () => {
                                        window.location.href = (cmsSection?.data?.cta_1_url as string) ?? "/contact";
                                    },
                                },
                                {
                                    title: (cmsSection?.data?.cta_2_label as string) ?? "Project Brochures",
                                    description: (cmsSection?.data?.cta_2_desc as string) ?? "Explore our catalog through our collection of brochures.",
                                    image: "/assets/images/icons/brochure.png",
                                    buttonText: (cmsSection?.data?.cta_2_button as string) ?? "Download Brochures",
                                    buttonBgDark: true,
                                    buttonAction: () => {
                                        window.location.href = (cmsSection?.data?.cta_2_url as string) ?? "/project-brochure";
                                    },
                                },
                            ]}/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
