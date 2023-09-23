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
import {useEffect, useState} from "react";


export default function () {
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        }, 1000)
    }, []);
    return (<div>
        {/*<Cube color={'#f7f7f7'} background={"#fbbd00"} customLoading={loading}/>*/}
        <NavBar/>
        <HeaderSection/>
        <WelcomeSection/>
        <AboutHomeSection/>
        <CurvedParallaxSection/>
        <ProjectHomeSection/>
        <ServiceHomeSection serviceItems={[
            {
                img: '/assets/images/services/discussion.png',
                title: 'Consultation',
                desc: 'We offer expert consultation to guide your real estate decisions. With over 20 years of industry experience, we help you make informed choices for both residential and commercial projects.'
            },
            {
                img: '/assets/images/services/design.png',
                title: 'Design & Automation',
                desc: 'Our design service creates smart, sustainable homes tailored to your needs. We anticipate the future, integrating modern lifestyle features with tomorrow\'s technology.'
            },
            {
                img: '/assets/images/services/construction.png',
                title: 'Construction',
                desc: 'We construct your dream spaces with precision and care. Our team transforms designs into smart homes and functional commercial spaces, aligning with your vision.'
            },
            {
                img: '/assets/images/services/project.png',
                title: 'Project Management',
                desc: 'We manage your projects from start to finish. Our approach ensures quality, timeliness, and sustainability at every stage of the process.'
            },
            {
                img: '/assets/images/services/investment.png',
                title: 'Smart Investment',
                desc: 'Investing in a Cosgrove home promises not just a residence, but a secure and lucrative asset, ensuring a robust return on your investment.'
            },

        ]}/>
        <OurHomeSection/>
        <FeaturedHomeSection/>
        <SmartFeaturesHomeSection/>
        <Footer/>
    </div>);
}

