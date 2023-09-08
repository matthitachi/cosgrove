import * as React from "react";
import Navy from "../../../Navbar-2/navbar-2";

import NavBar from "../../Components/Elements/Navbar/navbar";
import HeaderItem from "../../Components/Elements/HeaderItem/index";
import ProjectHomeTop from "../../Components/ProjectHomeTop/index";
import HouseTypes from "../../Components/ProjectDetailsPage/HouseTypes/index";
import OtherProjectTypes from "../../Components/ProjectDetailsPage/OtherProjectTypes/index";
import GallerySection from "../../Components/ProjectDetailsPage/GallerySection/index";
import Explore from "../../Components/ExploreProject";
import Footer from "../../Components/Elements/Footer";
import {projects, houseTypes} from "../../Data/data";
import {Container} from "react-bootstrap";
import FeaturedHomeSection from "../../Components/HomePage/FeaturedHomeSection";
import {useState} from "react";
import {useEffect} from "react";
import {Cube} from 'react-preloaders';

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
            <HeaderItem height={50} bgImage={'/assets/images/bg/bgContact.png'} />

            <FeaturedHomeSection full={false}/>
            <Footer/>
        </div>
    );
}
