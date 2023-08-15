import * as React from "react";
import NavBar from "../../Components/Elements/Navbar/navbar";
import HeaderItem from "../../Components/Elements/HeaderItem/index";
import OverviewSection from "../../Components/AboutPage/OverviewSection/index";
import TeamSection from "../../Components/AboutPage/TeamSection/index";
import Footer from "../../Components/Elements/Footer/index";


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

