import * as React from "react";
import Navy from "../../../Navbar-2/navbar-2";

import NavBar from "../../Components/Elements/Navbar/navbar";
import HeaderItem from "../../Components/Elements/HeaderItem/index";
import ProjectHomeTop from "../../ProjectHomeTop/index";
import HouseTypes from "../../Components/ProjectDetailsPage/HouseTypes/index";
import GallerySection from "../../Components/ProjectDetailsPage/GallerySection/index";
import Explore from "../../Components/ExploreProject";
import Footer from "../../Components/Elements/Footer";

export default function () {
    return (
        <div>
            <NavBar isDark={true} />
            <HeaderItem height={50} bgImage={"/assets/images/bg/bg1.png"} />
            <ProjectHomeTop />
            <HouseTypes headerContent="Projects with this House Type" />
            <GallerySection headerContent="The house up close" />
            <Explore />
            <Footer />
        </div>
    );
}
