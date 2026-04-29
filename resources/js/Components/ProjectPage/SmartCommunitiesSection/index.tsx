import { Container } from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import * as React from "react";
// @ts-ignore
import arrowRightSvg from "/public/assets/svg/arrow-right.svg";
import FeaturesItem from "../../Elements/FeaturesItem";
import Slider from "../../Elements/Slider";
import ProjectItem, { ProjectItemProp } from "../../Elements/ProjectItem/index";
import { getProjects, getSmartFeatures, ApiProject } from "../../../Services/cosgroveApiServices";
import { useCmsData } from "../../../Hooks/useCmsData";

function toProjectItemProp(p: ApiProject): ProjectItemProp {
    return {
        name: p.name,
        slug: p.slug,
        location: p.location,
        description: p.description || '',
        mainImg: p.thumbnail,
        detailsImg: p.hero_image,
        distFeature: [],
        galleryBasePath: '',
        gallery: [],
        showInHome: p.show_in_home,
        estateFeatures: [],
    };
}

export default function () {
    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const { data: features } = useCmsData(getSmartFeatures);
    const { data: apiProjects } = useCmsData(getProjects);
    const projectList: ProjectItemProp[] = (apiProjects ?? []).map(toProjectItemProp);

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows: true,
        responsive: [
            { breakpoint: 1400, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true } },
            { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true } },
            { breakpoint: 992,  settings: { slidesToShow: 2, slidesToScroll: 2, infinite: true } },
            { breakpoint: 600,  settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 1 } },
            { breakpoint: 480,  settings: { slidesToShow: 2, slidesToScroll: 2 } },
        ],
    };

    return (
        <section className={styles.projectHomeSection}>
            <Container>
                <h4 className={'subHeader'} data-aos="fade-right">Projects</h4>
                <div className={styles.projectIntro} data-aos="fade-right">
                    <h2 className={'headerDark'}>The Cosgrove Collection</h2>
                    <p className={'textPrimary'}>
                        Our projects are not just buildings, they're the embodiment of forward-thinking
                        design and cutting-edge technology, seamlessly integrated to create next-generation
                        smart homes. Each home is a testament to our commitment to quality, our passion for
                        innovation, and our dedication to crafting spaces that go beyond the ordinary.
                    </p>
                </div>

                <h3 className={"subHeaderDark mt-5"}>Smart Estate Features</h3>

                <div className={styles.featuresCtx} data-aos="fade-up">
                    <Slider
                        settings={settings}
                        childrenItems={[
                            ((features ?? []).map((item, key) =>
                                <FeaturesItem title={item.name} color={"#000"} description={item.description} key={key} />
                            )),
                        ]}
                    />
                </div>

                <h3 className={"subHeaderDark mt-5 "}>Projects</h3>
                {projectList.map((item, index) => (<ProjectItem {...item} key={index}/>))}

                <div className={`text-center ${styles.seeAll}`}>
                    <button className={"text"}>
                        See all projects{" "}
                        <img className={styles.arrowRightSvg} src={arrowRightSvg} alt="Cosgrove Real Estate - Projects" />
                    </button>
                </div>
            </Container>
        </section>
    );
}


