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
        mainImg: p.thumbnail,
        detailsImg: p.hero_image,
        distFeature: [],
        galleryBasePath: '',
        gallery: [],
        showInHome: p.show_in_home,
        estateFeatures: [],
    };
}

function buildSpecs(h: ApiHouseType) {
    const specs = [];
    if (h.surface_area)   specs.push({ image: '/assets/images/icons/surface.png', title: 'Surface Area',    count: h.surface_area });
    if (h.parking_spaces) specs.push({ image: '/assets/images/icons/spaces.png',  title: 'Parking Spaces', count: String(h.parking_spaces) });
    if (h.maids_quarters) specs.push({ image: '/assets/images/icons/maid.png',    title: "Maid's Quarters", count: String(h.maids_quarters) });
    if (h.beds)           specs.push({ image: '/assets/images/icons/bed.png',     title: 'Bedrooms',       count: String(h.beds) });
    if (h.baths)          specs.push({ image: '/assets/images/icons/bath.png',    title: 'Bathrooms',      count: String(h.baths) });
    if (h.living_rooms)   specs.push({ image: '/assets/images/icons/room.png',    title: 'Living Rooms',   count: String(h.living_rooms) });
    return specs;
}

function toHouseTypeItemProps(h: ApiHouseType): houseTypeItemProps {
    const parts: string[] = [];
    if (h.beds)  parts.push(`${h.beds} bed${h.beds !== 1 ? 's' : ''}`);
    if (h.baths) parts.push(`${h.baths} bath${h.baths !== 1 ? 's' : ''}`);
    if (h.area)  parts.push(h.area);
    return {
        img: h.thumbnail,
        name: h.name,
        desc: parts.join(' · ') || h.name,
        slug: h.slug,
        projectSlug: [],
        headerImg: h.hero_image,
        detailsImg: h.hero_image,
        moreDesc: h.description || '',
        galleryBasePath: '',
        gallery: (h.gallery ?? []).map(g => g.url),
        specs: buildSpecs(h),
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
