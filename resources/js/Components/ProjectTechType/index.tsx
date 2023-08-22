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
import AOS from "aos";
import "aos/dist/aos.css";
import * as React from "react";
// @ts-ignore
import { ReactComponent as ArrowRight2Svg } from "/public/assets/svg/arrow-right-2.svg";
// @ts-ignore
import { ReactComponent as ArrowRightSvg } from "/public/assets/svg/arrow-right.svg";
// @ts-ignore
import { ReactComponent as ArrowNext } from "/public/assets/svg/next.svg";
// @ts-ignore
import { ReactComponent as ArrowPrevious } from "/public/assets/svg/prev.svg";
// import Slider from "react-slick";
import Slider from "../Slider/index";
import { useState } from "react";

export default function () {
    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const SliderNext = (props) => {
        return <ArrowNext {...props} className={styles.sliderNext} />;
    };
    const SliderPrevious = (props) => {
        return <ArrowPrevious {...props} className={styles.sliderPrevious} />;
    };
    const settings = {
        dots: true,
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
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
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
                },
            },
        ],
    };

    return (
        <section
            data-aos="fade-up"
            className={`${styles.ourHomeSection} mt-5`}
            style={{ marginBottom: "10rem" }}
        >
            <Container>
                <Row className={styles.ourHomeIntro}>
                    <Col md={12} className={styles.ourHomeIntroHeader}>
                        <h2 className={`mb-25`} style={{ marginLeft: "1rem" }}>
                            House Types
                        </h2>
                    </Col>
                </Row>

                <div className={styles.sliderCtx}>
                    <Slider
                        settings={settings}
                        childrenItems={[
                            <HomesItem />,
                            <HomesItem />,
                            <HomesItem />,
                            <HomesItem />,
                            <HomesItem />,
                            <HomesItem />,
                            <HomesItem />,
                            <HomesItem />,
                            <HomesItem />,
                            <HomesItem />,
                            <HomesItem />,
                        ]}
                    />
                </div>
            </Container>
        </section>
    );
}

const HomesItem = () => {
    const [isHover, setIsHover] = useState(false);
    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };
    const style = {
        background: `${
            isHover
                ? "linear-gradient(0deg, rgba(251, 189, 0, 0.80) 0%, rgba(251, 189, 0, 0.80) 100%)"
                : "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%)"
        },
             url('/assets/images/homes/carousel/home.png')`,
    };
    return (
        <div
            className={styles.homesCarouselItem}
            style={style}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={styles.info}>
                <h3 className={`${isHover ? "headerDark" : "headerWhite"}`}>
                    Oak
                </h3>
                <div
                    className={`${isHover ? "textDark" : "textWhite"} ${
                        styles.description
                    }`}
                >
                    5 Bedroom
                    <br />
                    Fully detached Duplex
                </div>
                <a
                    href={""}
                    className={`${isHover ? "textDark" : "textWhite"}`}
                >
                    View Project <ArrowRightSvg />
                </a>
            </div>
        </div>
    );
};
