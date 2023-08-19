import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import styles from "/resources/js/Components/ProjectTechHome/styles.module.scss";
import * as React from "react";
// @ts-ignore

export default function () {
    return (
        <section className={styles.contentTop}>
            <Container>
                <Row className={`mb-5`}>
                    <Col md={12} lg={5}>
                        <h4 className={"subHeader"}>Our Homes</h4>
                        <h2 className={"headerDark  mb-4"}>
                            Tech-Embedded Buildings
                        </h2>
                    </Col>
                    <Col md={12} lg={7} className={styles.topParagraph}>
                        <p className={`mb-4`}>
                            Our projects are not just buildings; they're the
                            embodiment of forward-thinking design and
                            cutting-edge technology, seamlessly integrated to
                            create next-generation smart homes. Each home is a
                            testament to our commitment to quality, our passion
                            for innovation, and our dedication to crafting
                            spaces that go beyond the ordinary.
                        </p>
                    </Col>
                    <Col sm={12} className={styles.secondParagraph}>
                        <p className={`mb-4`}>
                            Our projects are not just buildings; they're the
                            embodiment of forward-thinking design and
                            cutting-edge technology, seamlessly integrated to
                            create next-generation smart homes. Each home is a
                            testament to our commitment to quality, our passion
                            for innovation, and our dedication to crafting
                            spaces that go beyond the ordinary. Our projects are
                            not just buildings; they're the embodiment of
                            forward-thinking design and cutting-edge technology,
                            seamlessly integrated to create next-generation
                            smart homes. Each home is a testament to our
                            commitment to quality, our passion for innovation,
                            and our dedication to crafting spaces that go beyond
                            the ordinary. Our projects are not just buildings;
                            they're the embodiment of forward-thinking design
                            and cutting-edge technology, seamlessly integrated
                            to create next-generation smart homes. Each home is
                            a testament to our commitment to quality, our
                            passion for innovation, and our dedication to
                            crafting spaces that go beyond the ordinary.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
