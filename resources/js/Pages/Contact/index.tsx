import * as React from "react";
import Navy from "../../../Navbar-2/navbar-2";
import NavBar from "../../Components/Elements/Navbar/navbar";
import HeaderItem from "../../Components/Elements/HeaderItem/index";
import Hero from "../../Components/ContactSection/ContactHero";
import ContactTeam from "../../Components/ContactSection/ContactTeam";
import Footer from "../../Components/Elements/Footer";

import {Cube} from 'react-preloaders';
import {useState} from "react";
import {useEffect} from "react";
export default function () {

    const [loading, setLoading] = useState<boolean>(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        }, 1000)
    }, []);
    return (
        <div>
            {/*<Cube color={'#f7f7f7'} background={"#fbbd00"} customLoading={loading}/>*/}
            <NavBar isDark={true} />
            <HeaderItem
                height={70}
                bgImage={"/assets/images/contacts/landscape.jpeg"}
                // position={'center -120px '}
                position={'center top'}
                // attachment={'fixed'}
            />
            <Hero />
            <ContactTeam />
            <Footer />
        </div>
    );
}
