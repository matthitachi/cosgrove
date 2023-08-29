import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
import ProjectItem  from "../../Elements/ProjectItem/index";
// @ts-ignore
import { ReactComponent as ArrowRight2Svg } from "/public/assets/svg/arrow-right-2.svg";
// @ts-ignore
import arrowRightSvg from "/public/assets/svg/arrow-right.svg";
// @ts-ignore
import { ReactComponent as MapPinSvg } from "/public/assets/svg/map-pin.svg";
import {projects} from "../../../Data/data"
export default function () {

    const projectToDisplay = projects.filter((item) => item.showInHome == true);
    return (
        <section className={styles.projectHomeSection}>
            <Container>
                <h4 className={'subHeader'} data-aos="fade-right">Projects</h4>
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
                            Our projects are not just buildings; they're the embodiment of forward-thinking design and
                            cutting-edge technology, seamlessly integrated to create next-generation smart homes.
                            Each home is a testament to our commitment to quality, our passion for innovation, and
                            our dedication to crafting spaces that go beyond the ordinary.

                        </p>
                        <button className={"text"}>
                            Learn More{" "}
                            <img
                                className={styles.arrowRightSvg}
                                src={arrowRightSvg}
                                alt="Your SVG"
                            />
                        </button>
                    </Col>
                </Row>
                {
                    projectToDisplay.map((item, index) => (<ProjectItem {...item} key={index}/>))
                }


                <div className={`text-center ${styles.seeAll}`}>
                    <button className={"text"} onClick={()=>{
                        window.location.href = '/projects';
                    }}>
                        See all projects{" "}
                        <img
                            className={styles.arrowRightSvg}
                            src={arrowRightSvg}
                            alt="Your SVG"
                        />
                    </button>
                </div>
            </Container>
        </section>
    );
}

