// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
// @ts-ignore
import { ReactComponent as Camera } from "/public/assets/svg/cctv-camera.svg";
import {ReactNode} from "react";
import {brochuresItemProp} from "../../../Data/data";
import {Col} from "react-bootstrap";


export default function ({
name, image, link, fileType, fileTypeIcon
}: brochuresItemProp) {


    return (
        <a href={link}>
            <div>
                <div
                    className={styles.brochureItem}
                    style={{
                        background:
                            `url("${image}")`,
                    }}
                >
                    <button>
                        <img
                            src={fileTypeIcon}
                            alt={` Cosgrove Africa - ${fileType} logo`}
                        />
                        <span>{fileType}</span>
                    </button>
                </div>
                <h4>{name}</h4>
                <p>{fileType}</p>
            </div>
        </a>
    );
}
