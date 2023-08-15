import {Col, Container, Row} from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
// @ts-ignore
import {ReactComponent as Camera} from "/public/assets/svg/cctv-camera.svg"

export default function () {

    return (
      <section className={styles.topSection}>
          <Container fluid>

              <Row>
                  <Col  sm={12} className={styles.infoHomeInfo}>
                      <h5>About Us</h5>
                      <h2 className={`headerDark ${styles.m65}`}>Cosgrove Smart Estate, Wuye</h2>
                  </Col>


                  <Col  md={12}  lg={7} className={styles.infoHomeInfo}>

                      <p className={`textPrimary`}>
                          Our projects are not just buildings; they're the embodiment of forward-thinking design and
                          cutting-edge technology, seamlessly integrated to create next-generation smart homes. Each
                          home is a testament to our commitment to quality, our passion for innovation, and our
                          dedication to crafting spaces that go beyond the ordinary. Our projects are not just buildings;
                          they're the embodiment of forward-thinking design and cutting-edge technology, seamlessly
                          integrated to create next-generation smart homes. Each home is a testament to our commitment
                          to quality, our passion for innovation, and our dedication to crafting spaces that go beyond
                          the ordinary. Our projects are not just buildings; they're the embodiment of forward-thinking
                          design and cutting-edge technology, seamlessly integrated to create next-generation smart
                          homes. Each home is a testament to our commitment to quality, our passion for innovation,
                          and our dedication to crafting spaces that go beyond the ordinary.

                      </p>

                      <div className={`${styles.contact} `}>
                          <Row>
                              <Col xs={6}>
                                  <img src={'/assets/images/icons/support1.png'}/>
                                  <h5>See for yourself</h5>
                                  <p className={`textPrimary`}>Lorem Ipsum Dolor Sit amet impo rum emetsum </p>
                                  <button className={styles.yellow}>Let’s Talk</button>
                              </Col>
                              <Col xs={6}>
                                  <img src={'/assets/images/icons/brochure.png'}/>
                                  <h5>Project Brochures</h5>
                                  <p>Lorem Ipsum Dolor Sit amet impo rum emetsum </p>
                                  <button className={styles.dark}>Download Brochures</button>
                              </Col>
                          </Row>

                      </div>

                      <div className={styles.records}>

                                  <div className={styles.recordItem}>
                                      <img src={'/assets/images/icons/homes.png'}/>
                                      <div>
                                          <h3>450+</h3>
                                          <div className={styles.title}>Homes Built</div>
                                      </div>
                                  </div>

                              <div className={styles.recordItem}>
                                  <img src={'/assets/images/icons/projects.png'}/>
                                  <div>
                                      <h3>8</h3>
                                      <div className={styles.title}>Projects</div>
                                  </div>
                              </div>

                                  <div className={styles.recordItem}>
                                      <img src={'/assets/images/icons/awards.png'}/>
                                      <div>
                                          <h3>30+</h3>
                                          <div className={styles.title}>Awards</div>
                                      </div>
                                  </div>

                      </div>


                  </Col>
                  <Col md={12} lg={5}  className={styles.infoHomeCol}>
                      <div className={styles.infoHomeBG}>

                      </div>
                  </Col>


              </Row>





          </Container>

          <Container>
              <h5 className={`subHeaderDark`}>Estate Features</h5>
              <Row className={styles.estateFeatures}>
                  <Col sm={4} xs={6} md={2} className={styles.eFeatureItem}>
                      <Camera/>
                      <h5 className={`subHeaderSmall dark mt-3 mb-4`}>Luxurious Homes</h5>
                  </Col>
                  <Col sm={4} xs={6} md={2} className={styles.eFeatureItem}>
                      <Camera/>
                      <h5 className={`subHeaderSmall dark mt-3 mb-4`}>Luxurious Homes</h5>
                  </Col>
                  <Col sm={4} xs={6} md={2} className={styles.eFeatureItem}>
                      <Camera/>
                      <h5 className={`subHeaderSmall dark mt-3 mb-4`}>Luxurious Homes</h5>
                  </Col>
                  <Col sm={4} xs={6} md={2} className={styles.eFeatureItem}>
                      <Camera/>
                      <h5 className={`subHeaderSmall dark mt-3 mb-4`}>Luxurious Homes</h5>
                  </Col>
                  <Col sm={4} xs={6} md={2} className={styles.eFeatureItem}>
                      <Camera/>
                      <h5 className={`subHeaderSmall dark mt-3 mb-4`}>Luxurious Homes</h5>
                  </Col>
                  <Col sm={4} xs={6} md={2} className={styles.eFeatureItem}>
                      <Camera/>
                      <h5 className={`subHeaderSmall dark mt-3 mb-4`}>Luxurious Homes</h5>
                  </Col>
                  <Col sm={4} xs={6} md={2} className={styles.eFeatureItem}>
                      <Camera/>
                      <h5 className={`subHeaderSmall dark mt-3 mb-4`}>Luxurious Homes</h5>
                  </Col>
                  <Col sm={4} xs={6} md={2} className={styles.eFeatureItem}>
                      <Camera/>
                      <h5 className={`subHeaderSmall dark mt-3 mb-4`}>Luxurious Homes</h5>
                  </Col>
              </Row>
          </Container>

      </section>
    );
}


