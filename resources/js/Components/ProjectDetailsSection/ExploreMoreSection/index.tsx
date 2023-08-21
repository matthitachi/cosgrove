import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import * as React from "react";
import ProjectItem from "../../ProjectItem/index";

export default function () {
    return (
        <section className={styles.exploreMoreSection} data-aos="fade-up">
            <Container>
                <h5 className={`subHeader`}>Explore</h5>
                <h2 className={`headerDark mb-5`}>
                    More Projects from Cosgrove
                </h2>

                <div className={styles.projectItemsCtx}>
                    <ProjectItem />
                </div>
            </Container>
        </section>
    );
}
