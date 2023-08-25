import * as React from "react";
import NavBar from "../../Components/Elements/Navbar/navbar";
import HeaderItem from "../../Components/Elements/HeaderItem/index";
import SmartCommunitiesSection from "../../Components/ProjectPage/SmartCommunitiesSection/index";
import Footer from "../../Components/Elements/Footer/index";
import {Cube} from 'react-preloaders';


export default function () {
    return (<div>
        <Cube color={'#f7f7f7'} background={"#fbbd00"} time={1800}/>
        <NavBar isDark={true}/>
        <HeaderItem height={50} bgImage={'/assets/images/bg/bg1.png'}/>
        <SmartCommunitiesSection/>
        <Footer/>

        <div>

        </div>
    </div>);
}

