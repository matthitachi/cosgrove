import {
    Col,
    Row,
} from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
import {Link} from "@inertiajs/inertia-react";
import {useState} from "react";
import cosgroveApiServices, {
    getContactInfo,
    getSocialLinks,
    ApiContactInfo,
    ApiSocialLink,
} from "../../../Services/cosgroveApiServices";
import {toast} from "react-toastify";
import {useGoogleReCaptcha} from "react-google-recaptcha-v3";
import { useCmsData } from "../../../Hooks/useCmsData";

interface Form {
    name: string;
    email: string;
    phone: string;
    message: string;
    salutation?: string
}
interface Err {
    name: string;
    email: string;
}

const socialBasePath = "/assets/images/socials/";
const platformImageMap: Record<string, string> = {
    facebook:  socialBasePath + "facebook.png",
    instagram: socialBasePath + "instagram.png",
    twitter:   socialBasePath + "x.png",
    threads:   socialBasePath + "thread.png",
    youtube:   socialBasePath + "youtube.png",
    linkedin:  socialBasePath + "linkedin.png",
};
const platformAltMap: Record<string, string> = {
    facebook:  "Cosgrove Real Estate - Facebook",
    instagram: "Cosgrove Real Estate - Instagram",
    twitter:   "Cosgrove Real Estate - Twitter",
    threads:   "Cosgrove Real Estate - Threads",
    youtube:   "Cosgrove Real Estate - YouTube",
    linkedin:  "Cosgrove Real Estate - LinkedIn",
};

function SocialItem({ link, platform }: { link: string; platform: string }) {
    const key   = platform.toLowerCase();
    const image = platformImageMap[key] ?? socialBasePath + "facebook.png";
    const alt   = platformAltMap[key]   ?? platform;
    return (
        <a href={link} target={"_blank"} rel="noreferrer" className={styles.socialItem}>
            <img src={image} alt={alt} />
        </a>
    );
}

