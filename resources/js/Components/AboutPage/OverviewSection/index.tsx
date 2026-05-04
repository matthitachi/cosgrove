import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import * as React from "react";
import FeaturesItem from "../../Elements/FeaturesItem";
import Slider from "../../Elements/Slider";
import RecordList, { RecordItemProp } from "../../Elements/RecordList";
import SupportList, { SupportItemProp } from "../../Elements/SupportList";
import TeamSection from "../TeamSection";
import { ApiPageSection } from "../../../types/cms";

interface Props {
    introSection?: ApiPageSection;
    bodySection?: ApiPageSection;
    missionSection?: ApiPageSection;
    visionSection?: ApiPageSection;
    awardsSection?: ApiPageSection;
    creativitySection?: ApiPageSection;
    statsSection?: ApiPageSection;
    teamSection?: ApiPageSection;
}

export default function ({
    introSection,
    bodySection,
    missionSection,
    visionSection,
    awardsSection,
    creativitySection,
    statsSection,
    teamSection,
}: Props) {
    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const recordList: RecordItemProp[] = [
        {
            image: "/assets/images/icons/homes.png",
            title: (statsSection?.data?.stat_1_title as string) ?? "Homes Built",
            count: (statsSection?.data?.stat_1_count as string) ?? "1000+",
        },
        {
            image: "/assets/images/icons/projects.png",
            title: (statsSection?.data?.stat_2_title as string) ?? "Projects",
            count: (statsSection?.data?.stat_2_count as string) ?? "10+",
        },
        {
            image: "/assets/images/icons/awards.png",
            title: (statsSection?.data?.stat_3_title as string) ?? "Awards",
            count: (statsSection?.data?.stat_3_count as string) ?? "30+",
        },
        {
            image: "/assets/images/icons/clients.png",
            title: (statsSection?.data?.stat_4_title as string) ?? "Global Clients",
            count: (statsSection?.data?.stat_4_count as string) ?? "1000+",
        },
    ];

    const supportList: SupportItemProp[] = [
        {
            title: (statsSection?.data?.support_1_title as string) ?? "Talk To Us",
            description: (statsSection?.data?.support_1_desc as string) ?? "Get started with Cosgrove by speaking to one of our experts.",
            image: "/assets/images/icons/support.png",
            buttonText: (statsSection?.data?.support_1_button as string) ?? "Let's Talk",
            buttonAction: () => {
                window.location.href = (statsSection?.data?.support_1_url as string) ?? "/contact";
            },
        },
        {
            title: (statsSection?.data?.support_2_title as string) ?? "Project Brochures",
            description: (statsSection?.data?.support_2_desc as string) ?? "Explore our catalog through our collection of brochures.",
            image: "/assets/images/icons/brochure.png",
            buttonText: (statsSection?.data?.support_2_button as string) ?? "Download Brochures",
            buttonBgDark: true,
            buttonAction: () => {
                window.location.href = (statsSection?.data?.support_2_url as string) ?? "/project-brochure";
            },
        },
    ];

    return (
        <section className={styles.overviewSection}>
            <Container>
                <Row className={`mb-5`}>
                    <Col md={12} lg={5} data-aos="fade-right">
                        <h4 className={"subHeader"}>{(introSection?.data?.label as string) ?? "About us"}</h4>
                        <h2 className={"headerDark  mb-4"}>{(introSection?.data?.heading as string) ?? "The Cosgrove Way"}</h2>
                    </Col>
                    <Col md={12} lg={7} data-aos="fade-up">
                        <p className="textPrimary mb-4">
                            {(introSection?.data?.body as string) ?? "Established in 2017, Cosgrove is at the forefront of disruption in the real estate industry, Cosgrove is shaping new lifestyles with a focus on the integration of revolutionary technology into residential and commercial real estate using sustainable methods."}
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} data-aos="fade-up">
                        <p className="textPrimary mb-4">
                            {(bodySection?.data?.body as string) ?? "Cosgrove's leadership team is composed of the industry's highly experienced leaders with a passion for unswerving excellence. As we continue to grow our vision of becoming the leading real estate developer in Africa, the guarantee of integrity, professionalism and reliability remains equal to the best obtainable anywhere in the world."}
                        </p>
                        <h4 className="subHeaderDark" style={{ marginBottom: "20px" }}>
                            {(missionSection?.data?.heading as string) ?? "Our Mission"}
                        </h4>
                        <p className="textPrimary mb-4">
                            {(missionSection?.data?.body as string) ?? "Constantly transforms urban living in Africa, blending innovative design with advanced technology, while steadfastly prioritising quality, sustainability, and visionary real estate solutions."}
                        </p>
                        <h4 className="subHeaderDark" style={{ marginBottom: "20px" }}>
                            {(visionSection?.data?.heading as string) ?? "Our Vision"}
                        </h4>
                        <p className="textPrimary mb-4">
                            {(visionSection?.data?.body as string) ?? "Become the gold-standard in next-generation living across Africa. We envision a future where every Cosgrove residence defines the benchmark for luxury, technology, and sustainability, offering homeowners the pinnacle of modern living."}
                        </p>
                    </Col>
                </Row>

                <Row className={`mt-5`}>
                    <Col xs={12} md={6} data-aos="fade-right">
                        <SupportList supportList={supportList} />
                    </Col>
                    <Col xs={12} md={6} className={`p-5`} data-aos="fade-left">
                        <RecordList recordList={recordList} />
                    </Col>
                </Row>
            </Container>

            <TeamSection
                heading={(teamSection?.data?.heading as string) ?? undefined}
                subheading={(teamSection?.data?.subheading as string) ?? undefined}
            />

            <Container>
                <div data-aos="fade-up">
                    <h4
                        className={`subHeaderDark`}
                        style={{ marginBottom: "20px" }}
                    >
                        {(awardsSection?.data?.heading as string) ?? "Awards & Recognition"}
                    </h4>
                    <p className={`textPrimary`}>
                        {(awardsSection?.data?.paragraph_1 as string) ?? "Over the years, our relentless pursuit of excellence has earned us accolades in the industry. We've been recognized as the 'Real Estate Company of the Year' and 'Smart City Developer of the Year' at the Nigeria Housing Awards. Our Chairman/CEO, Mr. Umar Abdullahi, has been honored with the title of Officer of the Order of the Federal Republic (OFR) by the Federal Government, highlighting our profound contribution to the housing industry in Nigeria."}
                    </p>
                    <p className={`textPrimary`}>
                        {(awardsSection?.data?.paragraph_2 as string) ?? "We are also the proud recipients of the prestigious 'Leadership in Smart Housing 2021' award from the Nigerian Institute of Town Planners. At Cosgrove, we continue to set the standard."}
                    </p>
                </div>
            </Container>

            <Container className="mt-5">
                <div className={`sidedContainer mb-5`}>
                    <Row>
                        <Col
                            md={12}
                            lg={7}
                            className={`info m- mb-5 mt-5`}
                            data-aos="fade-right"
                        >
                            <h4 className={"subHeader"}>{(creativitySection?.data?.label as string) ?? "More from Us"}</h4>
                            <h2 className={"headerDark  mb-4"}>
                                {(creativitySection?.data?.heading as string) ?? "Hard Work meets Creativity"}
                            </h2>
                            <p className={"textPrimary mt-5"}>
                                {(creativitySection?.data?.body as string) ?? "At the heart of Cosgrove is a group of trailblazers, led by our Chairman/CEO, Umar Abdullahi OFR. With his over two-decade long journey in real estate and finance, he has seen industries evolve, embracing game-changing technologies to keep Cosgrove at the forefront​. Our team is a powerhouse of growth, with a combined experience of over 120 years. Each member contributes their expertise in a culture that fosters collaboration and innovation. At Cosgrove Africa, we're not just builders, we're visionaries, reshaping the landscape of the real estate market​."}
                            </p>
                        </Col>
                        <Col md={12} lg={5} data-aos="fade-left">
                            <div
                                className={`sidedContainerBG ${styles.aboutBg}`}
                            />
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
}
