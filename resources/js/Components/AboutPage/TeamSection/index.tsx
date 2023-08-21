import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import * as React from "react";
// @ts-ignore
import { ReactComponent as ArrowRight2Svg } from "/public/assets/svg/arrow-right-2.svg";
// @ts-ignore
import arrowRightSvg from "/public/assets/svg/arrow-right.svg";
// @ts-ignore
import { ReactComponent as MapPinSvg } from "/public/assets/svg/map-pin.svg";

export default function () {
    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <section className={styles.teamSection}>
            <Container>
                <div className={styles.teamHead} data-aos="fade-up">
                    <h4 className={"subHeader"}>The Core Team</h4>
                    <h2 className={"headerDark  mb-4"}>
                        Meet the Minds Behind Cosgrove
                    </h2>
                </div>

                <Row className={styles.teamItem} data-aos="fade-up">
                    <Col sm={12} md={5} lg={3}>
                        <div
                            className={`imageContainerEffect ${styles.teamImg}`}
                            style={{
                                background:
                                    'url("/assets/images/teams/umar.png")',
                            }}
                        ></div>
                    </Col>
                    <Col sm={12} md={7} lg={9} className={styles.teamInfo}>
                        <h4 className={"subHeader mb-4"}>
                            Chairman/Chief Executive Officer
                        </h4>
                        <h2 className={"headerDark  mb-25"}>Umar Abdullahi</h2>

                        <div>
                            <p className={"textPrimary"}>
                                The Cosgrove founder, Umar comes with over 2
                                decades varied experience in Real Estate
                                Development, Investment, and Financial Services.
                                Notably, Umar served as the pioneer Managing
                                Director of Brains & Hammers Ltd. for 8 years.
                            </p>
                            <p className={"textPrimary"}>
                                He directed the foundations for the company’s
                                success; and spearheaded the conceptualization,
                                development, construction, and management of a
                                myriad of housing estates and gated communities.
                                He is specially adept at managing complex
                                projects and diverse teams.
                            </p>
                            <p className={"textPrimary"}>
                                Umar also brings extensive experience from his
                                corporate banking background as well as
                                expertise in negotiations with a commitment to
                                compliance with corporate governance and fiscal
                                discipline. An astute leader whose vision is
                                achieving Cosgrove strategic business goals.
                            </p>
                            <p className={"textPrimary"}>
                                His variegated International Executive
                                Leadership training programs equip him for his
                                new role to steer the company to achieve its
                                long-term vision.
                            </p>
                            <p className={"textPrimary"}>
                                Umar is a graduate of Bayero University, Kano
                                and an alumnus of Cranfield University, UK and
                                attends the Harvard Business School Executive
                                Programs.
                            </p>
                        </div>
                    </Col>
                </Row>

                {/* Second Item  */}
                <Row className={styles.teamItem} data-aos="fade-up">
                    <Col sm={12} md={4} lg={3}>
                        <div
                            className={`imageContainerEffect ${styles.teamImg}`}
                            style={{
                                background:
                                    'url("/assets/images/teams/elizabeth.png")',
                            }}
                        ></div>
                    </Col>
                    <Col sm={12} md={8} lg={9} className={styles.teamInfo}>
                        <h4 className={"subHeader mb-4"}>
                            Chief Operating Officer
                        </h4>
                        <h2 className={"headerDark  mb-25"}>
                            Elizabeth Taylor
                        </h2>

                        <div>
                            <p className={"textPrimary"}>
                                Liz, an Arch Bishop Tutu Fellow of the African
                                Leadership Institute is a business strategist
                                with proven strength tactically executing
                                strategy and delivering on organizational goals.
                                She believes in the combined role of people
                                driven tactics and systems in delivering
                                excellence to all stakeholders.
                            </p>
                            <p className={"textPrimary"}>
                                After a multidisciplinary role spanning nearly
                                16 years, Liz knows what truly drives business
                                process, customer engagement, and strategy. Her
                                strengths include knowledge management, business
                                management, people management, customer
                                relationship management and more.
                            </p>
                            <p className={"textPrimary"}>
                                Liz is an accomplished people developer and
                                trainer with a unique method for creating high
                                performing teams. She is an alumnus of the Said
                                Business School Leadership program (with African
                                Leadership Institute) and Wharton Business
                                School Real Estate program on Housing Finance &
                                Securitization.
                            </p>
                            <p className={"textPrimary"}>
                                In addition to her extensive multidisciplinary
                                experience, Liz is also a certified customer
                                service strategist and coach; she is also a
                                published author.
                            </p>
                            <p className={"textPrimary"}>
                                Liz is a Business Administration graduate of
                                University of Abuja, with an MSc in Knowledge
                                Management from the Aberdeen Business School.
                            </p>
                        </div>
                    </Col>
                </Row>

                {/* THIRD ITEM  */}
                <Row className={styles.teamItem} data-aos="fade-up">
                    <Col sm={12} md={4} lg={3}>
                        <div
                            className={`imageContainerEffect ${styles.teamImg}`}
                            style={{
                                background:
                                    'url("/assets/images/teams/kalli.png")',
                            }}
                        ></div>
                    </Col>
                    <Col sm={12} md={8} lg={9} className={styles.teamInfo}>
                        <h4 className={"subHeader mb-4"}>
                            Chief Technical Officer
                        </h4>
                        <h2 className={"headerDark  mb-25"}>
                            Engr. Baba Kalli
                        </h2>

                        <div>
                            <p className={"textPrimary"}>
                                A graduate of Civil and Water Resources
                                Engineering from the University of Maiduguri,
                                Engr. B. Kalli bringsover 20 years of experience
                                in the Real Estate & Construction Industry –
                                Designing, Constructing and Managing both Public
                                and Private projects across Nigeria. A
                                registered member of the Council for the
                                Regulation of Engineering in Nigeria (COREN),
                                Engr. Baba Kalli is also a seasoned. His
                                dedication, professionalism and unflagging
                                attention-to-detail ensures all Cosgrove
                                offerings are builtand delivered to exceptional
                                quality standards – a key facet of our corporate
                                promise.
                            </p>
                            <p className={"textPrimary"}>
                                He directed the foundations for the company’s
                                success; and spearheaded the conceptualization,
                                development,construction, and management of a
                                myriad of housing estates and gated communities.
                                He has served as Director Technical Operations
                                of BCals Resources Ltd. He led the design and
                                construction of various projects includingthe
                                Oando Nig. Plc. Maitama; BBC Media Office Abuja;
                                Yakubu Gowon Centre in Kumasi Crescent, National
                                Diary Development Commission Headquarters,
                                Abuja; First Shopping Plaza for Jabire Nig.
                                Ltd., Abuja, among many other highly regarded
                                projects.
                            </p>
                            <p className={"textPrimary"}>
                                Prior to this he also served as a Principal
                                Engineer and later Consultant to Futune Nig. Ltd
                                leading the construction of several Turnkey
                                projects including the NIPC building Maitama,
                                Abuja; NSITF office at Wuse 2, Abuja; BUA Estate
                                Asokoro, Abuja; and the British Preparatory
                                School Wuse 2, Abuja.
                            </p>
                            <p className={"textPrimary"}>
                                A registered member of the Council for the
                                Regulation of Engineering in Nigeria (COREN),
                                Engr. Baba Kalli is also a seasoned. His
                                dedication, professionalism and unflagging
                                attention-to-detail ensures all Cosgrove
                                offerings are builtand delivered to exceptional
                                quality standards – a key facet of our corporate
                                promise.
                            </p>
                        </div>
                    </Col>
                </Row>

                {/* FOURTH ITEM  */}
                <Row className={styles.teamItem} data-aos="fade-up">
                    <Col sm={12} md={4} lg={3}>
                        <div
                            className={`imageContainerEffect ${styles.teamImg}`}
                            style={{
                                background:
                                    'url("/assets/images/teams/madhur.png")',
                            }}
                        ></div>
                    </Col>
                    <Col sm={12} md={8} lg={9} className={styles.teamInfo}>
                        <h4 className={"subHeader mb-4"}>
                            Chief Infrastructure Officer
                        </h4>
                        <h2 className={"headerDark  mb-25"}>
                            Engr. Madhur Tripathi
                        </h2>

                        <div>
                            <p className={"textPrimary"}>
                                Tripathi brings explicit knowledge and expertise
                                to the Cosgrove team. He has worked on notable
                                projects with notable construction firms in
                                Nigeria; including Dantata and Sawoe and Julius
                                Berger Nigeria Ltd executing major civil
                                (infrastructure and building) projects within
                                Nigeria.
                            </p>
                            <p className={"textPrimary"}>
                                Engr Tripathi has over 20 years extensive
                                professional experience in quality control,
                                construction & supervision of highways (both
                                rigid and flexible pavements) and building
                                projects.
                            </p>
                            <p className={"textPrimary"}>
                                He is a member of The Council of the Regulation
                                of Engineering in Nigeria (COREN), The Institute
                                of Engineers and a distinguished Member of
                                Indian Road Congress (IRC).
                            </p>
                            <p className={"textPrimary"}>
                                A Civil Engineering graduate with Masters degree
                                (ME) in Geotechnical Engineering (Soil and
                                foundation engineering) from MBM Engineering
                                Collage Jodhpur India.
                            </p>
                        </div>
                    </Col>
                </Row>

                {/* FIFTH ITEM  */}
                <Row className={styles.teamItem} data-aos="fade-up">
                    <Col sm={12} md={4} lg={3}>
                        <div
                            className={`imageContainerEffect ${styles.teamImg}`}
                            style={{
                                background:
                                    'url("/assets/images/teams/adeoba.png")',
                            }}
                        ></div>
                    </Col>
                    <Col sm={12} md={8} lg={9} className={styles.teamInfo}>
                        <h4 className={"subHeader mb-4"}>Legal Adviser</h4>
                        <h2 className={"headerDark  mb-25"}>
                            Barr. Adeoba Ademoyega
                        </h2>

                        <div>
                            <p className={"textPrimary"}>
                                Adeoba specializes in real estate development
                                from the point of execution of Joint Venture
                                agreements: with Joint Development Partners
                                (where applicable) to overseeing the process of
                                construction, sales of commercial and or housing
                                units and unto the facility management of such
                                estates and overseeing of all legal matters.
                            </p>
                            <p className={"textPrimary"}>
                                As Lead Adviser to one Nigeria’s largest real
                                estate companies in Abuja he currently
                                supervises and is in charge of about ten (10)
                                estates within the Federal Capital Territory
                                comprising of over 1000 housing units. He is
                                also Lead Adviser on the Kano Economic City
                                project in Kano.
                            </p>
                            <p className={"textPrimary"}>
                                He was part of the legal team engaged by the
                                China Civil Engineering Construction Corporation
                                (CCECC) to negotiate with the Federal Government
                                of Nigeria in 2006 for the Railway Modernization
                                Project valued at Eight Billion Three Hundred
                                Million USD dollars ($8,300,000,000) as well as
                                the 2009 Standard Gauge Modernization Railway
                                Contract from Kaduna to Abuja valued at about
                                One Billion Three Hundred Million USD Dollars
                                ($1,300,000,000) commissioned recently by the
                                Nigeria government.
                            </p>
                            <p className={"textPrimary"}>
                                Adeoba is married to Uche and they have two
                                lovely children. He is a graduate of Law from
                                the Ogun State University, Ago-Iwoye and was
                                called to the Nigerian Bar in 1999. Adeoba is a
                                Notary Public of the Federal Republic of
                                Nigeria.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
