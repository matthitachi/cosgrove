import {
    Accordion,
    Button,
    Col,
    Container,
    Nav,
    Navbar,
    NavDropdown,
} from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import * as React from "react";
// @ts-ignore
import { ReactComponent as ArrowRight } from "/public/assets/svg/arrow-right-2.svg";

export default function () {
    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <section className={styles.FeaturedHomeSection} data-aos="fade-up">
            <div className={`curvedTop ${styles.topCurve}`} />
            <Container className={styles.featuredCtx}>
                <h4 className={`subHeader mb-25`}>Our Homes</h4>
                <h2 className={`headerDark`}>What People Are Saying</h2>

                <ul className={styles.featuredList}>
                    <li className={styles.featuredListItem}>
                        <div className={styles.info}>
                            <div className={styles.listDate}>12|07|23</div>
                            <div className={styles.listTitle}>
                                Cosgrove boosts housing market with Abuja estate
                                project - The Guardian
                            </div>
                        </div>
                        <ArrowRight />
                    </li>
                    <li className={styles.featuredListItem}>
                        <div className={styles.info}>
                            <div className={styles.listDate}>12|07|23</div>
                            <div className={styles.listTitle}>
                                Cosgrove boosts housing market with Abuja estate
                                project - The Guardian
                            </div>
                        </div>
                        <ArrowRight />
                    </li>
                    <li className={styles.featuredListItem}>
                        <div className={styles.info}>
                            <div className={styles.listDate}>12|07|23</div>
                            <div className={styles.listTitle}>
                                Cosgrove boosts housing market with Abuja estate
                                project - The Guardian
                            </div>
                        </div>
                        <ArrowRight />
                    </li>
                    <li className={styles.featuredListItem}>
                        <div className={styles.info}>
                            <div className={styles.listDate}>12|07|23</div>
                            <div className={styles.listTitle}>
                                Cosgrove boosts housing market with Abuja estate
                                project - The Guardian
                            </div>
                        </div>
                        <ArrowRight />
                    </li>
                    <li className={styles.featuredListItem}>
                        <div className={styles.info}>
                            <div className={styles.listDate}>12|07|23</div>
                            <div className={styles.listTitle}>
                                Cosgrove boosts housing market with Abuja estate
                                project - The Guardian
                            </div>
                        </div>
                        <ArrowRight />
                    </li>
                </ul>
            </Container>
        </section>
    );
}
