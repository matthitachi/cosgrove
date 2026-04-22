import * as React from "react";
import NavBar from "../../Components/Elements/Navbar/navbar";
import HeaderItem from "../../Components/Elements/HeaderItem/index";
import ProjectHomeTop from "../../Components/ProjectHomeTop/index";
import HouseTypes from "../../Components/ProjectDetailsPage/HouseTypes/index";
import OtherProjectTypes from "../../Components/ProjectDetailsPage/OtherProjectTypes/index";
import GallerySection from "../../Components/ProjectDetailsPage/GallerySection/index";
import Explore from "../../Components/ExploreProject";
import Footer from "../../Components/Elements/Footer";
import { useState, useEffect } from "react";
import { getProjects, getProjectBySlug, ApiProjectDetail, ApiHouseType, ApiProject } from "../../Services/cosgroveApiServices";
import { houseTypeItemProps } from "../../types/cms";
import { ProjectItemProp } from "../../Components/Elements/ProjectItem";

function toHouseTypeItemProps(h: ApiHouseType): houseTypeItemProps {
    const thumb = h.images?.[0]?.thumb || h.images?.[0]?.url || '';
    const full  = h.images?.[0]?.url || '';
    const parts: string[] = [];
    if (h.beds)  parts.push(`${h.beds} Bed${h.beds !== 1 ? 's' : ''}`);
    if (h.baths) parts.push(`${h.baths} Bath${h.baths !== 1 ? 's' : ''}`);
    if (h.area)  parts.push(h.area);
    return {
        img: thumb,
        name: h.name,
        desc: parts.join(' · ') || h.name,
        slug: h.slug,
        projectSlug: [],
        headerImg: full,
        detailsImg: full,
        moreDesc: '',
        galleryBasePath: '',
        gallery: (h.images ?? []).map(i => i.url),
        specs: [],
    };
}

function toProjectItemProp(p: ApiProject): ProjectItemProp {
    return {
        name: p.name,
        slug: p.slug,
        location: p.location,
        description: (p as any).description || '',
        mainImg: p.hero_image,
        detailsImg: p.hero_image,
        distFeature: [],
        galleryBasePath: '',
        gallery: [],
        showInHome: p.show_in_home,
        estateFeatures: [],
    };
}

export default function ({ slug }: { slug: string }) {
    const [allDetails, setAllDetails] = useState<ApiProjectDetail[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProjects()
            .then(projects => Promise.all(projects.map(p => getProjectBySlug(p.slug))))
            .then(details => { setAllDetails(details); setLoading(false); })
            .catch(() => setLoading(false));
    }, []);

    if (loading || !allDetails) {
        return (
            <div>
                <NavBar isDark={true} />
                <div style={{ minHeight: '60vh' }} />
                <Footer />
            </div>
        );
    }

    const targetProject = allDetails.find(p => (p.house_types ?? []).some(h => h.slug === slug));
    const houseType = targetProject?.house_types?.find(h => h.slug === slug);

    if (!houseType) {
        return (
            <div>
                <NavBar isDark={true} />
                <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <p>House type not found.</p>
                </div>
                <Footer />
            </div>
        );
    }

    const houseTypeProps = toHouseTypeItemProps(houseType);
    const projectsWithHouseType: ProjectItemProp[] = targetProject ? [toProjectItemProp(targetProject)] : [];
    const otherHouseTypes: houseTypeItemProps[] = allDetails
        .flatMap(p => p.house_types ?? [])
        .filter(h => h.slug !== slug)
        .map(toHouseTypeItemProps);

    return (
        <div>
            <NavBar isDark={true} />
            <HeaderItem height={50} bgImage={houseTypeProps.headerImg} />
            <ProjectHomeTop houseType={houseTypeProps} />
            <OtherProjectTypes headerContent="Projects with this House Type" projects={projectsWithHouseType} />
            <GallerySection basePath={''} gallery={houseTypeProps.gallery} headerContent="The house up close" />
            <Explore homeList={otherHouseTypes} />
            <Footer />
        </div>
    );
}
