import * as React from "react";
import NavBar from "../../Components/Elements/Navbar/navbar";
import HeaderItem from "../../Components/Elements/HeaderItem/index";
import OverviewSection from "../../Components/AboutPage/OverviewSection/index";
import TeamSection from "../../Components/AboutPage/TeamSection/index";
import Footer from "../../Components/Elements/Footer/index";
import Navy from "../../../Navbar-2/navbar-2";
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
            {/* <NavBar /> */}
            <NavBar isDark={true} />
            <HeaderItem
                height={70}
                bgImage={"/assets/images/Cosgrove-2023-June-Workers-03.jpg"}
                // position={'center -100px'}
                attachment={`fixed`}
                position={'center'}
            />
            <OverviewSection />
            <Footer />
        </div>
    );
}
