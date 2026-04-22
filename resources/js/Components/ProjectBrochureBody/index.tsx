import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
import { getProjects, getProjectBySlug, ApiProjectDetail } from "../../Services/cosgroveApiServices";
import { useState, useEffect } from "react";

export default function () {
    const [projects, setProjects] = useState<ApiProjectDetail[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProjects()
            .then(list => Promise.all(list.map(p => getProjectBySlug(p.slug))))
            .then(details => {
                setProjects(details.filter(p => p.brochures?.length > 0));
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <section className={styles.mainBrochure}>
                <Container>
                    <h5>Brochures</h5>
                    <p style={{ marginTop: '2rem', color: '#888' }}>Loading brochures…</p>
                </Container>
            </section>
        );
    }

    if (projects.length === 0) {
        return (
            <section className={styles.mainBrochure}>
                <Container>
                    <h5>Brochures</h5>
                    <p style={{ marginTop: '2rem', color: '#888' }}>No brochures available at this time.</p>
                </Container>
            </section>
        );
    }

    return (
        <section className={styles.mainBrochure}>
            <Container>
                <h5>Brochures</h5>
                {projects.map(project => (
                    <div key={project.id}>
                        <h4 style={{ marginTop: '2rem', marginBottom: '1rem' }}>{project.name}</h4>
                        <Row style={{ marginTop: '1rem' }}>
                            <Col className={styles.brochureContainer}>
                                {project.brochures.map(brochure => (
                                    <a href={brochure.brochure_url} target={'_blank'} key={brochure.id} rel="noreferrer">
                                        <div>
                                            <div
                                                className={styles.brochureItem}
                                                style={{
                                                    background: brochure.cover_url
                                                        ? `url("${brochure.cover_url}")`
                                                        : 'url("/assets/images/bg/cos.png")',
                                                }}
                                            >
                                                <button>
                                                    <img
                                                        src="/assets/images/bg/Logotype.png"
                                                        alt="Cosgrove Real Estate - Brochures"
                                                    />
                                                    <span>PDF</span>
                                                </button>
                                            </div>
                                            <h4>{brochure.title}</h4>
                                            <p>PDF</p>
                                        </div>
                                    </a>
                                ))}
                            </Col>
                        </Row>
                    </div>
                ))}
            </Container>
        </section>
    );
}
