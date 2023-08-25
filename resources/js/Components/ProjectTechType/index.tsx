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
import Slider from "../Elements/Slider/index";
import { useState } from "react";
import HomeItem, {HomesItemProp} from "../Elements/HomeItem";
import {houseTypes} from "../../Data/data";

export default function () {
    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

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
    const homeListItems = [];
    houseTypes.forEach((item, index) =>{
        homeListItems.push(<HomeItem name={item.name} img={item.img} desc={item.desc} link={'/houses/'+item.slug}
                                      others={''} key={index}/>);
    });
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
                        childrenItems={homeListItems}
                    />
                </div>
            </Container>
        </section>
    );
}

