import * as React from "react";
import NavBar from "../../Components/Navbar/navbar";
import HeaderItem from "../../Components/HeaderItem/index";
import OverviewSection from "../../Components/AboutPage/OverviewSection/index";
import TeamSection from "../../Components/AboutPage/TeamSection/index";
import Footer from "../../Components/Footer/index";


export default function () {
    return (<div>
        <NavBar/>
        <HeaderItem height={70} bgImage={'/assets/images/bg/bg1.png'}/>
        <OverviewSection/>
        <TeamSection/>
        <Footer/>

        <div>

        </div>
    </div>);
}

