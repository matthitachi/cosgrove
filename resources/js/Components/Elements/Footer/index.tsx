import {Button, Col, Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";

export default function () {
    interface SocialItemProp {
        name: string;
        image: string;
        link: string;
        alt?: string;
    }

    function SocialItem({image, link, alt}) {
        return (<a href={link} target={'_blank'} className={styles.socialItem}>
            <img src={image} alt={alt}/>
        </a>);
    }
    const socialBasePath = '/assets/images/socials/';
    const socialItemList: SocialItemProp[] = [
        {
            name: 'WhatsApp',
            image: socialBasePath + 'whatsapp.png',
            link: '',
            alt: '',
        },
        {
            name: 'FaceBook',
            image: socialBasePath + 'facebook.png',
            link: '',
            alt: '',
        },
        {
            name: 'Instagram',
            image: socialBasePath + 'instagram.png',
            link: '',
            alt: '',
        },
        {
            name: 'Twitter',
            image: socialBasePath + 'twitter.png',
            link: '',
            alt: '',
        },
        {
            name: 'Threads',
            image: socialBasePath + 'threads.png',
            link: '',
            alt: '',
        },
        {
            name: 'Youtube',
            image: socialBasePath + 'youtube.png',
            link: '',
            alt: '',
        },
        {
            name: 'LinkedIn',
            image: socialBasePath + 'linkedin.png',
            link: '',
            alt: '',
        },
    ];
    return (
      <section className={styles.footer}>
          <Row >
              <Col sm={12} md={4} className={styles.footerInTouch}>
                  <h2 className={`headerDark mb-25`}>Get In Touch</h2>
                  <p className={'textDark mb-25'}>Vitae faucibus ipsum quis pellentesque tincidunt varius diam lectus commodo. Faucibus non proin
                      nam tortor ut imperdiet dui in libero.</p>
                  <form>
                  <input placeholder={'Name'} className={styles.formItem}/>
                  <input placeholder={'Email'} className={styles.formItem}/>
                  <input placeholder={'Phone'} className={styles.formItem}/>
                  <textarea placeholder={'Type a message...'} className={styles.formItem}/>

                  <button>Submit</button>
                  </form>
              </Col>
              <Col sm={12} md={4}  className={styles.footerContactUs}>
                 <Row>
                     <Col xs={6} md={12}>
                         <h5 className={`headerDark`}>Call Us</h5>
                         <ul>
                             <li className={`textDark mb-1`}>+234906 000 1552</li>
                             <li className={`textDark mb-1`}>+234906 000 1552</li>
                         </ul>
                         <h5 className={`headerDark`}>Write Us</h5>
                         <ul>
                             <li className={`textDark`}>info@cosgroveafrica.com</li>
                         </ul>
                     </Col>
                     <Col xs={6} md={12}>
                         <h5 className={`headerDark`}>Visit Us</h5>
                         <ul>
                             <li className={`textDark`}>4th Floor, Mukhtar El Yakub Building Zakariyya Maimalari Street,
                                 Central Business District Abuja. FCT 900211 Nigeria</li>
                         </ul>
                     </Col>

                 </Row>

              </Col>
              <Col sm={12} md={4}>

                  <h5 className={`headerDark  mb-5`}>Quick Links</h5>
                  <Row>
                      <Col xs={6} >
                          <ul>
                              <li className={`textDark mb-4`}> Home</li>
                              <li className={`textDark mb-4`}>About</li>
                              <li className={`textDark mb-4`}>Our Homes</li>
                              <li className={`textDark mb-4`}>Projects</li>
                              <li className={`textDark mb-4`}>Contact</li>
                          </ul>

                      </Col>
                      <Col xs={6}  >
                          <ul>
                              <li className={`textDark mb-4`}>Blog</li>
                              <li className={`textDark mb-4`}>Careers</li>
                              <li className={`textDark mb-4`}>Agent Registration</li>
                              <li className={`textDark mb-4`}>Term of service</li>
                              <li className={`textDark mb-4`}>Privacy policy</li>
                          </ul>

                      </Col>
                  </Row>

              </Col>
          </Row>
          <div className={styles.footerBottom}>

              <div className={styles.footerSocials}>
                  {socialItemList.map((item, index) => (
                      <SocialItem image={item.image} alt={item.alt} link={item.link}/>
                  ))}
              </div>

              <hr/>

              <div className={styles.footerCopyRight}>
                  <div className={'textDark text-center text-md-start'}>
                      ©2023 Cosgrove Real Estate Limited. All rights reserved.
                  </div>
                  <div className={`textDark text-center text-md-end ${styles.developed}`}>
                      Designed & Developed by FolkMotion
                  </div>
              </div>
          </div>
      </section>
    );
}
