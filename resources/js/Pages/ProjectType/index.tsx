import * as React from "react";
import Navy from "../../../Navbar-2/navbar-2";
import HeaderItem from "../../Components/HeaderItem/index";
import ProjectHomeTop from "../../ProjectHomeTop/index";
import HouseTypes from "../../Components/ProjectDetailsSection/HouseTypes/index";
import GallerySection from "../../Components/ProjectDetailsSection/GallerySection/index";
import Explore from "../../Components/ExploreProject";
import Footer from "../../Components/Footer";

export default function () {
    return (
        <div>
            <Navy />
            <HeaderItem height={50} bgImage={"/assets/images/bg/bg1.png"} />
            <ProjectHomeTop />
            <HouseTypes headerContent="Projects with this House Type" />
            <GallerySection headerContent="The house up close" />
            <Explore />
            <Footer />
        </div>
    );
}
