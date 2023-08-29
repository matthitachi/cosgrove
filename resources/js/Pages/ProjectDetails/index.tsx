import * as React from "react";
import NavBar from "../../Components/Elements/Navbar/navbar";
import HeaderItem from "../../Components/Elements/HeaderItem/index";
import TopSection from "../../Components/ProjectDetailsPage/TopSection/index";
import HouseTypes from "../../Components/ProjectDetailsPage/HouseTypes/index";
import GallerySection from "../../Components/ProjectDetailsPage/GallerySection/index";
import ExploreMoreSection from "../../Components/ProjectDetailsPage/ExploreMoreSection/index";
import Footer from "../../Components/Elements/Footer/index";
import {projects} from "../../Data/data"
import {houseTypes} from "../../Data/data"
import Cube from 'react-preloaders';

export default function ({slug}) {
    const otherProjects = projects.filter((item) => item.slug != slug);
    const project = projects.find((item) => item.slug == slug);
    const availableHouses = houseTypes.filter(item => item.projectSlug.includes(project.slug));

    return (
        <div>
            {/*<Cube color={'#f7f7f7'} background={"#fbbd00"} time={1800}/>*/}
            <NavBar isDark={true} />
            <HeaderItem height={50} bgImage={project.mainImg} position={'center'} />
            <TopSection project={project} />
            <HouseTypes headerContent="House Types" houseTypes={availableHouses} />
            <GallerySection basePath={project.galleryBasePath} gallery={project.gallery} headerContent="Sights from the Project" />
            <ExploreMoreSection otherProjects={otherProjects}/>
            <Footer/>
        </div>
    );
}
