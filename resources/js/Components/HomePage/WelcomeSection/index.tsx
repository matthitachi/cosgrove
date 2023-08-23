import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
import Lottie, {InteractivityProps} from "lottie-react";
// @ts-ignore
import WelcomeHomeAnimation from "/public/assets/lottie//welcome-home.json";
import VisibilitySensor from "react-visibility-sensor";
import {useRef} from "react";

export default function () {
    const interactivity = {
        mode: "scroll",
        actions: [
            {
                visibility: [0, 0.15],
                type: "play",
                frames: [0, 100],
            }
        ]
    };

    // @ts-ignore
    return (

        <section className={styles.welcomeSection}>
            <Lottie interactivity={interactivity} animationData={WelcomeHomeAnimation} loop={false}/>
        </section>
    );
}
