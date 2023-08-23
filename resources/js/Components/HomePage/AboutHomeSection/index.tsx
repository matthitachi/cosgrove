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

export default function () {
    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <section className={styles.infoHomeSection}>
            <Container fluid>
                <Row>
                    <Col sm={12} md={6} className={styles.infoHomeCol}>
                        <div className={styles.infoHomeBG} data-aos="fade-right"/>
                    </Col>

                    <Col sm={12} md={6} className={styles.infoHomeInfo}>
                        <h5 className={'subHeaderSmall'} data-aos="fade-left">About Us</h5>
                        <h2 data-aos="fade-left" className={`headerDark ${styles.m65}`}>
                            We are Building the Future <br /> of African Real
                            Estate
                        </h2>
                        <p className='textPrimary' data-aos="fade-left">
                            At Cosgrove Africa, we don't just develop properties
                            – we envision the future. As leaders in the real
                            estate industry in Africa, we masterfully shape
                            residential and commercial spaces that marry
                            unparalleled luxury with cutting-edge technology.
                            <br />
                            <br />
                            Our commitment to sustainability breathes life into
                            each of our projects, creating environments that are
                            as eco-conscious as they are exquisite. Here, we
                            design the extraordinary. Here, we set the standard.
                        </p>
                        <button data-aos="fade-left" className='text'>
                            Learn More{" "}
                            <img
                                className={styles.arrowRightSvg}
                                src={arrowRightSvg}
                                alt="Your SVG"
                            />
                        </button>

                        <RecordList recordList={ [
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
                            ]}/>


                            <SupportList supportList={[
                                {
                                    title: "Talk To Us",
                                    description: "Lorem Ipsum Dolor Sit amet impo rum emetsum",
                                    image: "/assets/images/icons/support.png",
                                    buttonText: "Let’s Talk",
                                    buttonAction: () => {
                                        window.location.href = '/contact';
                                    },
                                },
                                {
                                    title: "Project Brochures",
                                    description: "Lorem Ipsum Dolor Sit amet impo rum emetsum ",
                                    image: "/assets/images/icons/brochure.png",
                                    buttonText: "Download Brochures",
                                    buttonBgDark: true,
                                    buttonAction: () => {
                                        window.location.href = '/project-brochure';
                                    },
                                },
                            ]}/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
