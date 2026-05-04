import * as React from 'react';
import { ApiPage, ApiPageSection } from '../../types/cms';

interface Props {
    section: ApiPageSection;
    page: ApiPage;
}

export default function HeroSection({ section }: Props) {
    return (
        <section style={{ padding: '80px 0' }}>
            <div className="container">
                {section.data?.heading && (
                    <h1 className="headerDark">
                        {section.data.heading as string}
                    </h1>
                )}
                {section.data?.subheading && (
                    <p className="textPrimary">
                        {section.data.subheading as string}
                    </p>
                )}
            </div>
        </section>
    );
}
