import * as React from "react";
// import NavBar from "../../Components/Navbar/navbar"
import HeaderItem from "../../Components/Elements/HeaderItem/index";
import OverviewSection from "../../Components/AboutPage/OverviewSection/index";
import TeamSection from "../../Components/AboutPage/TeamSection/index";
import Footer from "../../Components/Elements/Footer/index";
import Navy from "../../../Navbar-2/navbar-2";

export default function () {
    return (
        <div>
            {/* <NavBar /> */}
            <Navy />
            <HeaderItem
                height={70}
                bgImage={"/assets/images/bg/bg-about.png"}
            />
            <OverviewSection />
            <TeamSection />
            <Footer />

            <div></div>
        </div>
    );
}
