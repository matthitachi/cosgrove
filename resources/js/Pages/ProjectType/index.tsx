import * as React from "react";
import Navy from "../../../Navbar-2/navbar-2";

import NavBar from "../../Components/Elements/Navbar/navbar";
import HeaderItem from "../../Components/Elements/HeaderItem/index";
import ProjectHomeTop from "../../Components/ProjectHomeTop/index";
import HouseTypes from "../../Components/ProjectDetailsPage/HouseTypes/index";
import OtherProjectTypes from "../../Components/ProjectDetailsPage/OtherProjectTypes/index";
import GallerySection from "../../Components/ProjectDetailsPage/GallerySection/index";
import Explore from "../../Components/ExploreProject";
import Footer from "../../Components/Elements/Footer";
import {projects, houseTypes} from "../../Data/data";
import {useState} from "react";
import {useEffect} from "react";
import {Cube} from 'react-preloaders';

export default function ({slug}) {
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        }, 1000)
    }, []);
    const otherHouseTypes = houseTypes.filter((item) => item.slug != slug);
    const houseType = houseTypes.find((item) => item.slug == slug);
    const projectsWithHouseType = projects.filter((item) =>
        houseType.projectSlug.includes(item.slug));
    return (
        <div>
            {/*<Cube color={'#f7f7f7'} background={"#fbbd00"} customLoading={loading}/>*/}
            <NavBar isDark={true} />
            <HeaderItem height={50} bgImage={houseType.headerImg} />
            <ProjectHomeTop houseType={houseType}/>
            <OtherProjectTypes headerContent="Projects with this House Type" projects={projectsWithHouseType} />
            <GallerySection basePath={houseType.galleryBasePath} gallery={houseType.gallery} headerContent="The house up close" />
            <Explore homeList={otherHouseTypes} />
            <Footer />
        </div>
    );
}
