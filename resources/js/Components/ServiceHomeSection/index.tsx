import {Button, Col, Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";

export default function () {
    return (
      <section className={styles.offerHomeSection}>
          <Container>
              <h4 className={`subHeader mb-25`}>Our Services</h4>
              <h2 className={`headerDark  mb-65`}>What we offer our clients</h2>
              <Row>
                  <Col md={6} className={`pe-5`}>
                      <p className={`textPrimary  mb-85`}>
                          Lorem ipsum dolor sit amet consectetur. Pulvinar varius justo interdum erat aliquet nam.
                          Libero vitae turpis sapien purus sit eget. Vitae faucibus ipsum quis pellentesque tincidunt
                          varius diam lectus commodo. Faucibus non proin nam tortor ut imperdiet dui in libero.
                      </p>
                      <ul className={styles.serviceList}>
                          <ServiceItem/>
                          <ServiceItem/>
                          <ServiceItem/>
                          <ServiceItem/>
                      </ul>
                  </Col>
                  <Col md={6} className={`imageContainerEffect`} style={{background: 'url("/assets/images/services/_IGH89041.png")'}}>

                  </Col>
              </Row>
          </Container>

      </section>
    );
}

const ServiceItem = ()=>{
    return (<li className={styles.serviceItem}>
        <img src={'/assets/images/services/discussion.png'} />
        <div>
            <h4 className={`headerDark`}>Consultation</h4>
            <p className={`textDark`}>
                Our design service creates smart, sustainable homes tailored to your needs.
                We anticipate the future, integrating modern lifestyle features with tomorrow's
                technology.</p>
        </div>
    </li>);
};
