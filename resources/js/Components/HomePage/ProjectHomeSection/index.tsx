import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
import ProjectItem, { ProjectItemProp } from "../../Elements/ProjectItem/index";
// @ts-ignore
import arrowRightSvg from "/public/assets/svg/arrow-right.svg";
import {Link} from "@inertiajs/inertia-react";
import { getHomeProjects, ApiProject } from "../../../Services/cosgroveApiServices";
import { useCmsData } from "../../../Hooks/useCmsData";
import { ApiPageSection } from "../../../types/cms";

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

interface Props { cmsSection?: ApiPageSection; }

export default function ({ cmsSection }: Props) {
    const { data: projects } = useCmsData(getHomeProjects);
    const projectToDisplay: ProjectItemProp[] = (projects ?? []).map(toProjectItemProp);
    return (
        <section className={styles.projectHomeSection}>
            <Container>
                <h4 className={'subHeader'} data-aos="fade-right">{(cmsSection?.data?.label as string) ?? "Projects"}</h4>
                <Row className={styles.projectIntro}>
                    <Col
                        md={6}
                        className={styles.projectIntroHeader}
                        data-aos="fade-right"
                    >
                        <h2 className={'headerDark'}>Smart</h2>
                        <h2 className={'headerDark'}>Communities</h2>
                    </Col>
                    <Col md={6} data-aos="fade-left">
                        <p className={'textPrimary'}>
                            {(cmsSection?.data?.subheading as string) ?? "Our projects are not just buildings; they're the embodiment of forward-thinking design and cutting-edge technology, seamlessly integrated to create next-generation smart homes. Each home is a testament of our commitment to quality, our passion for innovation, and our dedication to crafting spaces that go beyond the ordinary."}
                        </p>
                        <Link href={'/projects'} className={"text"}>
                            Learn More{" "}
                            <img
                                className={styles.arrowRightSvg}
                                src={arrowRightSvg}
                                alt="Cosgrove Real Estate - Learn More"
                            />
                        </Link>
                    </Col>
                </Row>
                {
                    projectToDisplay.map((item, index) => (<ProjectItem {...item} key={index}/>))
                }


                <div className={`text-center ${styles.seeAll}`}>
                    <Link href={'/projects'} className={"text"} >
                        See all projects{" "}
                        <img
                            className={styles.arrowRightSvg}
                            src={arrowRightSvg}
                            alt="Cosgrove Real Estate - Projects"
                        />
                    </Link>
                </div>
            </Container>
        </section>
    );
}

