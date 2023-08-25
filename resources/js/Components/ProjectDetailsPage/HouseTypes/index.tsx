import {Col, Container, Row} from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
import {houseTypeItemProps} from "../../../Data/data"
// @ts-ignore
import {ReactComponent as Camera} from "/public/assets/svg/cctv-camera.svg";
import HouseItem from "../../Elements/HouseItem"
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
                        houseTypes.map((item, index) =>
                            (
                                <HouseItem {...item} key={index}/>
                            )
                        )
                    }
                </Row>
            </Container>
        </section>
    );
}
