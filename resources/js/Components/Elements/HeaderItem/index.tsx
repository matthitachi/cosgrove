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
    isDark?: false;
    position?: string;
}
export default function ({ height, bgImage, position= 'unset' }: headerItemProp) {
    const getResponsiveCurveValue = (width) => {
        if (width < 575) return 50;
        else if (width < 767) return 70;
        else if (width < 1200) return 100;
        else return 150;
    };
    const curveValue = getResponsiveCurveValue(window.innerWidth);
    const [responsiveCurveValue, setResponsiveCurveValue] = useState(curveValue);
    const [ratio, setRatio] = useState(1);
    const listenScrollEvent = () => {
        const screenHeight = window.innerHeight;
        const screenRatio = 100 / height;
        const bgHeight = screenHeight / screenRatio;
        const ratio = (1 - window.scrollY / bgHeight);
        if (window.scrollY <= bgHeight) {
            setResponsiveCurveValue(
                curveValue * (1 - window.scrollY / bgHeight)
            );
            setRatio(ratio);
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
                    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, ${1 - ratio}) 0%, rgba(0, 0, 0, ${1 - ratio}) 100% ),url("  ${bgImage} ")`,
                    borderRadius: `0 0 50% 50%/${responsiveCurveValue}px`,
                    backgroundPosition: 'center'
                }}
            />
        </section>
    );
}
