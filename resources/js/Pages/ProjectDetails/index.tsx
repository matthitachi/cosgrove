import * as React from "react";
import NavBar from "../../Components/Elements/Navbar/navbar";
import HeaderItem from "../../Components/Elements/HeaderItem/index";
import TopSection from "../../Components/ProjectDetailsPage/TopSection/index";
import HouseTypes from "../../Components/ProjectDetailsPage/HouseTypes/index";
import GallerySection from "../../Components/ProjectDetailsPage/GallerySection/index";
import ExploreMoreSection from "../../Components/ProjectDetailsPage/ExploreMoreSection/index";
import Footer from "../../Components/Elements/Footer/index";
import { useState, useEffect } from "react";
import { getProjectBySlug, getProjects, ApiProject, ApiHouseType } from "../../Services/cosgroveApiServices";
import { useCmsData } from "../../Hooks/useCmsData";
import { ProjectItemProp } from "../../Components/Elements/ProjectItem";
import { houseTypeItemProps } from "../../types/cms";

function toProjectItemProp(p: ApiProject): ProjectItemProp {
    return {
        name: p.name,
        slug: p.slug,
        location: p.location,
        description: p.description || '',
        mainImg: p.hero_image,
        detailsImg: p.hero_image,
        distFeature: [],
        galleryBasePath: '',
        gallery: [],
        showInHome: p.show_in_home,
        estateFeatures: [],
    };
}

function toHouseTypeItemProps(h: ApiHouseType): houseTypeItemProps {
    const thumbImg = h.images?.[0]?.thumb || h.images?.[0]?.url || '';
    const fullImg  = h.images?.[0]?.url || '';
    const parts: string[] = [];
    if (h.beds)  parts.push(`${h.beds} bed${h.beds !== 1 ? 's' : ''}`);
    if (h.baths) parts.push(`${h.baths} bath${h.baths !== 1 ? 's' : ''}`);
    if (h.area)  parts.push(h.area);
    return {
        img: thumbImg,
        name: h.name,
        desc: parts.join(' · ') || h.name,
        slug: h.slug,
        projectSlug: [],
        headerImg: fullImg,
        detailsImg: fullImg,
        moreDesc: '',
        galleryBasePath: '',
        gallery: h.images.map(i => i.url),
        specs: [],
    };
}

export default function ({ slug }: { slug: string }) {
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => { setTimeout(() => setLoading(false), 1000); }, []);

    const { data: detail } = useCmsData(() => getProjectBySlug(slug), [slug]);
    const { data: allProjects } = useCmsData(getProjects);

    if (!detail) {
        return (
            <div>
                <NavBar isDark={true} />
                <div style={{ minHeight: '60vh' }} />
                <Footer />
            </div>
        );
    }

    const project = toProjectItemProp(detail);
    const availableHouses: houseTypeItemProps[] = (detail.house_types ?? []).map(toHouseTypeItemProps);
    const otherProjects: ProjectItemProp[] = (allProjects ?? [])
        .filter(p => p.slug !== slug)
        .map(toProjectItemProp);

    const galleryUrls: string[] = (detail.gallery ?? []).map(g => g.url);

    return (
        <div>
            <NavBar isDark={true} />
            <HeaderItem height={50} bgImage={project.mainImg} position={'center'} />
            <TopSection project={project} />
            <HouseTypes headerContent="House Types" houseTypes={availableHouses} />
            <GallerySection basePath={''} gallery={galleryUrls} headerContent="Sights from the Project" />
            <ExploreMoreSection otherProjects={otherProjects} />
            <Footer />
        </div>
    );
}
