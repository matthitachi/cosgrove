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
import { useCmsData } from "../../Hooks/useCmsData";
import { getPage } from "../../Services/cosgroveApiServices";
import { ApiPage } from "../../types/cms";

export default function () {

    const [loading, setLoading] = useState<boolean>(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        }, 1000)
    }, []);

    const { data: contactPage } = useCmsData<ApiPage>(() => getPage('contact'));
    const contactSection = contactPage?.sections.find(s => s.type === 'contact_form' && s.is_active);

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
            <Hero cmsSection={contactSection} />
            <ContactTeam />
            <Footer />
        </div>
    );
}
