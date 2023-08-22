import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
import Lottie from "lottie-react";
// @ts-ignore
import WelcomeHomeAnimation from "/public/assets/lottie//welcome-home.json";

export default function () {
    return (
        <section className={styles.welcomeSection}>
            <Lottie animationData={WelcomeHomeAnimation} loop autoplay />
        </section>
    );
}
