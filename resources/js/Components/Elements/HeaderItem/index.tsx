import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
// @ts-ignore
import homeSvg from "/public/assets/svg/home.svg";
// @ts-ignore
import searchSvg from "/public/assets/svg/search.svg";
import { useEffect, useState } from "react";

interface headerItemProp {
    height: number;
    bgImage: string;
}
export default function ({ height, bgImage }: headerItemProp) {
    const getResponsiveCurveValue = (width) => {
        if (width < 575) return 50;
        else if (width < 767) return 70;
        else if (width < 1200) return 100;
        else return 150;
    };
    const curveValue = getResponsiveCurveValue(window.innerWidth);
    const [responsiveCurveValue, setResponsiveCurveValue] =
        useState(curveValue);
    const listenScrollEvent = () => {
        const screenHeight = window.innerHeight;
        const screenRatio = 100 / height;
        const bgHeight = screenHeight / screenRatio;
        if (window.scrollY <= bgHeight) {
            setResponsiveCurveValue(
                curveValue * (1 - window.scrollY / bgHeight)
            );
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
    }, []);
    return (
        <section
            className={styles.headerItem}
            style={{ height: `${height}vh` }}
        >
            <div
                className={`curvedBottom ${styles.headerBgItem}`}
                style={{
                    background: 'url("' + bgImage + '")',
                    borderRadius: `0 0 50% 50%/${responsiveCurveValue}px`,
                }}
            ></div>
        </section>
    );
}
