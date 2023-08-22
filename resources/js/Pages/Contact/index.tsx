import * as React from "react";
import Navy from "../../../Navbar-2/navbar-2";
import HeaderItem from "../../Components/HeaderItem/index";
import Hero from "../../Components/ContactSection/ContactHero";
import ContactTeam from "../../Components/ContactSection/ContactTeam";
import Footer from "../../Components/Footer";

export default function () {
    return (
        <div>
            <Navy />
            <HeaderItem
                height={50}
                bgImage={"/assets/images/bg/bgContact.png"}
            />
            <Hero />
            <ContactTeam />
            <Footer />
        </div>
    );
}
