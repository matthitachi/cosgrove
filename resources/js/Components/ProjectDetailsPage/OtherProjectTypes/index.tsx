import {Col, Container, Row} from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
import OtherProjectItem from "../../Elements/OtherProjectItem"
import {houseTypes} from "../../../Data/data"
import {ProjectItemProp} from "../../Elements/ProjectItem";
interface HouseTypesProps {
    headerContent: string;
    projects: ProjectItemProp[]
}

export default function ({headerContent, projects}: HouseTypesProps) {
    return (
        <section className={styles.houseTypes}>
            <Container>
                <h5 className={`subHeaderDark`}>{headerContent}</h5>

                <Row data-aos="fade-up">

                    {
                        projects.map((item, index) =>
                            (
                                <OtherProjectItem {...item} key={index}/>
                            )
                        )
                    }
                </Row>
            </Container>
        </section>
    );
}
