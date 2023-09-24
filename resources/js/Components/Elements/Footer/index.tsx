import {
    Button,
    Col,
    Container,
    Nav,
    Navbar,
    NavDropdown,
    Row,
} from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
import {Link} from "@inertiajs/inertia-react";

export default function () {
    interface SocialItemProp {
        name: string;
        image: string;
        link: string;
        alt?: string;
    }

    function SocialItem({ image, link, alt }) {
        return (
            <a href={link} target={"_blank"} className={styles.socialItem}>
                <img src={image} alt={alt} />
            </a>
        );
    }
    const socialBasePath = "/assets/images/socials/";
    const socialItemList: SocialItemProp[] = [
        // {
        //     name: "WhatsApp",
        //     image: socialBasePath + "whatsapp.png",
        //     link: "https://wa.me/+2349060001552",
        //     alt: "",
        // },
        {
            name: "FaceBook",
            image: socialBasePath + "facebook.png",
            link: "https://web.facebook.com/cosgroveafrica",
            alt: "",
        },
        {
            name: "Instagram",
            image: socialBasePath + "instagram.png",
            link: "https://www.instagram.com/cosgroveafrica ",
            alt: "",
        },
        {
            name: "Twitter",
            image: socialBasePath + "x.png",
            link: "https://twitter.com/cosgroveafrica",
            alt: "",
        },
        {
            name: "Threads",
            image: socialBasePath + "thread.png",
            link: "https://www.threads.net/@cosgroveafrica",
            alt: "",
        },
        {
            name: "Youtube",
            image: socialBasePath + "youtube.png",
            link: "https://www.youtube.com/@CosgroveAfrica",
            alt: "",
        },
        {
            name: "LinkedIn",
            image: socialBasePath + "linkedin.png",
            link: "https://www.linkedin.com/company/cosgroveafrica",
            alt: "",
        },
    ];
    return (
        <section className={styles.footer}>
            <Row>
                <Col sm={12} md={4} className={styles.footerInTouch}>
                    <h2 className={`headerDark mb-25`}>Get In Touch</h2>
                    <p className={"textDark mb-25"}>
                        Ready to step into the world of Cosgrove excellence? Reach out now to start your extraordinary real estate experience.
                    </p>
                    <form>
                        <input
                            placeholder={"Name"}
                            className={styles.formItem}
                        />
                        <input
                            placeholder={"Email"}
                            className={styles.formItem}
                        />
                        <input
                            placeholder={"Phone"}
                            className={styles.formItem}
                        />
                        <textarea
                            placeholder={"Type a message..."}
                            className={styles.formItem}
                        />

                        <button>Submit</button>
                    </form>
                </Col>
                <Col sm={12} md={4} className={styles.footerContactUs}>
                    <Row>
                        <Col xs={6} md={12}>
                            <h5 className={`headerDark`}>Call Us</h5>
                            <ul>
                                <li className={`textDark mb-1`}>
                                    <a href={'tel:+2349060001552'}>+234906 000 1552</a>
                                </li>
                                <li className={`textDark mb-1`}>
                                    <a href={'tel:+2349060001553'}>+234906 000 1553</a>
                                </li>
                            </ul>
                            <h5 className={`headerDark`}>Write Us</h5>
                            <ul>
                                <li className={`textDark`}>
                                    <a href={'mail:info@cosgroveafrica.com'}>info@cosgroveafrica.com</a>
                                </li>
                            </ul>
                        </Col>
                        <Col xs={6} md={12}>
                            <h5 className={`headerDark`}>Visit Us</h5>
                            <ul>
                                <li className={`textDark`}>
                                    <a href={'https://goo.gl/maps/TPhMKJvJRiVSMSRD9'}>4th Floor, Mukhtar El Yakub Building
                                    Zakariyya Maimalari Street, Central Business
                                        District Abuja. FCT 900211 Nigeria</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
                <Col sm={12} md={4}>
                    <h5 className={`headerDark  mb-5`}>Quick Links</h5>
                    <Row>
                        <Col xs={6}>
                            <ul>
                                <li className={`textDark mb-4`}> <Link href={'/'}>Home</Link></li>
                                <li className={`textDark mb-4`}><Link href={'/about'}>About</Link></li>
                                <li className={`textDark mb-4`}><Link href={'/project-homes'}>Our Homes</Link></li>
                                <li className={`textDark mb-4`}><Link href={'/projects'}>Projects</Link></li>
                                <li className={`textDark mb-4`}><Link href={'/contact'}>Contact</Link></li>
                            </ul>
                        </Col>
                        <Col xs={6}>
                            <ul>
                                <li className={`textDark mb-4`}><Link href={'/'}>Blog</Link></li>
                                <li className={`textDark mb-4`}><Link href={'/'}>Careers</Link></li>
                                <li className={`textDark mb-4`}>
                                    <Link href={'/agent-registration'}>Agent Registration</Link>
                                </li>
                                <li className={`textDark mb-4`}>
                                    <Link href={'/privacy'}>Term of service</Link>
                                </li>
                                <li className={`textDark mb-4`}>
                                    <Link href={'/privacy'}>Privacy policy</Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div className={styles.footerBottom}>
                <div className={styles.footerSocials}>
                    {socialItemList.map((item, index) => (
                        <SocialItem
                            key={index}
                            image={item.image}
                            alt={item.alt}
                            link={item.link}
                        />
                    ))}
                </div>

                <hr />

                <div className={styles.footerCopyRight}>
                    <div className={"textDark text-center text-md-start"}>
                        ©2023 Cosgrove Investment Limited. All rights reserved.
                    </div>
                    <div
                        className={`textDark text-center text-md-end ${styles.developed}`}
                    >
                        Designed & Developed by FolkMotion
                    </div>
                </div>
            </div>
        </section>
    );
}
