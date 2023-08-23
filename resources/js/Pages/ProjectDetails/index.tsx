import * as React from "react";
import NavBar from "../../Components/Elements/Navbar/navbar";
import HeaderItem from "../../Components/Elements/HeaderItem/index";
import TopSection from "../../Components/ProjectDetailsPage/TopSection/index";
import HouseTypes from "../../Components/ProjectDetailsPage/HouseTypes/index";
import GallerySection from "../../Components/ProjectDetailsPage/GallerySection/index";
import ExploreMoreSection from "../../Components/ProjectDetailsPage/ExploreMoreSection/index";
import Footer from "../../Components/Elements/Footer/index";

export default function () {
    return (
        <div>
            <NavBar isDark={true} />
            <HeaderItem height={50} bgImage={"/assets/images/bg/bg1.png"} />
            <TopSection />
            <HouseTypes headerContent="House Types" />
            <GallerySection headerContent="Sights from the Project" />
            <ExploreMoreSection />
            <Footer />

            <div></div>
        </div>
    );
}
