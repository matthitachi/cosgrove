// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
// @ts-ignore
import { ReactComponent as Camera } from "/public/assets/svg/cctv-camera.svg";

interface featuresItemPopr {
    svgColor?: string;
    color?: string;
    allBorderRadius?: boolean;
}
export default function ({
    color = "#fff",
    svgColor = "rgba(102,102,102,1)",
    allBorderRadius,
}: featuresItemPopr) {
    const featuresItemStyle = {};
    if (allBorderRadius) {
        featuresItemStyle["borderRadius"] = "10px";
    }

    return (
        <div className={styles.featuresItem} style={featuresItemStyle}>
            <Camera stroke={svgColor} />
            <h4 className={`headerWhite`} style={{ color: color }}>
                Top-tier Security
            </h4>
            <p>Mahiga Imporum Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor.</p>
        </div>
    );
}