export default function () {
    const [formVal, setFormVal] = useState<Form>({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [errors, setErrors] = useState<Partial<Err>>({});

    const { data: contactInfo } = useCmsData(getContactInfo);
    const { data: socialLinks } = useCmsData(getSocialLinks);

    const phone1   = contactInfo?.phone_1  ?? '';
    const phone2   = contactInfo?.phone_2  ?? '';
    const email    = contactInfo?.email    ?? '';
    const address  = contactInfo?.address  ?? '';
    const mapsUrl  = contactInfo?.maps_url ?? '#';

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown }>) => {
        const {name, value} = event.target as { name: string; value: string };
        setFormVal((prevValues: Form) => ({
            ...prevValues,
            [name as keyof Form]: value,
        }));
    };
    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!executeRecaptcha) {
            console.error('reCAPTCHA is not available.');
            return;
        }
        const validateErr: Partial<Err> = {};

        if (!formVal.name) {
            validateErr.name = 'Name is required';
        }
        if (!formVal.email) {
            validateErr.email = 'email is required';
        }
        if (!validateEmail(formVal.email)) {
            validateErr.email = 'Enter a valid email';
        }

        setErrors(validateErr);
        if (Object.keys(validateErr).length > 0) {
            toast.info("Please fill all required fields", { position: "top-right" });
            return;
        }

        try {
            const token = await executeRecaptcha('CosgroveContactUs');
            let formData: any = formVal;
            formData['token'] = token;

            let response = await (new cosgroveApiServices()).sendContactDetails(formData);
            if (response.status == true) {
                setFormVal({ name: '', email: '', phone: '', message: '' });
                toast.success("Message Sent Successfully!", { position: "top-right" });
            } else {
                toast.error("Message Failed to send!", { position: "top-right" });
            }
        } catch (error) {
            console.error('Error during reCAPTCHA verification:', error);
        }
    };

    return (
        <section className={styles.footer}>
            <Row>
                <Col sm={12} md={4} className={styles.footerInTouch}>
                    <h2 className={`headerDark mb-25`}>Get In Touch</h2>
                    <p className={"textDark mb-25"}>
                        Ready to step into the world of Cosgrove excellence? Reach out now to start your extraordinary real estate experience.
                    </p>

                    <div>{
                        Object.keys(errors).length > 0 &&
                        <div className={`text-center mb-3`}>
                            {Object.keys(errors).map((item) => (
                                <div key={item}>{errors[item]}</div>
                            ))}
                        </div>}
                    </div>

                    <input
                        placeholder={"salutation"}
                        hidden={true}
                        className={styles.formItem}
                        value={formVal.salutation} onChange={handleChange} name={'salutation'}
                    />
                    <input
                        placeholder={"Name"}
                        className={styles.formItem}
                        value={formVal.name} onChange={handleChange} name={'name'}
                    />
                    <input
                        placeholder={"Email"}
                        className={styles.formItem}
                        value={formVal.email} onChange={handleChange} name={'email'}
                    />
                    <input
                        placeholder={"Phone"}
                        className={styles.formItem}
                        value={formVal.phone} onChange={handleChange} name={'phone'}
                    />
                    <textarea
                        placeholder={"Type a message..."}
                        className={styles.formItem}
                        value={formVal.message} onChange={handleChange} name={'message'}
                    />

                    <button onClick={handleSubmit}>Submit</button>
                </Col>
                <Col sm={12} md={4} className={styles.footerContactUs}>
                    <Row>
                        <Col xs={6} md={12}>
                            <h5 className={`headerDark`}>Call Us</h5>
                            <ul>
                                {phone1 && (
                                    <li className={`textDark mb-1`}>
                                        <a href={`tel:${phone1}`}>{phone1}</a>
                                    </li>
                                )}
                                {phone2 && (
                                    <li className={`textDark mb-1`}>
                                        <a href={`tel:${phone2}`}>{phone2}</a>
                                    </li>
                                )}
                            </ul>
                            <h5 className={`headerDark`}>Write Us</h5>
                            <ul>
                                <li className={`textDark`}>
                                    <a style={{wordBreak:'break-all'}} href={`mailto:${email}`}>{email}</a>
                                </li>
                            </ul>
                        </Col>
                        <Col xs={6} md={12}>
                            <h5 className={`headerDark`}>Visit Us</h5>
                            <ul>
                                <li className={`textDark`}>
                                    <a href={mapsUrl}>{address}</a>
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
                                <li className={`textDark mb-4`}><Link href={'/'}>Home</Link></li>
                                <li className={`textDark mb-4`}><Link href={'/about'}>About</Link></li>
                                <li className={`textDark mb-4`}><Link href={'/project-homes'}>Our Homes</Link></li>
                                <li className={`textDark mb-4`}><Link href={'/projects'}>Projects</Link></li>
                                <li className={`textDark mb-4`}><Link href={'/contact'}>Contact</Link></li>
                            </ul>
                        </Col>
                        <Col xs={6}>
                            <ul>
                                <li className={`textDark mb-4`}><Link href={'/'}>Blog</Link></li>
                                <li className={`textDark mb-4`}><Link href={'/careers'}>Careers</Link></li>
                                <li className={`textDark mb-4`}>
                                    <Link href={'/agent-registration'}>Agent Registration</Link>
                                </li>
                                <li className={`textDark mb-4`}>
                                    <Link href={'/terms-of-service'}>Term of service</Link>
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
                    {(socialLinks ?? []).map((item: ApiSocialLink) => (
                        <SocialItem key={item.id} link={item.url} platform={item.platform} />
                    ))}
                </div>

                <hr />

                <div className={styles.footerCopyRight}>
                    <div className={"textDark text-center text-md-start"}>
                        ©2024 Cosgrove. All rights reserved.
                    </div>
                    <div className={`textDark text-center text-md-end ${styles.developed}`}>
                        {/*Designed & Developed by FolkMotion*/}
                    </div>
                </div>
            </div>
        </section>
    );
}
