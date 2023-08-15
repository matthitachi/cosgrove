import {Col, Container, Row} from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
// @ts-ignore
import  { ReactComponent as ArrowRight2Svg} from "/public/assets/svg/arrow-right-2.svg";
// @ts-ignore
import arrowRightSvg from "/public/assets/svg/arrow-right.svg";
// @ts-ignore
import { ReactComponent as MapPinSvg} from "/public/assets/svg/map-pin.svg";
import FeaturesItem from "../../FeaturesItem";
import Slider from "../../Slider";

export default function () {
    const settings = {
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
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
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
      <section className={styles.projectHomeSection}>
          <Container>
              <h4>Projects</h4>
              <Row className={styles.projectIntro}>
                  <Col md={6} className={styles.projectIntroHeader}>
                      <h2>
                          Smart
                      </h2>
                      <h2>
                          Communities
                      </h2>
                  </Col>
                  <Col md={6}>
                      <p>
                          Our projects are not just buildings; they're the embodiment of forward-thinking design and
                          cutting-edge technology, seamlessly integrated to create next-generation smart homes.
                          Each home is a testament to our commitment to quality, our passion for innovation, and our
                          dedication to crafting spaces that go beyond the ordinary.
                      </p>
                      {/*<button className={'text'}>*/}
                      {/*    Learn More <img  className={styles.arrowRightSvg} src={arrowRightSvg} alt="Your SVG" />*/}
                      {/*</button>*/}
                  </Col>
              </Row>

              <h3 className={'subHeaderDark mt-5'}>Smart Estate Features</h3>

              <div className={styles.featuresCtx}>
              <Slider settings={settings} childrenItems={
                  [
                      <FeaturesItem svgColor={'rgba(0,0,0,0.4)'} color={'#000'} allBorderRadius={true}/>,
                      <FeaturesItem svgColor={'rgba(0,0,0,0.4)'} color={'#000'}/>,
                      <FeaturesItem svgColor={'rgba(0,0,0,0.4)'} color={'#000'}/>,
                      <FeaturesItem svgColor={'rgba(0,0,0,0.4)'} color={'#000'}/>,
                      <FeaturesItem svgColor={'rgba(0,0,0,0.4)'} color={'#000'}/>,
                      <FeaturesItem svgColor={'rgba(0,0,0,0.4)'} color={'#000'}/>,
                      <FeaturesItem svgColor={'rgba(0,0,0,0.4)'} color={'#000'}/>,
                      <FeaturesItem svgColor={'rgba(0,0,0,0.4)'} color={'#000'}/>,
                  ]
              }
              />
              </div>

              <p className={'textPrimary mb-5'}>
                  Our projects are not just buildings; they're the embodiment of forward-thinking design and
                  cutting-edge technology, seamlessly integrated to create next-generation smart homes. Each home
                  is a testament to our commitment to quality, our passion for innovation, and our dedication to
                  crafting spaces that go beyond the ordinary. Our projects are not just buildings; they're the
                  embodiment of forward-thinking design and cutting-edge technology, seamlessly integrated to create
                  next-generation smart homes. Each home is a testament to our commitment to quality, our passion for
                  innovation, and our dedication to crafting spaces that go beyond the ordinary. Our projects are not
                  just buildings; they're the embodiment of forward-thinking design and cutting-edge technology,
                  seamlessly integrated to create next-generation smart homes. Each home is a testament to our
                  commitment to quality, our passion for innovation, and our dedication to crafting spaces that go
                  beyond the ordinary.
              </p>

              <h3 className={'subHeaderDark mt-5 '}>Projects</h3>
              <ProjectItem/>

              <div className={`text-center ${styles.seeAll}`}>
                  <button className={'text'}>
                      See all projects <img  className={styles.arrowRightSvg} src={arrowRightSvg} alt="Your SVG" />
                  </button>
              </div>
          </Container>



      </section>
    );
}

const ProjectItem = ()=>{
    return (<div className={styles.projectItem}
                 style={{background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%), url("/assets/images/projects/wuye.png")'}}>
        <div className={styles.projectsInner}>
            <h2>Cosgrove Smart Estate, Guzape</h2>
            <div className={styles.location}>
                {/*<img  className={styles.mapPinSvg} src={mapPinSvg} alt="Your SVG" />*/}
                <MapPinSvg/>
                <b>Mabushi</b>
            </div>

            <p>
                Lorem ipsum dolor sit amet consetur. Turpis mollis viverra sollicitud esque dictumst et orci.
                Lorem ipsum dolor sit amet consetur. Turpis mollis viverra sollicitud esque dictumst et orci.
                Lorem ipsum dolor sit amet consetur. Turpis mollis viverra sollicitud esque dictumst et orci.
            </p>
            <a href={''}>View Project <ArrowRight2Svg/></a>

        </div>

    </div>)
};
