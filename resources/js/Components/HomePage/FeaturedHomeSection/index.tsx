import { Container } from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import * as React from "react";
// @ts-ignore
import arrowRightSvg, { ReactComponent as ArrowRight } from "/public/assets/svg/arrow-right-2.svg";
// @ts-ignore
import arrowRightSvgR from "/public/assets/svg/arrow-right.svg";
import {Link} from "@inertiajs/react";
import { getPressArticles, ApiPressArticle } from "../../../Services/cosgroveApiServices";
import { useCmsData } from "../../../Hooks/useCmsData";

interface FeaturedListItemProp {
    date: string;
    title: string;
    link: string;
}

function toFeaturedItem(p: ApiPressArticle): FeaturedListItemProp {
    return {
        date: p.published_date,
        title: `${p.headline} - ${p.publication}`,
        link: p.external_url || '',
    };
}

interface listProp{
    full?: boolean
}
export default function ({full = true}: listProp) {
    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const { data: articles } = useCmsData(getPressArticles);
    const list: FeaturedListItemProp[] = (articles ?? []).map(toFeaturedItem);

    function FeaturedListItem({date, title, link}:FeaturedListItemProp) {
        return (
            <li className={styles.featuredListItem}>
                <a href={link} target={'_blank'}>
                    <div className={styles.info}>
                        <div className={`textPrimary ${styles.listTitle}`}>
                            {title}
                        </div>
                    </div>
                    <ArrowRight />
                </a>
            </li>
        );
    }

    return (
        <section className={styles.FeaturedHomeSection} data-aos="fade-up">
            <div className={`curvedTop ${styles.topCurve}`} />
            <Container className={styles.featuredCtx}>
                <h4 className={`subHeader mb-25`}>Press</h4>
                <h2 className={`headerDark`}>Featured</h2>

                <ul className={styles.featuredList}>
                    {
                        (full ? list.slice(0, 5) : list).map((item, key) =>
                            <FeaturedListItem date={item.date} title={item.title} link={item.link} key={key}/>)
                    }
                </ul>

                {full && <div className={`text-center ${styles.seeAll} mb-3`} >
                    <Link className={"text"} href={'/press'}>
                        See all
                        <img
                            className={styles.arrowRightSvg}
                            src={arrowRightSvgR}
                            alt="Cosgrove Real Estate - See All"
                        />
                    </Link>
                </div>}
            </Container>

        </section>
    );
}
