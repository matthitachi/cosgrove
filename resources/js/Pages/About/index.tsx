import * as React from "react";
import NavBar from "../../Components/Elements/Navbar/navbar";
import HeaderItem from "../../Components/Elements/HeaderItem/index";
import OverviewSection from "../../Components/AboutPage/OverviewSection/index";
import TeamSection from "../../Components/AboutPage/TeamSection/index";
import Footer from "../../Components/Elements/Footer/index";
import Navy from "../../../Navbar-2/navbar-2";
import {Cube} from 'react-preloaders';

export default function () {
    return (
        <div>
            {/*<Cube color={'#f7f7f7'} background={"#fbbd00"} time={1800}/>*/}
            {/* <NavBar /> */}
            <NavBar isDark={true} />
            <HeaderItem
                height={70}
                bgImage={"/assets/images/bg/bg-about.png"}
            />
            <OverviewSection />
            <TeamSection />
            <Footer />
        </div>
    );
}
