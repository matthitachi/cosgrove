import * as React from "react";
import NavBar from "../../Components/Navbar/navbar";
import HeaderItem from "../../Components/HeaderItem/index";
import SmartCommunitiesSection from "../../Components/ProjectSection/SmartCommunitiesSection/index";
import Footer from "../../Components/Footer/index";


export default function () {
    return (<div>
        <NavBar/>
        <HeaderItem height={50} bgImage={'/assets/images/bg/bg1.png'}/>
        <SmartCommunitiesSection/>
        <Footer/>

        <div>

        </div>
    </div>);
}

