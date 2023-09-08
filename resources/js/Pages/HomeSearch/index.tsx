import * as React from "react";
import Navy from "../../../Navbar-2/navbar-2";
import NavBar from "../../Components/Elements/Navbar/navbar";
import SearchHeader from "../../Components/HomeSearchSection/HomeSearchHeader";
import Footer from "../../Components/Elements/Footer";
import Cube from 'react-preloaders';
import {useState} from "react";
import {useEffect} from "react";
export default function ({search}) {

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
            <SearchHeader search={search}/>
            <Footer />
        </div>
    );
}
