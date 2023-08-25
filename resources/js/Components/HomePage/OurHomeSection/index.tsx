import {
    Col,
    Container,
    Row,
} from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// @ts-ignore
import {ReactComponent as ArrowRight2Svg} from "/public/assets/svg/arrow-right-2.svg";
// @ts-ignore
import {ReactComponent as ArrowRightSvg} from "/public/assets/svg/arrow-right.svg";
// @ts-ignore
import {ReactComponent as ArrowNext} from "/public/assets/svg/next.svg";
// @ts-ignore
import {ReactComponent as ArrowPrevious} from "/public/assets/svg/prev.svg";
// import Slider from "react-slick";
import Slider from "../../Elements/Slider/index";
import {useState} from "react";
import HomeItem, {HomesItemProp} from "../../Elements/HomeItem";
import {houseTypes, houseTypeItemProps} from "../../../Data/data";


export default function () {
    React.useEffect(() => {
        AOS.init({duration: 2000});
    }, []);

    const SliderNext = (props) => {
        return <ArrowNext {...props} className={styles.sliderNext}/>;
    };
    const SliderPrevious = (props) => {
        return <ArrowPrevious {...props} className={styles.sliderPrevious}/>;
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
    const homeListItems = [];
    houseTypes.forEach((item, index) =>{
        homeListItems.push(<HomeItem name={item.name} img={item.img} desc={item.desc} link={'/houses/'+item.slug}
                                       key={index}/>);
    });
    return (
        <section className={`${styles.ourHomeSection} mt-150`}>
            <Container>
                <h4 data-aos="fade-right" className={`subHeader mb-25`}>
                    Our Homes
                </h4>
                <Row className={styles.ourHomeIntro}>
                    <Col
                        data-aos="fade-right"
                        md={6}
                        className={styles.ourHomeIntroHeader}
                    >
                        <h2 className={`headerDark`}>Tech-Embedded</h2>
                        <h2 className={`headerDark`}>Buildings</h2>
                    </Col>
                    <Col data-aos="fade-left" md={6}>
                        <p className={`textPrimary`}>
                            Our projects are not just buildings; they're the
                            embodiment of forward-thinking design and
                            cutting-edge technology, seamlessly integrated to
                            create next-generation smart homes. Each home is a
                            testament to our commitment to quality, our passion
                            for innovation, and our dedication to crafting
                            spaces that go beyond the ordinary.
                        </p>
                        <button className={"text"}>
                            Learn More <ArrowRightSvg/>
                        </button>
                    </Col>
                </Row>

                <div className={styles.sliderCtx} data-aos="fade-up">
                    <Slider
                        settings={settings}
                        childrenItems={homeListItems}
                    />
                </div>
            </Container>
        </section>
    );
}

