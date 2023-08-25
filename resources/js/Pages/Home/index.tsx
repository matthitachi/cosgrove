import * as React from "react";
import NavBar from "../../Components/Elements/Navbar/navbar";
import HeaderSection from "../../Components/HomePage/HeaderSection/index";
import WelcomeSection from "../../Components/HomePage/WelcomeSection/index";
import AboutHomeSection from "../../Components/HomePage/AboutHomeSection/index";
import CurvedParallaxSection from "../../Components/HomePage/CurvedParallaxSection/index";
import ProjectHomeSection from "../../Components/HomePage/ProjectHomeSection/index";
import ServiceHomeSection from "../../Components/HomePage/ServiceHomeSection/index";
import OurHomeSection from "../../Components/HomePage/OurHomeSection/index";
import FeaturedHomeSection from "../../Components/HomePage/FeaturedHomeSection/index";
import SmartFeaturesHomeSection from "../../Components/HomePage/SmartFeaturesHomeSection/index";
import Footer from "../../Components/Elements/Footer/index";
import {Cube} from 'react-preloaders';


export default function () {
    return (<div>
        <Cube color={'#f7f7f7'} background={"#fbbd00"} time={1800}/>
        <NavBar/>
        <HeaderSection/>
        <WelcomeSection/>
        <AboutHomeSection/>
        <CurvedParallaxSection/>
        <ProjectHomeSection/>
        <ServiceHomeSection/>
        <OurHomeSection/>
        <FeaturedHomeSection/>
        <SmartFeaturesHomeSection/>
        <Footer/>

        <div>

        </div>
    </div>);
}

