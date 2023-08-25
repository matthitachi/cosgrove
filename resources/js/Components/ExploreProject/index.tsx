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
import Slider from "../Elements/Slider/index";
import { useState } from "react";
import HomeItem, {HomesItemProp} from "../.../../Elements/HomeItem";
import {houseTypeItemProps} from "../../Data/data";

interface ExploreProjectProps {
    homeList: houseTypeItemProps[]
}
export default function ({homeList}:ExploreProjectProps) {
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

    // const homeList: HomesItemProp[] = [
    //     {
    //         img: '/assets/images/homes/carousel/home.png',
    //         name: 'Oak',
    //         desc: '5 Bedroom',
    //         others: 'Fully detached Duplex',
    //         link: '/project-types',
    //     },
    //     {
    //         img: '/assets/images/homes/carousel/maple.png',
    //         name: 'Maple',
    //         desc: '3 Bedroom Luxury',
    //         others: 'Apartments',
    //         link: '/project-types',
    //     },
    //     {
    //         img: '/assets/images/homes/carousel/villa.png',
    //         name: 'Villa',
    //         desc: '7 Bedroom Gated Villa',
    //         others: 'With 1 Bed BQ',
    //         link: '/project-types',
    //     },
    //     {
    //         img: '/assets/images/homes/carousel/home.png',
    //         name: 'Oak',
    //         desc: '5 Bedroom',
    //         others: 'Fully detached Duplex',
    //         link: '/project-types',
    //     },
    //     {
    //         img: '/assets/images/homes/carousel/maple.png',
    //         name: 'Maple',
    //         desc: '3 Bedroom Luxury',
    //         others: 'Apartments',
    //         link: '/project-types',
    //     },
    //     {
    //         img: '/assets/images/homes/carousel/villa.png',
    //         name: 'Villa',
    //         desc: '7 Bedroom Gated Villa',
    //         others: 'With 1 Bed BQ',
    //         link: '/project-types',
    //     },
    // ];
    const homeListItems = [];
    homeList.forEach((item, index) =>{
        homeListItems.push(<HomeItem name={item.name} img={item.img} desc={item.desc} link={'/houses/'+item.slug}
                                       key={index}/>);
    });

    return (
        <section
            className={`${styles.ourHomeSection} mt-5`}
            style={{ marginBottom: "10rem" }}
        >
            <Container>
                <h4
                    className={`subHeader mb-25 ml-5`}
                    style={{ marginLeft: "1rem" }}
                >
                    Explore
                </h4>
                <Row className={styles.ourHomeIntro}>
                    <Col md={12} className={styles.ourHomeIntroHeader}>
                        <h2
                            className={`headerDark mb-25`}
                            style={{ marginLeft: "1rem" }}
                        >
                            More House Types from Cosgrove
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


