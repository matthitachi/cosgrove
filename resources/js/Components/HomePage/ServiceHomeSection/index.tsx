import {
    Button,
    Col,
    Container,
    Nav,
    Navbar,
    NavDropdown,
    Row,
} from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function () {
    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <section className={styles.offerHomeSection}>
            <Container>
                <h4 data-aos="fade-right" className={`subHeader mb-25`}>
                    Our Services
                </h4>
                <h2 data-aos="fade-right" className={`headerDark  mb-65`}>
                    What we offer our clients
                </h2>
                <Row>
                    <Col data-aos="fade-right" md={6} className={`pe-3 pe-md-5`}>
                        <p
                            data-aos="fade-right"
                            className={`textPrimary  mb-85`}
                        >
                            Lorem ipsum dolor sit amet consectetur. Pulvinar
                            varius justo interdum erat aliquet nam. Libero vitae
                            turpis sapien purus sit eget. Vitae faucibus ipsum
                            quis pellentesque tincidunt varius diam lectus
                            commodo. Faucibus non proin nam tortor ut imperdiet
                            dui in libero.
                        </p>
                        <ul className={styles.serviceList}>
                            <ServiceItem />
                            <ServiceItem />
                            <ServiceItem />
                            <ServiceItem />
                        </ul>
                    </Col>
                    <Col
                        data-aos="fade-left"
                        md={6}
                        className={`imageContainerEffect`}
                        style={{
                            background:
                                'url("/assets/images/services/_IGH89041.png")',
                        }}
                    ></Col>
                </Row>
            </Container>
        </section>
    );
}

const ServiceItem = () => {
    return (
        <li className={styles.serviceItem}>
            <img src={"/assets/images/services/discussion.png"} />
            <div>
                <h4 className={`headerDark`}>Consultation</h4>
                <p className={`textDark`}>
                    Our design service creates smart, sustainable homes tailored
                    to your needs. We anticipate the future, integrating modern
                    lifestyle features with tomorrow's technology.
                </p>
            </div>
        </li>
    );
};
