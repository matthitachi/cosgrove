import { Container, Row, Col } from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import * as React from "react";
// @ts-ignore
import { ReactComponent as ArrowRightSvg } from "/public/assets/svg/arrow-right.svg";
import Slider from "../Elements/Slider/index";
import HomeItem from "../Elements/HomeItem";
import { getAllProjectDetails } from "../../Services/cosgroveApiServices";
import { useCmsData } from "../../Hooks/useCmsData";

export default function () {
    React.useEffect(() => { AOS.init({ duration: 2000 }); }, []);

    const { data: allDetails } = useCmsData(getAllProjectDetails);

    const homeListItems = (allDetails ?? []).flatMap(p =>
        (p.house_types ?? []).map(h => {
            const thumb = h.thumbnail;
            const parts: string[] = [];
            if (h.beds)  parts.push(`${h.beds} Bed${h.beds !== 1 ? 's' : ''}`);
            if (h.baths) parts.push(`${h.baths} Bath${h.baths !== 1 ? 's' : ''}`);
            if (h.area)  parts.push(h.area);
            return (
                <HomeItem
                    key={`${p.id}-${h.id}`}
                    name={h.name}
                    img={thumb}
                    desc={parts.join(' · ') || h.name}
                    others={''}
                    link={'/houses/' + h.slug}
                />
            );
        })
    );

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows: true,
        responsive: [
            { breakpoint: 1400, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true } },
            { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true } },
            { breakpoint: 992,  settings: { slidesToShow: 2, slidesToScroll: 2, infinite: true, dots: true } },
            { breakpoint: 600,  settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 1 } },
            { breakpoint: 480,  settings: { slidesToShow: 2, slidesToScroll: 2 } },
        ],
    };

    return (
        <section data-aos="fade-up" className={`${styles.ourHomeSection} mt-5`} style={{ marginBottom: "10rem" }}>
            <Container>
                <Row className={styles.ourHomeIntro}>
                    <Col md={12} className={styles.ourHomeIntroHeader}>
                        <h2 className={`mb-25`} style={{ marginLeft: "1rem" }}>House Types</h2>
                    </Col>
                </Row>
                <div className={styles.sliderCtx}>
                    <Slider settings={settings} childrenItems={homeListItems} />
                </div>
            </Container>
        </section>
    );
}
