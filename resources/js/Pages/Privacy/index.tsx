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
            <Container>
                <div>
                    <h5 className={'subHeader  mt-5 mb-2'}>Privacy Policy</h5>
                    <h2 className={'headerDark'}>Privacy Policy for Cosgrove Investment LTD</h2>

                    <p className={'textDark'}>
                        At Cosgrove, accessible from cosgrove.com.ng, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Cosgrove and how we use it. This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Cosgrove.
                    </p>

                    <h2 className={'headerDark mt-2'}>Consent</h2>
                    <p className={'textDark'}>
                        By using our website, you hereby consent to our Privacy Policy and agree to its terms.
                    </p>

                    <h2 className={'headerDark mt-2'}>Information we collect</h2>
                    <p className={'textDark'}>
                        The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information. If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide. When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
                    </p>

                    <h2 className={'headerDark mt-2'}>How we use your information</h2>
                    <p className={'textDark'}>
                        We use the information we collect in various ways, including to:
                        <ul>
                            <li>Understand and analyze how you use our website</li>
                            <li>Develop new products, services, features, and functionality</li>
                            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the webste, and for marketing and promotional purposes</li>
                            <li>Send you emails</li>
                        </ul>
                    </p>
                    <h2 className={'headerDark mt-2'}>Log Files</h2>
                    <p className={'textDark'}>
                        Cosgrove follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services’ analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users’ movement on the website, and gathering demographic information. Cosgrove does not sell data of customers to third party companies and advertising agencies for the purpose of receiving targeted ads from such companies. However, the policy can empower the company to push ads to the customer especially based on customer’s interest, gotten from the information which the customer has supplied to the company.
                    </p>

                </div>
            </Container>
            <Footer/>
        </div>
        // <Footer
    );
}
