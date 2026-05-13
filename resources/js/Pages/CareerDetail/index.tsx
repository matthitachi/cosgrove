import * as React from 'react';
import NavBar from '../../Components/Elements/Navbar/navbar';
import HeaderItem from '../../Components/Elements/HeaderItem/index';
import Footer from '../../Components/Elements/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import { useCmsData } from '../../Hooks/useCmsData';
import axios from 'axios';

function tiptapToHtml(doc: any): string {
    if (!doc) return '';
    if (typeof doc === 'string') return doc;
    if (typeof doc !== 'object') return String(doc);

    function renderNode(node: any): string {
        if (!node) return '';
        const marks = node.marks ?? [];
        const wrapMarks = (content: string): string => {
            let r = content;
            for (const mark of marks) {
                switch (mark.type) {
                    case 'bold':      r = `<strong>${r}</strong>`; break;
                    case 'italic':    r = `<em>${r}</em>`; break;
                    case 'underline': r = `<u>${r}</u>`; break;
                    case 'link':      r = `<a href="${mark.attrs?.href}">${r}</a>`; break;
                }
            }
            return r;
        };
        const children = (node.content ?? []).map(renderNode).join('');
        switch (node.type) {
            case 'doc':         return children;
            case 'paragraph':   return `<p>${children || '&nbsp;'}</p>`;
            case 'text':        return wrapMarks(node.text ?? '');
            case 'heading':     return `<h${node.attrs?.level ?? 2}>${children}</h${node.attrs?.level ?? 2}>`;
            case 'bulletList':  return `<ul>${children}</ul>`;
            case 'orderedList': return `<ol>${children}</ol>`;
            case 'listItem':    return `<li>${children}</li>`;
            case 'hardBreak':   return '<br>';
            default:            return children;
        }
    }

    return renderNode(doc);
}

export default function CareerDetail({ id }: { id: number | string }) {
    const { data: job, loading, error } = useCmsData(
        () => axios.get(`/api/v1/jobs/${id}`).then(r => r.data.data),
        [id]
    );

    return (
        <div>
            <NavBar isDark={true} />
            <HeaderItem
                height={50}
                bgImage={'/assets/images/bg/bgContact.png'}
            />
            <section style={{ padding: '4rem 0' }}>
                <Container>
                    {loading && (
                        <p className="textPrimary">Loading...</p>
                    )}
                    {(error || (!loading && !job)) && (
                        <p className="textPrimary">Job listing not found.</p>
                    )}
                    {job && (
                        <Row>
                            <Col lg={8}>
                                <a
                                    href="/careers"
                                    style={{
                                        color: '#FBBD00',
                                        fontWeight: 600,
                                        textDecoration: 'none',
                                        display: 'inline-block',
                                        marginBottom: '1.5rem',
                                    }}
                                >
                                    ← Back to careers
                                </a>

                                <h5 className="subHeader">Open Position</h5>
                                <h2 className="headerDark mb-2">{job.title}</h2>

                                {job.department && (
                                    <p className="textPrimary" style={{ marginBottom: '0.25rem' }}>
                                        <strong>{job.department}</strong>
                                    </p>
                                )}
                                {job.location && (
                                    <p className="textPrimary" style={{ color: '#888', marginBottom: '2rem' }}>
                                        {job.location}
                                    </p>
                                )}

                                {job.description && (
                                    <div
                                        className="textPrimary"
                                        dangerouslySetInnerHTML={{
                                            __html: tiptapToHtml(job.description),
                                        }}
                                    />
                                )}

                                <div style={{ marginTop: '3rem' }}>
                                    <a
                                        href="/contact"
                                        style={{
                                            display: 'inline-block',
                                            padding: '0.75rem 2rem',
                                            background: '#FBBD00',
                                            color: '#121212',
                                            borderRadius: '4px',
                                            fontWeight: 600,
                                            textDecoration: 'none',
                                        }}
                                    >
                                        Apply Now
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    )}
                </Container>
            </section>
            <Footer />
        </div>
    );
}
