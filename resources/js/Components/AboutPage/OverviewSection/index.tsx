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
import FeaturesItem from "../../FeaturesItem";
import Slider from "../../Slider";
import RecordList, { RecordItemProp } from "../../RecordList";
import SupportList, { SupportItemProp } from "../../SupportList";

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
            count: "450+",
        },
        {
            image: "/assets/images/icons/projects.png",
            title: "Projects",
            count: "8",
        },
        {
            image: "/assets/images/icons/awards.png",
            title: "Awards",
            count: "30+",
        },
        {
            image: "/assets/images/icons/clients.png",
            title: "Global Clients",
            count: "800+",
        },
    ];
    const supportList: SupportItemProp[] = [
        {
            title: "Talk To Us",
            description: "Lorem Ipsum Dolor Sit amet impo rum emetsum",
            image: "/assets/images/icons/support.png",
            buttonText: "Let’s Talk",
            buttonAction: () => {},
        },
        {
            title: "Project Brochures",
            description: "Lorem Ipsum Dolor Sit amet impo rum emetsum ",
            image: "/assets/images/icons/brochure.png",
            buttonText: "Download Brochures",
            buttonBgDark: true,
            buttonAction: () => {},
        },
    ];
    return (
        <section className={styles.overviewSection}>
            <Container>
                <Row className={`mb-5`}>
                    <Col md={12} lg={5} data-aos="fade-right">
                        <h4 className={"subHeader"}>Projects</h4>
                        <h2 className={"headerDark  mb-4"}>The Cosgrove Way</h2>
                    </Col>
                    <Col md={12} lg={7} data-aos="fade-left">
                        <p
                            className={`textPrimary mb-4 ${styles.topParagraph}`}
                        >
                            Born in 2017, Cosgrove Africa emerged with a bold
                            vision, rewriting the rules of real estate. We dared
                            to weave technology into our residential and
                            commercial properties, creating Africa's first smart
                            estate.
                        </p>
                    </Col>
                    <Col sm={12} data-aos="fade-up">
                        <p className={`textPrimary mb-4`}>
                            Our portfolio? A curated collection for the
                            discerning investor, high-value properties designed
                            to appreciate over time. Strategically positioned in
                            Abuja, Nigeria, our influence resonates beyond
                            Africa. Our mission? Simple. We're not just
                            developing real estate in Africa, we're taking
                            African real estate global. With our innovative
                            developments, we're crafting a sustainable future,
                            merging luxury, technology, and eco-conscious design
                            into remarkable living experiences​. At Cosgrove
                            Africa, we don't just develop properties – we
                            envision the future. As leaders in the real estate
                            industry in Africa, we masterfully shape residential
                            and commercial spaces that marry unparalleled luxury
                            with cutting-edge technology.
                        </p>
                        <p className={`textPrimary mb-4`}>
                            Our commitment to sustainability breathes life into
                            each of our projects, creating environments that are
                            as eco-conscious as they are exquisite. Here, we
                            design the extraordinary. Here, we set the standard.
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

            <Container>
                <div className={`sidedContainer mb-5`}>
                    <Row>
                        <Col
                            md={12}
                            lg={7}
                            className={`info m- mb-5 mt-5`}
                            data-aos="fade-right"
                        >
                            <h4 className={"subHeader"}>About Us</h4>
                            <h2 className={"headerDark  mb-4"}>
                                Hard Work meets Creativity
                            </h2>
                            <p className={"textPrimary mt-5"}>
                                At the heart of Cosgrove Africa is a group of
                                trailblazers, led by our CEO, Umar Abdullahi.
                                With his two-decade long journey in real estate
                                and finance, Umar has seen industries evolve,
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
                        Housing Awards. Our Chairman and CEO, Mr. Umar
                        Abdullahi, has been honored with the title of Officer of
                        the Order of the Federal Republic (OFR) by the Federal
                        Government, highlighting our profound contribution to
                        the housing industry in Nigeria.
                    </p>
                    <p className={`textPrimary`}>
                        We are also the proud recipients of the prestigious
                        'Leadership in Smart Housing 2021' award from the
                        Nigerian Institute of Town Planners. At Cosgrove Africa,
                        we continue to set the standard.
                    </p>
                </div>
            </Container>
        </section>
    );
}
