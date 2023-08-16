import * as React from "react";
import Navy from "../../../Navbar-2/navbar-2";
import HeaderItem from "../../Components/HeaderItem/index";
import TopSection from "../../Components/ProjectDetailsSection/TopSection/index";
import Footer from "../../Components/Footer/index";

export default function () {
    return (
        <div>
            <Navy />
            <HeaderItem height={50} bgImage={"/assets/images/bg/type.png"} />
            <TopSection />
            <Footer />
        </div>
    );
}
