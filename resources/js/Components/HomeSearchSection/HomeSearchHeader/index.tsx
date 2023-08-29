import {Col, Container, Row} from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import * as React from "react";
// @ts-ignore
import closeSvg from "/public/assets/svg/close.svg";
// @ts-ignore
import searchSvg from "/public/assets/svg/search.svg";
// @ts-ignore
import Download from "/public/assets/images/icons/downloadnew.png";
import HouseTypes from "../../ProjectDetailsPage/HouseTypes";
import {projects, houseTypes, houseTypeItemProps, brochures, brochuresItemProp} from "../../../Data/data";
import {ProjectItemProp} from "../../Elements/ProjectItem";
import OtherProjectTypes from "../../ProjectDetailsPage/OtherProjectTypes";

interface searchSectionProps {
    search: string
}

export default function ({search}: searchSectionProps) {
    React.useEffect(() => {
        AOS.init({duration: 2000});
        if (search != null && search.length > 0) {
            console.log(searchCosgrove(search));
        }
    }, []);
    const [searchInput, setSearchInput] = React.useState(search);
    const [projectSearch, setProjectSearch] = React.useState<ProjectItemProp[]>([]);
    const [houseSearch, setHouseSearch] = React.useState<houseTypeItemProps[]>([]);
    const [brochureSearch, setBrochureSearch] = React.useState<brochuresItemProp[]>([]);


    const [activeButtonSlug, setActiveButtonSlug] = React.useState('all');
    const buttonLabels = [
        {
            name: "Show All",
            slug: 'all'
        },
        {
            name: "Projects",
            slug: 'projects'
        },
        {
            name: "House Types",
            slug: 'houses'
        },
        {
            name: "Brochures",
            slug: 'brochures'
        },
        // {
        //     name: " Blog ",
        //     slug: 'all'
        // },
        // {
        //     name: "Press",
        //     slug: 'all'
        // },
    ];

    const handleButtonClick = (index) => {
        setActiveButtonSlug(index);
    };

    const back = {
        background: "#FBBD00",
        color: "#000"
    };

    const searchCosgrove = (val) => {
        function deepSearch(object, term) {
            if (typeof object === 'string') {
                // If the value is a string, perform the search
                return object.toLowerCase().includes(term.toLowerCase());
            } else if (Array.isArray(object)) {
                // If the value is an array, recursively search each item in the array
                return object.some(item => deepSearch(item, term));
            } else if (typeof object === 'object') {
                // If the value is an object, recursively search its properties
                return Object.values(object).some(value => deepSearch(value, term));
            }
            // For other types of values, return false
            return false;
        }

        setProjectSearch(projects.filter(project => deepSearch(project, val)));
        setHouseSearch(houseTypes.filter(project => deepSearch(project, val)));
        setBrochureSearch(brochures.filter(project => deepSearch(project, val)));

    };

    return (
        <section className={styles.searchHeader}>
            <div className={styles.searchBar}>
                <form action="">
                    <input type="text" placeholder={"4 Bedroom"} value={searchInput} onChange={(event) => {
                        setSearchInput(event.target.value);
                    }} onKeyDown={(evt) =>{

                        if (evt.key === 'Enter') {
                            evt.preventDefault();
                            searchCosgrove(searchInput)
                        }}} />
                    <img
                        src={searchSvg}
                        alt="Search SVG"
                        className={styles.searchSvg}
                    />
                    <img
                        src={closeSvg}
                        alt="Close SVG"
                        className={styles.searchClose}
                        onClick={() => {
                            setSearchInput('');
                        }}
                    />
                </form>
            </div>
            <Container>
                <Row className={styles.searchContent} data-aos="fade-up">
                    <Col sm={12} className={`mt-3 mb-3 ${styles.searchResult}`}>
                        <div>
                            <h4>Showing results for “{searchInput}”</h4>
                            {/*<p>1-15 of 15</p>*/}
                        </div>
                    </Col>
                    <Col sm={12}>
                        <div className={styles.dynamicButtonContainer}>
                            {buttonLabels.map((label, index) => (
                                <button
                                    key={index}
                                    className={`${styles.dynamicButton} `}
                                    style={
                                        label.slug === activeButtonSlug ? back : {}
                                    }
                                    onClick={() => handleButtonClick(label.slug)}
                                >
                                    {label.name}
                                </button>
                            ))}
                        </div>
                    </Col>
                </Row>
                {(activeButtonSlug == 'all' || activeButtonSlug == 'projects') && <div className={styles.searchHouse}>
                    <OtherProjectTypes headerContent={`Projects (${projectSearch.length} results)`}
                                       projects={projectSearch}/>
                </div>}

                {(activeButtonSlug == 'all' || activeButtonSlug == 'houses') &&
                <div className={styles.searchHouse}>
                    <HouseTypes headerContent={`House Types (${houseSearch.length} results)`} houseTypes={houseSearch}/>
                </div>
                }

                {(activeButtonSlug == 'all' || activeButtonSlug == 'brochures') && <Row className={styles.searchBrochure}>
                    <Col data-aos="fade-right">
                        <h4>{`Brochures (${brochureSearch.length} results)`}</h4>
                        {
                            brochureSearch.map((item, index) => (
                                <a href={item.link} key={index}>
                                    <div>
                                        <a href="">{item.name}.pdf</a>
                                        <span><img src={Download} alt=""/></span>
                                    </div>
                                </a>
                            ))
                        }


                    </Col>
                </Row>
                }
                {/*<Row*/}
                {/*    className={styles.searchBrochure}*/}
                {/*    style={{marginBottom: "2rem", padding: "1rem 0"}}*/}
                {/*>*/}
                {/*    <Col data-aos="fade-right">*/}
                {/*        Press (1 result)*/}
                {/*        <div>*/}
                {/*            <a href="">*/}
                {/*                Cosgrove Completes 4 Bedroom apartment complex*/}
                {/*                in Asokoro - ThisDay*/}
                {/*            </a>*/}
                {/*            <span>*/}
                {/*                <img src={Download} alt=""/>*/}
                {/*            </span>*/}
                {/*        </div>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
                {/*<Row>*/}
                {/*    <Col*/}
                {/*        className={styles.searchPagination}*/}
                {/*        data-aos="fade-left"*/}
                {/*    >*/}
                {/*        <div></div>*/}
                {/*        <div>*/}
                {/*            <div>*/}
                {/*                <button*/}
                {/*                    className={styles.pageBut}*/}
                {/*                    style={{ background: "#FBBD00" }}*/}
                {/*                >*/}
                {/*                    1*/}
                {/*                </button>*/}
                {/*                <button className={styles.pageBut}>2</button>*/}
                {/*                <button className={styles.pageBut}>3</button>*/}
                {/*                <button className={styles.pageBut}>4</button>*/}
                {/*                <button className={styles.pageBut}>5</button>*/}
                {/*            </div>*/}
                {/*            <button className={styles.nxt}>*/}
                {/*                Previous | Next*/}
                {/*            </button>*/}
                {/*        </div>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
            </Container>
        </section>
    );
}
