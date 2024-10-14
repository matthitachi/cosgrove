import { Col, Container, Row } from "react-bootstrap";
import {estateFeatures} from "../../../Data/data";
// @ts-ignore
import styles from "./styles.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import * as React from "react";
// @ts-ignore
import {ReactComponent as ArrowRight2Svg} from "/public/assets/svg/arrow-right-2.svg";
// @ts-ignore
import arrowRightSvg from "/public/assets/svg/arrow-right.svg";
// @ts-ignore
import { ReactComponent as MapPinSvg } from "/public/assets/svg/map-pin.svg";
import FeaturesItem, {featuresItemProp} from "../../Elements/FeaturesItem";
import Slider from "../../Elements/Slider";
import ProjectItem  from "../../Elements/ProjectItem/index";

// @ts-ignore
import { ReactComponent as Camera } from "/public/assets/svg/cctv-camera.svg";
// @ts-ignore
import { ReactComponent as ModernHome } from "/public/assets/svg/smart-home.svg";
// @ts-ignore
import { ReactComponent as Helmet } from "/public/assets/svg/helmet.svg";
// @ts-ignore
import { ReactComponent as ServiceCenter } from "/public/assets/svg/service-center.svg";
// @ts-ignore
import { ReactComponent as Luxury } from "/public/assets/svg/modern-house.svg";

import {projects} from "../../../Data/data"

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
    const featureList: featuresItemProp[] = [
        {
            icon: <ModernHome  stroke={'rgba(0,0,0,0.4)'}/>,
            title: 'Fully Automated',
            description: 'Experience life on autopilot, where convenience meets innovation.'
        },
        {
            icon: <Camera stroke={'rgba(0,0,0,0.4)'}/>,
            title: 'Top-tier Security',
            description: 'Your safety, our excellence - guarding tranquility with mastery.'
        },
        {
            icon: <Luxury stroke={'rgba(0,0,0,0.4)'}/>,
            title: 'Unbeatable Luxury',
            description: 'Elevate living to an art form, where opulence knows no bounds.'
        },
        {
            icon: <ServiceCenter stroke={'rgba(0,0,0,0.4)'}/>,
            title: 'Fully Serviced Estates',
            description: 'Seamless living in meticulously serviced estates.'
        },
        {
            icon: <Helmet stroke={'rgba(0,0,0,0.4)'}/>,
            title: 'Industry-Leading Construction',
            description: 'Crafting dreams with precision, where quality shapes reality.'
        },
    ];
    return (
        <section className={styles.projectHomeSection}>
            <Container>
                <h4 className={'subHeader'} data-aos="fade-right">Projects</h4>
                <Row className={styles.projectIntro}>
                    <Col
                        md={4}
                        className={styles.projectIntroHeader}
                        data-aos="fade-right"
                    >
                        <h2 className={'headerDark'}>The Cosgrove </h2>
                        <h2 className={'headerDark'}>Collection</h2>
                    </Col>
                    <Col md={8} data-aos="fade-left">
                        <p className={'textPrimary'}>
                            Our projects are not just buildings, they're the embodiment of forward-thinking
                            design and cutting-edge technology, seamlessly integrated to create next-generation
                            smart homes. Each home is a testament to our commitment to quality, our passion for
                            innovation, and our dedication to crafting spaces that go beyond the ordinary. With
                            meticulous attention to detail, we elevate every aspect of modern living, ensuring that
                            each residence is not just a house, but a home that enriches your life and stands as a
                            symbol of timeless elegance.

                        </p>
                        {/*<button className={'text'}>*/}
                        {/*    Learn More <img  className={styles.arrowRightSvg} src={arrowRightSvg} alt="Your SVG" />*/}
                        {/*</button>*/}
                    </Col>
                </Row>

                <h3 className={"subHeaderDark mt-5"}>Smart Estate Features</h3>

                <div className={styles.featuresCtx} data-aos="fade-up">
                    <Slider
                        settings={settings}
                        childrenItems={[
                            (estateFeatures.map((item, key) =>
                                <FeaturesItem title={item.title} color={"#000"}
                                                                          description={item.subText} icon={item.img} key={key}
                            />)),
                        ]}
                    />
                </div>

                {/*<p className={"textPrimary mb-5"} data-aos="fade-up">*/}
                {/*    Our projects are not just buildings; they're the embodiment*/}
                {/*    of forward-thinking design and cutting-edge technology,*/}
                {/*    seamlessly integrated to create next-generation smart homes.*/}
                {/*    Each home is a testament to our commitment to quality, our*/}
                {/*    passion for innovation, and our dedication to crafting*/}
                {/*    spaces that go beyond the ordinary. Our projects are not*/}
                {/*    just buildings; they're the embodiment of forward-thinking*/}
                {/*    design and cutting-edge technology, seamlessly integrated to*/}
                {/*    create next-generation smart homes. Each home is a testament*/}
                {/*    to our commitment to quality, our passion for innovation,*/}
                {/*    and our dedication to crafting spaces that go beyond the*/}
                {/*    ordinary. Our projects are not just buildings; they're the*/}
                {/*    embodiment of forward-thinking design and cutting-edge*/}
                {/*    technology, seamlessly integrated to create next-generation*/}
                {/*    smart homes. Each home is a testament to our commitment to*/}
                {/*    quality, our passion for innovation, and our dedication to*/}
                {/*    crafting spaces that go beyond the ordinary.*/}
                {/*</p>*/}

                <h3 className={"subHeaderDark mt-5 "}>Projects</h3>
                {
                    projects.map((item, index) => (<ProjectItem {...item} key={index}/>))
                }

                <div className={`text-center ${styles.seeAll}`}>
                    <button className={"text"}>
                        See all projects{" "}
                        <img
                            className={styles.arrowRightSvg}
                            src={arrowRightSvg}
                            alt="Cosgrove Real Estate - Projects"
                        />
                    </button>
                </div>
            </Container>
        </section>
    );
}


