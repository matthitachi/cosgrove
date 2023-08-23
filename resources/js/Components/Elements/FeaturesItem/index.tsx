// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
// @ts-ignore
import { ReactComponent as Camera } from "/public/assets/svg/cctv-camera.svg";
import {ReactNode} from "react";

export interface featuresItemProp {
    svgColor?: string;
    color?: string;
    allBorderRadius?: boolean;
    icon? : ReactNode;
    title? : string;
    description? : string
}
export default function ({
    color = "#fff",
    svgColor = "rgba(102,102,102,1)",
    allBorderRadius,
    icon, title, description
}: featuresItemProp) {
    const featuresItemStyle = {};
    if (allBorderRadius) {
        featuresItemStyle["borderRadius"] = "10px";
    }

    return (
        <div className={styles.featuresItem} style={featuresItemStyle}>
            {!icon && <Camera stroke={svgColor} />}
            {icon && icon}
            <h4 className={`headerWhite`} style={{ color: color }}>
                {`${(title)? title :`Top-tier Security`}`}
            </h4>
            <p className={'textDark'}>
                {`${(description)? description :`Mahiga Imporum Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor.`}`}
            </p>
        </div>
    );
}
