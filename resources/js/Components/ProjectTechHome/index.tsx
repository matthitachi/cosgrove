import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import styles from "/resources/js/Components/ProjectTechHome/styles.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import * as React from "react";
// @ts-ignore

export default function () {
    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <section className={styles.contentTop}>
            <Container>
                <Row className={`mb-5`}>
                    <Col md={12} lg={5} data-aos="fade-right">
                        <h4 className={"subHeader"}>Our Homes</h4>
                        <h2 className={"headerDark  mb-4"}>
                            Smart Homes, Smarter Investments
                        </h2>
                    </Col>
                    <Col
                        md={12}
                        lg={7}
                        className={styles.topParagraph}
                        data-aos="fade-left"
                    >
                        <p className={`mb-4`}>
                            Each of our homes is a marvel of modern engineering and an investment in your future.
                            From sleek apartments and townhouses to opulent penthouses and villas, our diverse range of
                            residences caters to every style and need. Imbued with next-gen smart technology, our homes
                            offer unparalleled convenience and security. Experience a home that's as intelligent as it
                            is luxurious, delivering an ROI that's as extraordinary as the life you'll live within its walls.
                        </p>
                    </Col>
                    <Col
                        sm={12}
                        className={styles.secondParagraph}
                        data-aos="fade-up"
                    >
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
