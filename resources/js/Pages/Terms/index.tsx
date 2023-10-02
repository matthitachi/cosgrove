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
                    <h5 className={'subHeader  mt-5 mb-2'}>Terms of Service</h5>
                    <h2 className={'headerDark'}>Terms of Service for Cosgrove Investment Limited</h2>



                    <h2 className={'subHeaderDark mt-5 mb-2'}>1. Acceptance of Terms</h2>
                    <p className={'textPrimary'}>
                        By accessing or using the services provided by Cosgrove Investment LTD ("Cosgrove," "we," "us," or "our"), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                    </p>

                     <h2 className={'subHeaderDark mt-5 mb-2'}>2. Description of Services</h2>
                    <p className={'textPrimary'}>
                        Cosgrove Investment LTD is a pioneering real estate developer that integrates technology and sustainability into residential and commercial properties. Our portfolio features high-value properties designed to appreciate over time; located in Nigeria.</p>


                    <h2 className={'subHeaderDark mt-5 mb-2'}>3. User Registration</h2>
                    <p className={'textPrimary'}>
                        To access certain features of our services, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                    </p>

                    <h2 className={'subHeaderDark mt-5 mb-2'}>4. Property Information</h2>
                    <p className={'textPrimary'}>
                        The information provided on our website or through our services, including property listings, descriptions, pricing, and availability, is for informational purposes only. We do not warrant the accuracy or completeness of this information.
                    </p>

                    <h2 className={'subHeaderDark mt-5 mb-2'}>5. Intellectual Property</h2>
                    <p className={'textPrimary'}>
                        Our services and all related content, including but not limited to text, graphics, logos, images, architectural designs, and software, are protected by intellectual property laws. You may not use, reproduce, distribute, or modify any of our content without our prior written consent.
                    </p>

                    <h2 className={'subHeaderDark mt-5 mb-2'}> 6. Privacy Policy</h2>
                    <p className={'textPrimary'}>
                        Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect, use, and disclose your information, especially as it relates to real estate transactions.
                    </p>

                    <h2 className={'subHeaderDark mt-5 mb-2'}> 7. Real Estate Transactions</h2>
                    <p className={'textPrimary'}>
                        Any real estate transactions facilitated through our services are subject to separate agreements and disclosures, including purchase agreements, rental agreements, and property disclosures. These agreements will govern the terms and conditions of the specific real estate transaction.
                    </p>

                    <h2 className={'subHeaderDark mt-5 mb-2'}> 8. Disclaimer of Warranties</h2>
                    <p className={'textPrimary'}>
                        Our services are provided on an "as-is" and "as available" basis. We make no warranties, express or implied, regarding the reliability, accuracy, availability, or fitness for a particular purpose of our services.
                    </p>

                    <h2 className={'subHeaderDark mt-5 mb-2'}> 9. Limitation of Liability</h2>
                    <p className={'textPrimary'}>
                        Cosgrove shall not be liable for any indirect, consequential, incidental, special, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your use or inability to use our services.
                    </p>

                    <h2 className={'subHeaderDark mt-5 mb-2'}> 10. Termination</h2>
                    <p className={'textPrimary'}>
                        We reserve the right to terminate or suspend your access to our services at our sole discretion, without notice, for any reason, including if you violate these Terms of Service.
                    </p>

                    <h2 className={'subHeaderDark mt-5 mb-2'}> 11. Governing Law</h2>
                    <p className={'textPrimary'}>
                        YThese Terms of Service shall be governed by and construed in accordance with the laws of The Federal Republic of Nigeria, without regard to its conflict of law principles.
                    </p>

                    <h2 className={'subHeaderDark mt-5 mb-2'}> 12. Contact Information</h2>
                    <p className={'textPrimary'}>
                        If you have any questions or concerns regarding these Terms of Service, please contact us at info@cosgroveafrica.com
                    </p>

                    <h2 className={'subHeaderDark mt-5 mb-2'}> 13. Changes to Terms of Service</h2>
                    <p className={'textPrimary'}>
                        Cosgrove reserves the right to update and modify these Terms of Service at any time.
                    </p>

                    <br/>
                    <p className={'textPrimary mb-5'}>
                        By using our services, you acknowledge that you have read, understood, and agree to the terms of these Terms of Service.
                    </p>


                </div>
            </Container>
            <Footer/>
        </div>
        // <Footer
    );
}
