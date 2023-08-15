import {Accordion, Button, Col, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
import FeaturesItem from "../../Elements/FeaturesItem"
// @ts-ignore
import {ReactComponent as Camera} from "/public/assets/svg/cctv-camera.svg"

import Slider from "../../Elements/Slider";
export default function () {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    return (
      <section className={styles.SmartFeaturesHomeSection}>
          <div className={`curvedTop ${styles.topCurve}`}/>
          <Container className={styles.featuredCtx}>
              <h4 className={`subHeader mb-65 text-center`}>Smart Features</h4>

              <div className={styles.smartFeaturesCtx}>
              <Slider settings={settings} childrenItems={
                  [
                      <FeaturesItem/>,
                      <FeaturesItem/>,
                      <FeaturesItem/>,
                      <FeaturesItem/>,
                      <FeaturesItem/>,
                      <FeaturesItem/>,
                      <FeaturesItem/>
                      ]
              }
              />
              </div>
              <div className={styles.featuresQuote}>

                  <h4 className={`headerWhite`}>“We will never stop delivering the highest quality real-estate.”</h4>
                  <h2>-The Cosgrove Team.</h2>

              </div>
          </Container>


      </section>
    );


}
