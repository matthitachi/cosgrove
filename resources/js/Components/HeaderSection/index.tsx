import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
// @ts-ignore
import homeSvg from "/public/assets/svg/home.svg";
// @ts-ignore
import searchSvg from "/public/assets/svg/search.svg";

export default function () {
    return (
      <section className={styles.homeSection}>
          <div className={styles.videoContainer}>
              <video poster="/assets/videos/bg/hero-video.mp4" playsInline autoPlay muted loop>
                  <source src="/assets/videos/bg/hero-video.mp4" type="video/mp4"/>
              </video>
          </div>
          <div className={styles.overlay}/>
          <div className={styles.headerInfo}>
              <h3>
                  Welcome to a New <br/>
                  Era of <b>Smart Living</b>.
              </h3>

              <p> Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
                  <br/>
                  Mahiga Imporum  Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet</p>

              <div className={styles.inputContainer}>
                  <input placeholder={'Explore Cosgrove homes'}/>
                  <img  className={styles.homeSvg} src={homeSvg} alt="Your SVG" />
                  <img className={styles.searchSvg} src={searchSvg} alt="Your SVG" />
              </div>
          </div>


      </section>
    );
}
