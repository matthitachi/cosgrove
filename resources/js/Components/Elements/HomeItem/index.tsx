import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
// @ts-ignore
import { ReactComponent as ArrowRightSvg } from "/public/assets/svg/arrow-right.svg";
// @ts-ignore
import searchSvg from "/public/assets/svg/search.svg";
import { useEffect, useState } from "react";


export interface HomesItemProp {
    img: string;
    name: string;
    desc: string;
    others?: string;
    link: string;
}

export default function({img, name, desc, others,link}: HomesItemProp) {
    const [isHover, setIsHover] = useState(false);
    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };
    const style = {
        background: `
        ${
            isHover
                ? "linear-gradient(0deg, rgba(251, 189, 0, 0.80) 0%, rgba(251, 189, 0, 0.80) 100%)"
                : "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.5) 100%)"
        },
             url(${img})`,
    };
    return (
        <div
            className={styles.homesCarouselItem}
            style={style}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={styles.info}>
                <h3 className={`${isHover ? "headerDark" : "headerWhite"}`}>
                    {name}
                </h3>
                <div
                    className={`${isHover ? "textDark" : "textWhite"} ${
                        styles.description
                    }`}
                >
                    {desc}
                    <br/>
                    {others}
                </div>
                <a
                    href={link}
                    className={`${isHover ? "textDark" : "textWhite"}`}
                >
                    View Project <ArrowRightSvg/>
                </a>
            </div>
        </div>
    );
};
