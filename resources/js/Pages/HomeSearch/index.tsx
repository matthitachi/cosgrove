import * as React from "react";
import Navy from "../../../Navbar-2/navbar-2";
import NavBar from "../../Components/Elements/Navbar/navbar";
import SearchHeader from "../../Components/HomeSearchSection/HomeSearchHeader";
import Footer from "../../Components/Elements/Footer";

export default function () {
    return (
        <div>
            <NavBar isDark={true} />
            <SearchHeader />
            <Footer />
        </div>
    );
}
