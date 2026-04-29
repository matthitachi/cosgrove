import { Container } from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import * as React from "react";
import FeaturesItem from "../../Elements/FeaturesItem";
import Slider from "../../Elements/Slider/index";
import { getSmartFeatures } from "../../../Services/cosgroveApiServices";
import { useCmsData } from "../../../Hooks/useCmsData";
import { featureIconMap } from "../../../Data/featureIcons";

export default function () {
    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const { data: features } = useCmsData(getSmartFeatures);

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
                settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true },
            },
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true },
            },
            {
                breakpoint: 992,
                settings: { slidesToShow: 2, slidesToScroll: 2, infinite: true, dots: true },
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 1 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 2, slidesToScroll: 2, arrows: false },
            },
        ],
    };

    return (
        <section className={styles.SmartFeaturesHomeSection} data-aos="fade-up">
            <div className={`curvedTop ${styles.topCurve}`} />
            <Container className={styles.featuredCtx}>
                <h4 className={`subHeader mb-65 text-center`}>
                    Estate Features
                </h4>

                <div className={styles.smartFeaturesCtx}>
                    <Slider
                        settings={settings}
                        childrenItems={[
                            ((features ?? []).map((item, key) => {
                                const IconComponent = item.icon_key ? featureIconMap[item.icon_key] : undefined;
                                return (
                                    <FeaturesItem
                                        title={item.name}
                                        description={item.description}
                                        icon={IconComponent ? <IconComponent /> : null}
                                        svgColor="#000000"
                                        key={key}
                                    />
                                );
                            }))
                        ]}
                    />
                </div>
                <div className={styles.featuresQuote}>
                    <h4 className={`headerWhite`}>
                        "We will never stop delivering the highest quality."
                    </h4>
                    <h2>-The Cosgrove Team.</h2>
                </div>
            </Container>
        </section>
    );
}
