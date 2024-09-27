import * as React from "react";
import Navy from "../../../Navbar-2/navbar-2";
import NavBar from "../../Components/Elements/Navbar/navbar";
import HeaderItem from "../../Components/Elements/HeaderItem/index";
import Hero from "../../Components/AgentSection/AgentHero";
import ContactTeam from "../../Components/ContactSection/ContactTeam";
import Footer from "../../Components/Elements/Footer";

import {Cube} from 'react-preloaders';
import {useState} from "react";
import {useEffect} from "react";
export default function () {

    const [loading, setLoading] = useState<boolean>(true);
    const [position, setPosition] = useState<string>('unset');
    useEffect(()=>{
        if(window.innerWidth < 576){
            setPosition('bottom');
        }
        setTimeout(()=>{
            setLoading(false);
        }, 1000)
    }, []);
    return (
        <div>
            {/*<Cube color={'#f7f7f7'} background={"#fbbd00"} customLoading={loading}/>*/}
            <NavBar isDark={true} />
            <HeaderItem
                height={50}
                bgImage={"/assets/images/bg/bgContact.png"}
                position={position}
            />
            <Hero />
            <Footer />
        </div>
    );
}
