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


interface ServiceItemProp {
    img: string;
    title: string;
    desc: string;
}
const ServiceItem = (props :ServiceItemProp) => {
    return (
        <li className={styles.serviceItem}>
            <img src={props.img} />
            <div>
                <h4 className={`headerDark`}>{props.title}</h4>
                <p className={`textDark`}>
                    {props.desc}
                </p>
            </div>
        </li>
    );
};
interface ServiceList {
    serviceItems: ServiceItemProp[]
}

export default function ({serviceItems}:ServiceList) {
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
                            className={`textPrimary  mb-85`}>
                            Step into a world where your needs shape our services. Offering bespoke consultations, innovative design & automation, meticulous construction, and strategic project management, we make your journey seamless. Plus, unlock smart investment avenues for unparalleled ROI. With Cosgrove, it's more than a home—it's a lifetime investment.
                        </p>
                        <ul className={styles.serviceList}>
                            {
                                serviceItems.map((item, index) => <ServiceItem {...item}/>)
                            }
                        </ul>
                    </Col>
                    <Col
                        data-aos="fade-left"
                        md={6}
                        className={`imageContainerEffect`}
                        style={{
                            background:
                                'url("/assets/images/services/H8904.jpg")',
                        }}
                    ></Col>
                </Row>
            </Container>
        </section>
    );
}

