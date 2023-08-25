import {
    Accordion,
    Button,
    Col,
    Container,
    Nav,
    Navbar,
    NavDropdown,
} from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import * as React from "react";
import FeaturesItem, {featuresItemProp} from "../../Elements/FeaturesItem";
// @ts-ignore
import { ReactComponent as Camera } from "/public/assets/svg/cctv-camera.svg";
// @ts-ignore
import { ReactComponent as ModernHome } from "/public/assets/svg/smart-home.svg";
// @ts-ignore
import { ReactComponent as Luxury } from "/public/assets/svg/modern-house.svg";
// @ts-ignore
import { ReactComponent as Park } from "/public/assets/svg/park.svg";

import Slider from "../../Elements/Slider/index";
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
                    arrows: false,
                },
            },
        ],
    };
    const featureList: featuresItemProp[] = [
        {
            icon: <ModernHome  stroke={'rgba(102,102,102,1)'}/>,
            title: 'Fully Automated',
            description: 'Mahiga Imporum Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor.'
        },
        {
            icon: <Camera stroke={'rgba(102,102,102,1)'}/>,
            title: 'Top-tier Security',
            description: 'Mahiga Imporum Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor.'
        },
        {
            icon: <Luxury stroke={'rgba(102,102,102,1)'}/>,
            title: 'Unbeatable Luxury',
            description: 'Mahiga Imporum Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor.'
        },
        {
            icon: <ModernHome stroke={'rgba(102,102,102,1)'}/>,
            title: 'Industry-Leading Construction',
            description: 'Mahiga Imporum Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor.'
        },
    ];

    return (
        <section className={styles.SmartFeaturesHomeSection} data-aos="fade-up">
            <div className={`curvedTop ${styles.topCurve}`} />
            <Container className={styles.featuredCtx}>
                <h4 className={`subHeader mb-65 text-center`}>
                    Smart Features
                </h4>

                <div className={styles.smartFeaturesCtx}>
                    <Slider
                        settings={settings}
                        childrenItems={[
                            (featureList.map((item, key) => <FeaturesItem title={item.title}
                            description={item.description} icon={item.icon} key={key}
                            />))
                        ]}
                    />
                </div>
                <div className={styles.featuresQuote}>
                    <h4 className={`headerWhite`}>
                        “We will never stop delivering the highest quality
                        real-estate.”
                    </h4>
                    <h2>-The Cosgrove Team.</h2>
                </div>
            </Container>
        </section>
    );
}
