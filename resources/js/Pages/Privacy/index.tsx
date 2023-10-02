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
                    <h2 className={'headerDark'}>Privacy Policy for Cosgrove Investment Limited</h2>

                    <p className={'textPrimary'}>
                        At Cosgrove Investment Limited, we are committed to safeguarding the privacy of our visitors and users. This Privacy Policy outlines the types of information we collect and how we use it. Please read this policy carefully to understand how your personal information will be treated when you use our website, accessible at www.cosgroveafrica.com
                    </p>

                    <p className={'textPrimary'}>
                    This Privacy Policy applies solely to our online activities and is applicable to all visitors to our website concerning the information they provide or we collect.
                    </p>
                    <p className={'textPrimary'}>
                        By using our website, you consent to the practices described in this Privacy Policy and agree to its terms.
                    </p>

                    <h2 className={'subHeaderDark mt-2 mb-2'}>1. Information We Collect</h2>
                    <p className={'textPrimary'}>
                        We collect both personal and non-personal information, which may include but is not limited to:
                    </p>

                    <h2 className={'subHeaderDark mt-2 mb-2'}>Personal Information:</h2>
                    <p className={'textPrimary'}>
                        - When you register for an Account, we may collect your contact information, such as your full name, company name, address, email address, and telephone number.
                        <br/>
                        - If you contact us directly, we may receive additional information about you, such as your name, email address, phone number, the contents of the message, and any attachments you send us.
                        <br/>
                        - Any other information you choose to provide will be used in accordance with the purposes stated in this Privacy Policy.
                    </p>
                    <h2 className={'subHeaderDark mt-2 mb-2'}>Non-Personal Information:</h2>
                    <p className={'textPrimary'}>
                        - When you visit our website, we automatically collect certain information, such as internet protocol (IP) addresses, browser type, internet service provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. This information is collected through log files and is not linked to personally identifiable information. </p>

                    <h2 className={'subHeaderDark mt-5 mb-2'}>2. How We Use Your Information</h2>
                    <p className={'textPrimary'}>
                        We use the information we collect for various purposes, including but not limited to:
                        <br/>
                        <br/>
                        - Understanding and analyzing how you use our website. <br/>
                        - Developing new products, services, features, and functionality. <br/>
                        - Communicating with you, including customer service, providing updates and information related to the website, and for marketing and promotional purposes.
                        <br/>
                        - Sending you emails to keep you informed about our services and promotions.
                    </p>


                    <h2 className={'subHeaderDark mt-5 mb-2'}>3. Log Files</h2>
                    <p className={'textPrimary'}>
                        Cosgrove follows standard procedures by using log files. The information collected through log files is used for analyzing trends, administering the website, tracking users' movements on the site, and gathering demographic information. This information may include IP addresses, browser types, ISP, date and time stamps, referring/exit pages, and click data. Importantly, this data is not linked to personally identifiable information.
                    </p>

                    <h2 className={'subHeaderDark mt-5 mb-2'}>4. Data Sharing</h2>
                    <p className={'textPrimary'}>
                        Cosgrove does not sell customer data to third-party companies or advertising agencies for the purpose of receiving targeted ads. However, we may use the information you provide to tailor advertisements to your interests based on the information you have supplied to us.
                    </p>

                    <h2 className={'subHeaderDark mt-5 mb-2'}>5. Changes to this Privacy Policy</h2>
                    <p className={'textPrimary'}>

                        We reserve the right to update and modify this Privacy Policy at any time.
                    </p>

                    <h2 className={'subHeaderDark mt-5 mb-2'}> 6. Contact Us</h2>
                    <p className={'textPrimary'}>
                        If you have any questions or concerns regarding this Privacy Policy or your personal information, please contact us at info@cosgroveafrica.com
                    </p>

                    <br/>

                    <p className={'textPrimary'}>
                        By using our website, you acknowledge that you have read, understood, and agree to the terms of this Privacy Policy.
                    </p>
                </div>
            </Container>
            <Footer/>
        </div>
        // <Footer
    );
}
