import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import * as React from "react";
import ProjectItem, {ProjectItemProp} from "../../Elements/ProjectItem/index";
import {projects} from "../../../Data/data"
interface exploreProp {
    otherProjects: ProjectItemProp[]
}
export default function ({otherProjects} : exploreProp) {

    return (
        <section className={styles.exploreMoreSection } data-aos="fade-up">
            <Container>
                <h5 className={`subHeader`}>Explore</h5>
                <h2 className={`headerDark mb-5`}>
                    More Projects from Cosgrove
                </h2>

                <div className={styles.projectItemsCtx}>
                    {
                        otherProjects.map((item, index) => (<ProjectItem {...item} key={index}/>))
                    }
                </div>
            </Container>
        </section>
    );
}
