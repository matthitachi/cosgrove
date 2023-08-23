import * as React from "react";
import Navy from "../../../Navbar-2/navbar-2";
import NavBar from "../../Components/Elements/Navbar/navbar";
import HeaderItem from "../../Components/Elements/HeaderItem/index";
import BrochureBody from "../../Components/ProjectBrochureBody";
import Footer from "../../Components/Elements/Footer";

export default function () {
    return (
        <div>
            <NavBar isDark={true} />
            <HeaderItem
                height={50}
                bgImage={"/assets/images/bg/BgBrochure.png"}
            />
            <BrochureBody />
            <Footer />
        </div>
    );
}
