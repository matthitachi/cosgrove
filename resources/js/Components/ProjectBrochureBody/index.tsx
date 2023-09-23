import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
// @ts-ignore

export default function () {
    return (
        <section className={styles.mainBrochure}>
            <Container>
                <h5>Brochures</h5>
                <Row style={{ marginTop: "1rem" }}>
                    <Col className={styles.brochureContainer}>
                        {/* ITEM 1 */}
                        <a href={'/assets/brochures/general-brochure.pdf'} target={'_blank'}>
                        <div>
                            <div
                                className={styles.brochureItem}
                                style={{
                                    background:
                                        'url("/assets/images/bg/cos.png")',
                                }}
                            >
                                <button>
                                    <img
                                        src="/assets/images/bg/Logotype.png"
                                        alt="pdf logo"
                                    />
                                    <span>PDF</span>
                                </button>
                            </div>
                            <h4>General Cosgrove Brochure</h4>
                            <p>PDF</p>
                        </div>
                        </a>

                        {/* ITEM 2 */}
                        <a href={'/assets/brochures/fourteen-by-cosgrove.pdf'}  target={'_blank'}>
                        <div>
                            <div
                                className={styles.brochureItem}
                                style={{
                                    background:
                                        'url("/assets/images/bg/fourteen.png")',
                                }}
                            >
                                <button>
                                    <img
                                        src="/assets/images/bg/Logotype.png"
                                        alt="pdf logo"
                                    />
                                    <span>PDF</span>
                                </button>
                            </div>
                            <h4>Fourteen by Cosgrove</h4>
                            <p>PDF</p>
                        </div>
                        </a>

                        {/* ITEM 3 */}
                        <a href={'/assets/brochures/nouveau-by-cosgrove-ebrochure.pdf'}  target={'_blank'}>
                        <div>
                            <div
                                className={styles.brochureItem}
                                style={{
                                    background:
                                        'url("/assets/images/bg/nouveau.png")',
                                }}
                            >
                                <button>
                                    <img
                                        src="/assets/images/bg/Logotype.png"
                                        alt="pdf logo"
                                    />
                                    <span>PDF</span>
                                </button>
                            </div>
                            <h4>Nouveau by Cosgrove</h4>
                            <p>PDF</p>
                        </div>
                        </a>
                        {/* ITEM 4  */}
                        <a href={'/assets/brochures/the-chateaux-by-cosgrove.pdf'}  target={'_blank'}>
                        <div>
                            <div
                                className={styles.brochureItem}
                                style={{
                                    background:
                                        'url("/assets/images/bg/chateaux.png")',
                                }}
                            >
                                <button>
                                    <img
                                        src="/assets/images/bg/Logotype.png"
                                        alt="pdf logo"
                                    />
                                    <span>PDF</span>
                                </button>
                            </div>
                            <h4>The Chateaux by Cosgrove</h4>
                            <p>PDF</p>
                        </div>
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
