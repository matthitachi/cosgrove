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

    interface FeaturedListItemProp{
        date: string;
        title: string;
    }
    function FeaturedListItem({date, title}:FeaturedListItemProp) {
        return (
            <li className={styles.featuredListItem}>
                <div className={styles.info}>
                    <div className={`textPrimary ${styles.listDate}`}>{date}</div>
                    <div className={`textPrimary ${styles.listTitle}`}>
                        {title}
                    </div>
                </div>
                <ArrowRight />
            </li>
        );
    }

    const featuredList : FeaturedListItemProp[] = [

        {
            date: '12|07|23',
            title: 'Cosgrove boosts housing market with Abuja estate project - The Guardian'
        },
        {
            date: '12|07|23',
            title: 'Relief as firm donates accommodation to Abuja displaced orphans - The Nation'
        },
        {
            date: '12|07|23',
            title: 'Cosgrove gets NITP, COREN, commendations for CSR - This Day'
        },
        {
            date: '12|07|23',
            title: 'AI in home security - The Business Year'
        },
    ];

    return (
        <section className={styles.FeaturedHomeSection} data-aos="fade-up">
            <div className={`curvedTop ${styles.topCurve}`} />
            <Container className={styles.featuredCtx}>
                <h4 className={`subHeader mb-25`}>Our Homes</h4>
                <h2 className={`headerDark`}>What People Are Saying</h2>

                <ul className={styles.featuredList}>
                    {
                        featuredList.map((item, key) =>
                            <FeaturedListItem date={item.date} title={item.title} key={key}/>)
                    }
                </ul>
            </Container>
        </section>
    );
}
