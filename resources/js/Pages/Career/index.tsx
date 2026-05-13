import * as React from "react";
import NavBar from "../../Components/Elements/Navbar/navbar";
import HeaderItem from "../../Components/Elements/HeaderItem/index";
import Footer from "../../Components/Elements/Footer";
import { Col, Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getJobListings, ApiJobListing } from "../../Services/cosgroveApiServices";
import { useCmsData } from "../../Hooks/useCmsData";
// @ts-ignore
import styles from "./styles.module.scss";

function getPlainText(description: any): string {
    if (!description) return '';
    if (typeof description === 'string') {
        return description.replace(/<[^>]*>/g, '').trim();
    }
    function extractText(node: any): string {
        if (!node) return '';
        if (node.type === 'text') return node.text ?? '';
        if (node.content) return node.content.map(extractText).join(' ');
        return '';
    }
    if (description.type === 'doc' || description.content) {
        return extractText(description).trim();
    }
    return String(description);
}

function truncate(text: string, length: number = 120): string {
    if (text.length <= length) return text;
    return text.slice(0, length).trimEnd() + '...';
}

function JobCard({ job }: { job: ApiJobListing }) {
    const plainDesc = truncate(getPlainText(job.description));

    return (
        <Col sm={12} md={6} lg={4} className="mb-4">
            <div style={{
                border: '1px solid rgba(0,0,0,0.1)',
                borderRadius: '8px',
                padding: '1.5rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}>
                <div>
                    <h5 className="subHeaderDark">{job.title}</h5>
                    {job.department && (
                        <p className="textPrimary" style={{ marginBottom: '0.25rem' }}>
                            <strong>{job.department}</strong>
                        </p>
                    )}
                    {job.location && (
                        <p className="textPrimary" style={{ marginBottom: '0.75rem', color: '#888' }}>
                            {job.location}
                        </p>
                    )}
                    {plainDesc && (
                        <p className="textPrimary" style={{ marginBottom: '1rem' }}>
                            {plainDesc}
                        </p>
                    )}
                </div>
                <a
                    href={`/careers/${job.id}`}
                    style={{
                        display: 'inline-block',
                        marginTop: '0.75rem',
                        padding: '0.5rem 1.25rem',
                        background: '#FBBD00',
                        color: '#121212',
                        borderRadius: '4px',
                        fontWeight: 600,
                        textDecoration: 'none',
                        alignSelf: 'flex-start',
                    }}
                >
                    View Details
                </a>
            </div>
        </Col>
    );
}

export default function () {
    const { data: jobs } = useCmsData(getJobListings);
    const activeJobs = (jobs ?? []).filter(j => (j as any).is_active !== false);

    return (
        <div>
            <NavBar isDark={true} />
            <HeaderItem height={50} bgImage={'/assets/images/bg/bgContact.png'} />

            {activeJobs.length > 0 && (
                <section style={{ padding: '4rem 0 2rem' }}>
                    <Container>
                        <h5 className="subHeader">Open Positions</h5>
                        <h2 className="headerDark mb-4">Current Opportunities</h2>
                        <Row>
                            {activeJobs.map(job => <JobCard key={job.id} job={job} />)}
                        </Row>
                    </Container>
                </section>
            )}

            <section className={styles.topSection}>
                <Container fluid>
                    <Row>
                        <Col sm={12} className={styles.infoHomeInfo}>
                            <h5>Career</h5>
                            <h2 className={`headerDark ${styles.m65}`}>
                                Work With Us
                            </h2>
                        </Col>

                        <Col md={12} lg={7} className={styles.infoHomeInfo}>
                            <p className={`textPrimary`}>
                                Start your career where you will get every opportunity to grow and improve your skills. Fill the form below and we would get back to you..
                            </p>

                            <form className={styles.contactInTouch}>
                                <input placeholder={"Name"}  className={styles.formItem} />
                                <input placeholder={"Email"} className={styles.formItem} />
                                <input placeholder={"Phone"} className={styles.formItem} />
                                <input placeholder={"Position"} className={styles.formItem} />
                                <input type={"file"} placeholder={"Upload CV Document"} className={styles.formItem} />
                                <textarea placeholder={"Message"} className={styles.formItem} />
                                <button>Submit</button>
                            </form>
                        </Col>
                        <Col md={12} lg={5} className={styles.infoHomeCol}>
                            <div className={styles.infoHomeBG} />
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </div>
    );
}
