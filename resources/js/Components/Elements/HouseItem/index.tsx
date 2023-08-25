// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
// @ts-ignore
import { ReactComponent as Camera } from "/public/assets/svg/cctv-camera.svg";
import {ReactNode} from "react";
import {Col} from "react-bootstrap";
import {houseTypeItemProps} from "../../../Data/data";


export default function (prop: houseTypeItemProps) {
    return (
        <Col
            xs={6}
            md={4}
            lg={3}
            xl={2}
            className={styles.houseTypesItem}
            data-aos="fade-up"
        >
            <a href={`/houses/${prop.slug}`}>
                <div className={styles.imgCtx}
                     style={{background: `url("${prop.img}")`}}/>
                <h5 className={'subHeaderDark'}>{prop.name}</h5>
                <div className={styles.description}>
                    {prop.desc}
                </div>
            </a>
        </Col>
    );
}
