import * as React from "react";
import Navy from "../../../Navbar-2/navbar-2";
import HeaderItem from "../../Components/HeaderItem/index";
import ProjectTechHome from "../../Components/ProjectTechHome";
import ProjectTechType from "../../Components/ProjectTechType";
import Footer from "../../Components/Footer";

export default function () {
    return (
        <div>
            <Navy />
            <HeaderItem height={50} bgImage={"/assets/images/bg/projBG.png"} />
            <ProjectTechHome />
            <ProjectTechType />
            <Footer />
        </div>
    );
}
