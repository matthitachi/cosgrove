import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// @ts-ignore
import {ReactComponent as ArrowRightSvg} from "/public/assets/svg/arrow-right.svg";
import Slider from "../../Elements/Slider/index";
import HomeItem from "../../Elements/HomeItem";
import {Link} from "@inertiajs/inertia-react";
import { getAllProjectDetails } from "../../../Services/cosgroveApiServices";
import { useCmsData } from "../../../Hooks/useCmsData";
import { ApiPageSection } from "../../../types/cms";

interface Props { cmsSection?: ApiPageSection; }

export default function ({ cmsSection }: Props) {
    React.useEffect(() => { AOS.init({duration: 2000}); }, []);

    const { data: allDetails } = useCmsData(getAllProjectDetails);

    const homeListItems = (allDetails ?? []).flatMap(p =>
        (p.house_types ?? []).map((h, idx) => {
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
        <section className={`${styles.ourHomeSection} mt-150`}>
            <Container>
                <h4 data-aos="fade-right" className={`subHeader mb-25`}>{(cmsSection?.data?.label as string) ?? "Our Homes"}</h4>
                <Row className={styles.ourHomeIntro}>
                    <Col data-aos="fade-right" md={6} className={styles.ourHomeIntroHeader}>
                        <h2 className={`headerDark`}>Tech-Embedded</h2>
                        <h2 className={`headerDark`}>Buildings</h2>
                    </Col>
                    <Col data-aos="fade-left" md={6}>
                        <p className={`textPrimary`}>
                            {(cmsSection?.data?.subheading as string) ?? "Each of our homes is a marvel of modern engineering and an investment in your future. From sleek apartments and townhouses to opulent penthouses and villas, our diverse range of residences caters to every style and need."}
                        </p>
                        <Link href={(cmsSection?.data?.learn_more_url as string) ?? "/project-homes"} className={"text"}>
                            {(cmsSection?.data?.learn_more_label as string) ?? "Learn More"} <ArrowRightSvg/>
                        </Link>
                    </Col>
                </Row>
                <div className={styles.sliderCtx} data-aos="fade-up">
                    <Slider settings={settings} childrenItems={homeListItems} />
                </div>
            </Container>
        </section>
    );
}
