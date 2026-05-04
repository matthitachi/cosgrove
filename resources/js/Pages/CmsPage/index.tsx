import * as React from 'react';
import { useCmsData } from '../../Hooks/useCmsData';
import { getPage } from '../../Services/cosgroveApiServices';
import { ApiPage, ApiPageSection } from '../../types/cms';
import NavBar from '../../Components/Elements/Navbar/navbar';
import Footer from '../../Components/Elements/Footer/index';
import HeroSection from '../../Components/DynamicSections/HeroSection';
import TextSection from '../../Components/DynamicSections/TextSection';
import CtaSection from '../../Components/DynamicSections/CtaSection';

const sectionComponents: Record<string, React.FC<{ section: ApiPageSection; page: ApiPage }>> = {
    hero: HeroSection,
    text: TextSection,
    cta:  CtaSection,
};

export default function CmsPage({ slug }: { slug: string }) {
    const { data: page, loading, error } = useCmsData<ApiPage>(
        () => getPage(slug),
        [slug]
    );

    return (
        <>
            <NavBar isDark={true} />
            <div style={{ height: '120px' }} /> {/* Spacer for fixed navbar */}
            {loading && <div style={{ minHeight: '60vh' }} />}
            {!loading && (error || !page) && (
                <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <p>Page not found.</p>
                </div>
            )}
            {!loading && page && page.sections
                .filter(s => s.is_active)
                .sort((a, b) => a.sort_order - b.sort_order)
                .map(section => {
                    const Component = sectionComponents[section.type];
                    if (!Component) {
                        console.warn('No component for section type:', section.type);
                        return null;
                    }
                    return <Component key={section.id} section={section} page={page} />;
                })
            }
            <Footer />
        </>
    );
}
