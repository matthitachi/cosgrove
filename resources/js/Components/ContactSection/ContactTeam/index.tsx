import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
import { getContactPersons, ApiContactPerson } from "../../../Services/cosgroveApiServices";
import { useCmsData } from "../../../Hooks/useCmsData";

const FALLBACK_PERSONS: ApiContactPerson[] = [
    { id: 1, name: "Dr. Chioma Ugwu",                   title: "Director, Business Development",             email: "chioma.ugwu@cosgroveafrica.com",  sort_order: 1, photo_url: "/assets/images/contacts/chioma.jpg" },
    { id: 2, name: "Sakana D. Philip",                  title: "Director, Corporate Communications & Branding", email: "sakana.dikko@cosgroveafrica.com", sort_order: 2, photo_url: "/assets/images/contacts/sakana.jpg" },
    { id: 3, name: "QS Bridget .O. Musa (FNIQS RQS MBA)", title: "Commercial Director",                     email: "bridget.musa@cosgroveafrica.com", sort_order: 3, photo_url: "/assets/images/contacts/lslkf.png" },
    { id: 4, name: "Nafisa Aliyu",                      title: "Head, Digital Marketing",                    email: "nafisa.aliyu@cosgroveafrica.com", sort_order: 4, photo_url: "/assets/images/contacts/nafisa.jpg" },
    { id: 5, name: "Fatima Mbaka",                      title: "Head, Customer Service",                     email: "fatima.mbaka@cosgroveafrica.com", sort_order: 5, photo_url: "/assets/images/contacts/fatima.jpg" },
    { id: 6, name: "Blessing Chinedu-Uzoh",             title: "Head, health and safety environment",        email: "chinedu.uzoh@cosgroveafrica.com", sort_order: 6, photo_url: "/assets/images/contacts/blesssing.jpg" },
    { id: 7, name: "Tosin Afolabi",                     title: "Head of Project Monitoring Office",          email: "afolabi.tosin@cosgroveafrica.com", sort_order: 7, photo_url: "/assets/images/contacts/generic.jpg" },
];

interface Props {
    label?: string;
    heading?: string;
    subheading?: string;
}

export default function ({ label, heading, subheading }: Props) {
    const { data: persons } = useCmsData<ApiContactPerson[]>(getContactPersons);
    const displayPersons = (persons && persons.length > 0) ? persons : FALLBACK_PERSONS;

    return (
        <section className={styles.mainSection}>
            <Container fluid>
                <Row>
                    <Col sm={12} className={styles.infoContactInfo}>
                        <h5>{label ?? "Contact Us"}</h5>
                        <h2 className={`headerDark ${styles.m65}`}>
                            {heading ?? "Speak to an expert from the team."}
                        </h2>
                    </Col>

                    <Col md={12} className={styles.teams}>
                        <p>
                            {subheading ?? "When it comes to finding your ideal home, engaging with Cosgrove's expert advisors is your key to making the perfect choice. Our seasoned professionals understand that a home is more than just a space; it's a reflection of your lifestyle and aspirations. With a deep knowledge of our diverse range of properties and an attentive ear to your preferences, they are dedicated to guiding you towards a residence that resonates with you on every level. Let us navigate the journey together, ensuring that your new home aligns seamlessly with your dreams."}
                        </p>

                        <div className={styles.peopleContainer}>
                            <Row>
                                {displayPersons.map((person) => (
                                    <Col key={person.id} xs={12} sm={6} lg={4}>
                                        <li className={styles.personContainer}>
                                            <div style={{ marginRight: "1rem" }}>
                                                <img
                                                    src={person.photo_url ?? "/assets/images/contacts/generic.jpg"}
                                                    alt={`Cosgrove Real Estate - ${person.name}`}
                                                />
                                            </div>
                                            <div style={{ paddingTop: "1rem" }}>
                                                <h4>{person.name}</h4>
                                                <h5>{person.title}</h5>
                                                {person.email && <p>{person.email}</p>}
                                            </div>
                                        </li>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
