import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import AOS from "aos";
import "aos/dist/aos.css";
import * as React from "react";
// @ts-ignore
import { ReactComponent as ArrowRight2Svg } from "/public/assets/svg/arrow-right-2.svg";
// @ts-ignore
import arrowRightSvg from "/public/assets/svg/arrow-right.svg";
// @ts-ignore
import { ReactComponent as MapPinSvg } from "/public/assets/svg/map-pin.svg";
import FeaturesItem from "../../Elements/FeaturesItem";
import Slider from "../../Elements/Slider";
import RecordList, { RecordItemProp } from "../../Elements/RecordList";
import SupportList, { SupportItemProp } from "../../Elements/SupportList";
import TeamSection from "../TeamSection";

export default function () {
    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
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
                },
            },
        ],
    };

    const recordList: RecordItemProp[] = [
        {
            image: "/assets/images/icons/homes.png",
            title: "Homes Built",
            count: "1000+",
        },
        {
            image: "/assets/images/icons/projects.png",
            title: "Projects",
            count: "10+",
        },
        {
            image: "/assets/images/icons/awards.png",
            title: "Awards",
            count: "30+",
        },
        {
            image: "/assets/images/icons/clients.png",
            title: "Global Clients",
            count: "1000+",
        },
    ];
    const supportList: SupportItemProp[] = [
        {
            title: "Talk To Us",
            description: "Get started with Cosgrove by speaking to one of our experts.",
            image: "/assets/images/icons/support.png",
            buttonText: "Let’s Talk",
            buttonAction: () => {
                window.location.href = '/contact';
            },
        },
        {
            title: "Project Brochures",
            description: "Explore our catalog through our collection of brochures.",
            image: "/assets/images/icons/brochure.png",
            buttonText: "Download Brochures",
            buttonBgDark: true,
            buttonAction: () => {
                window.location.href = '/project-brochure';
            },
        },
    ];
    return (
        <section className={styles.overviewSection}>
            <Container>
                <Row className={`mb-5`}>
                    <Col md={12} lg={5} data-aos="fade-right">
                        <h4 className={"subHeader"}>About us</h4>
                        <h2 className={"headerDark  mb-4"}>The Cosgrove Way</h2>
                    </Col>
                    <Col md={12} lg={7} data-aos="fade-left">
                        <p
                            className={`textPrimary mb-4 ${styles.topParagraph}`}
                        >
                            Established in 2017, Cosgrove is at the forefront of disruption in the real estate industry,
                            Cosgrove Investment Limited is shaping new lifestyles with a focus on the integration of
                            revolutionary technology into residential and commercial real estate using sustainable methods.
                        </p>
                    </Col>
                    <Col sm={12} data-aos="fade-up">
                        <p className={`textPrimary mb-4`}>
                            Cosgrove’s leadership team is composed of the industry’s highly experienced leaders with a
                            passion for unswerving excellence. As we continue to grow our vision of becoming the leading
                            real estate developer in Africa, the guarantee of integrity, professionalism and reliability
                            remains equal to the best obtainable anywhere in the world.

                        </p>

                        <h4
                            className={`subHeaderDark`}
                            style={{ marginBottom: "20px" }}
                        >
                            Our Mission
                        </h4>
                        <p  className={`textPrimary mb-4`}>
                            Constantly transforms urban living in Africa, blending innovative design with advanced
                            technology, while steadfastly prioritising quality, sustainability, and visionary real estate solutions.

                        </p>

                        <h4
                            className={`subHeaderDark`}
                            style={{ marginBottom: "20px" }}
                        >
                            Our Vision
                        </h4>
                        <p  className={`textPrimary mb-4`}>
                            Become the gold-standard in next-generation living across Africa. We envision a future
                            where every Cosgrove residence defines the benchmark for luxury, technology, and sustainability,
                            offering homeowners the pinnacle of modern living.


                        </p>
                    </Col>
                </Row>

                <Row className={`mt-5`}>
                    <Col xs={12} md={6} data-aos="fade-right">
                        <SupportList supportList={supportList} />
                    </Col>
                    <Col xs={12} md={6} className={`p-5`} data-aos="fade-left">
                        <RecordList recordList={recordList} />
                    </Col>
                </Row>
            </Container>




            <TeamSection />
            <Container>
                <div data-aos="fade-up">
                    <h4
                        className={`subHeaderDark`}
                        style={{ marginBottom: "20px" }}
                    >
                        Awards & Recognition
                    </h4>
                    <p className={`textPrimary`}>
                        Over the years, our relentless pursuit of excellence has
                        earned us accolades in the industry. We've been
                        recognized as the 'Real Estate Company of the Year' and
                        'Smart City Developer of the Year' at the Nigeria
                        Housing Awards. Our Chairman/CEO, Mr. Umar
                        Abdullahi, has been honored with the title of Officer of
                        the Order of the Federal Republic (OFR) by the Federal
                        Government, highlighting our profound contribution to
                        the housing industry in Nigeria.
                    </p>
                    <p className={`textPrimary`}>
                        We are also the proud recipients of the prestigious
                        'Leadership in Smart Housing 2021' award from the
                        Nigerian Institute of Town Planners. At Cosgrove Investment Limited,
                        we continue to set the standard.
                    </p>
                </div>
            </Container>
            <Container className="mt-5">
                <div className={`sidedContainer mb-5`}>
                    <Row>
                        <Col
                            md={12}
                            lg={7}
                            className={`info m- mb-5 mt-5`}
                            data-aos="fade-right"
                        >
                            <h4 className={"subHeader"}>More from Us</h4>
                            <h2 className={"headerDark  mb-4"}>
                                Hard Work meets Creativity
                            </h2>
                            <p className={"textPrimary mt-5"}>
                                At the heart of Cosgrove Investment Limited is a group of
                                trailblazers, led by our Chairman/CEO, Umar Abdullahi OFR.
                                With his over two-decade long journey in real estate
                                and finance, he has seen industries evolve,
                                embracing game-changing technologies to keep
                                Cosgrove at the forefront​.  Our team is a
                                powerhouse of growth, with a combined experience
                                of over 120 years. Each member contributes their
                                expertise in a culture that fosters
                                collaboration and innovation. At Cosgrove
                                Africa, we're not just builders, we're
                                visionaries, reshaping the landscape of the real
                                estate market​.
                            </p>
                        </Col>
                        <Col md={12} lg={5} data-aos="fade-left">
                            <div
                                className={`sidedContainerBG ${styles.aboutBg}`}
                            />
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
}
