import * as React from "react";
import NavBar from "../../Components/Elements/Navbar/navbar";
import HeaderItem from "../../Components/Elements/HeaderItem/index";
import SmartCommunitiesSection from "../../Components/ProjectPage/SmartCommunitiesSection/index";
import Footer from "../../Components/Elements/Footer/index";


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

