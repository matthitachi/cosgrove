import * as React from "react";
import Navy from "../../../Navbar-2/navbar-2";
import HeaderItem from "../../Components/HeaderItem/index";
import BrochureBody from "../../Components/ProjectBrochureBody";
import Footer from "../../Components/Footer";

export default function () {
    return (
        <div>
            <Navy />
            <HeaderItem
                height={50}
                bgImage={"/assets/images/bg/BgBrochure.png"}
            />
            <BrochureBody />
            <Footer />
        </div>
    );
}