import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
// @ts-ignore
import homeSvg from "/public/assets/svg/home.svg";
// @ts-ignore
import searchSvg from "/public/assets/svg/search.svg";
import {useState} from "react";
import {useEffect} from "react";

export default function () {
    const getResponsiveCurveValue = (width) => {
        if (width < 575) return 50;
        else if (width < 767) return 70;
        else if (width < 1200) return 100;
        else return 150;
    };
    const getResponsiveHeight = (height) => {
        // if (height < 575) return 50;
        // else if (height < 767) return 70;
        if (height < 1200) return 90;
        else return 85;
    };
    const curveValue = getResponsiveCurveValue(window.innerWidth);
    const [responsiveCurveValue, setResponsiveCurveValue] =
        useState(curveValue);
    const [ratio, setRatio] =
        useState(1);
    const listenScrollEvent = () => {
        const screenHeight = window.innerHeight;
        const screenRatio = 100 / getResponsiveHeight(screenHeight);
        const bgHeight = screenHeight / screenRatio;
        const ratio =  (1 - window.scrollY / bgHeight);
        if (window.scrollY <= bgHeight) {
            setResponsiveCurveValue(
                curveValue * ratio
            );
            setRatio(ratio);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
    }, []);
    return (
        <section className={styles.homeSection} >
            <div className={styles.videoContainer} style={{
                borderRadius: `0 0 50% 50%/${responsiveCurveValue}px`,
            }}>
                <video style={{
                    opacity: ratio
                }}
                    poster="/assets/videos/bg/hero-video.mp4"
                    playsInline
                    autoPlay
                    muted
                    loop

                >
                    <source
                        src="/assets/videos/bg/hero-video.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>
            <div className={styles.overlay} />
            <div className={styles.headerInfo}>
                <h3>
                    Welcome to a New <br />
                    Era of <b>Smart Living</b>.
                </h3>

                <p className={'textWhite'}>
                    {" "}
                    Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
                    <br />
                    Mahiga Imporum Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor
                    Sit Amet
                </p>

                <form action={'/search'} method={'get'}>
                <div className={styles.inputContainer}>
                    <input placeholder={"Explore Cosgrove homes"}  onKeyDown={(evt) =>{
                        if (evt.key === 'Enter') {
                            evt.preventDefault();
                            window.location.href = '/search'
                        }
                    }}/>
                    <img
                        className={styles.homeSvg}
                        src={homeSvg}
                        alt="Your SVG"
                    />
                    <img
                        className={styles.searchSvg}
                        src={searchSvg}
                        alt="Your SVG"

                    />
                </div>
                </form>
            </div>
        </section>
    );
}
