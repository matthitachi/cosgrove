import * as React from 'react';
import { Link } from '@inertiajs/react';
import { ApiPage, ApiPageSection } from '../../types/cms';

interface Props {
    section: ApiPageSection;
    page: ApiPage;
}

export default function CtaSection({ section }: Props) {
    return (
        <section style={{ padding: '60px 0', textAlign: 'center' }}>
            <div className="container">
                {section.data?.heading && (
                    <h2 className="headerDark mb-3">
                        {section.data.heading as string}
                    </h2>
                )}
                {section.data?.subheading && (
                    <p className="textPrimary mb-4">
                        {section.data.subheading as string}
                    </p>
                )}
                {section.data?.button_label && section.data?.button_url && (
                    <Link
                        href={section.data.button_url as string}
                        className="btn"
                        style={{ background: '#FBBD00', color: '#121212' }}
                    >
                        {section.data.button_label as string}
                    </Link>
                )}
            </div>
        </section>
    );
}
