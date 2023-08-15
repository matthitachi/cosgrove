import * as React from "react";
import NavBar from "../../Components/Navbar/navbar";
import HeaderItem from "../../Components/HeaderItem/index";
import TopSection from "../../Components/ProjectDetailsSection/TopSection/index";
import HouseTypes from "../../Components/ProjectDetailsSection/HouseTypes/index";
import GallerySection from "../../Components/ProjectDetailsSection/GallerySection/index";
import ExploreMoreSection from "../../Components/ProjectDetailsSection/ExploreMoreSection/index";
import Footer from "../../Components/Footer/index";


export default function () {
    return (<div>
        <NavBar/>
        <HeaderItem height={50} bgImage={'/assets/images/bg/bg1.png'}/>
        <TopSection/>
        <HouseTypes/>
        <GallerySection/>
        <ExploreMoreSection/>
        <Footer/>

        <div>

        </div>
    </div>);
}

