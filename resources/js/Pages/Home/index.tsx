import * as React from "react";
import NavBar from "../../Components/Navbar/navbar";
import HeaderSection from "../../Components/HeaderSection/index";
import WelcomeSection from "../../Components/WelcomeSection/index";
import AboutHomeSection from "../../Components/AboutHomeSection/index";
import CurvedParallaxSection from "../../Components/CurvedParallaxSection/index";
import ProjectHomeSection from "../../Components/ProjectHomeSection/index";
import ServiceHomeSection from "../../Components/ServiceHomeSection/index";
import OurHomeSection from "../../Components/OurHomeSection/index";
import FeaturedHomeSection from "../../Components/FeaturedHomeSection/index";
import SmartFeaturesHomeSection from "../../Components/SmartFeaturesHomeSection/index";
import Footer from "../../Components/Footer/index";


export default function () {
    return (<div>
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

