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
import OtherProjectTypes from "../../ProjectDetailsPage/OtherProjectTypes";
import { getAllProjectDetails, ApiProjectDetail, ApiHouseType, ApiProjectBrochure } from "../../../Services/cosgroveApiServices";
import { ProjectItemProp } from "../../Elements/ProjectItem";
import { houseTypeItemProps } from "../../../types/cms";
import { useState, useEffect } from "react";

interface searchSectionProps {
    search: string
}

interface BrochureResult {
    name: string;
    link: string;
}

function toProjectItemProp(p: ApiProjectDetail): ProjectItemProp {
    return {
        name: p.name,
        slug: p.slug,
        location: p.location,
        description: p.description || '',
        mainImg: p.thumbnail,
        detailsImg: p.hero_image,
        distFeature: [],
        galleryBasePath: '',
        gallery: [],
        showInHome: p.show_in_home,
        estateFeatures: [],
    };
}

function toHouseTypeItemProps(h: ApiHouseType): houseTypeItemProps {
    const parts: string[] = [];
    if (h.beds)  parts.push(`${h.beds} Bed${h.beds !== 1 ? 's' : ''}`);
    if (h.baths) parts.push(`${h.baths} Bath${h.baths !== 1 ? 's' : ''}`);
    if (h.area)  parts.push(h.area);
    return {
        img: h.thumbnail,
        name: h.name,
        desc: parts.join(' · ') || h.name,
        slug: h.slug,
        projectSlug: [],
        headerImg: h.hero_image,
        detailsImg: h.hero_image,
        moreDesc: '',
        galleryBasePath: '',
        gallery: (h.gallery ?? []).map(g => g.url),
        specs: [],
    };
}

export default function ({search}: searchSectionProps) {
    React.useEffect(() => { AOS.init({duration: 2000}); }, []);

    const [allProjects,   setAllProjects]   = useState<ProjectItemProp[]>([]);
    const [allHouseTypes, setAllHouseTypes] = useState<houseTypeItemProps[]>([]);
    const [allBrochures,  setAllBrochures]  = useState<BrochureResult[]>([]);
    const [dataReady,     setDataReady]     = useState(false);

    useEffect(() => {
        getAllProjectDetails().then(details => {
            setAllProjects(details.map(toProjectItemProp));
            setAllHouseTypes(details.flatMap(p => (p.house_types ?? []).map(toHouseTypeItemProps)));
            setAllBrochures(details.flatMap(p =>
                (p.brochures ?? []).map(b => ({ name: b.title, link: b.brochure_url }))
            ));
            setDataReady(true);
        }).catch(() => setDataReady(true));
    }, []);

    const [searchInput,    setSearchInput]    = React.useState(search ?? '');
    const [projectSearch,  setProjectSearch]  = React.useState<ProjectItemProp[]>([]);
    const [houseSearch,    setHouseSearch]    = React.useState<houseTypeItemProps[]>([]);
    const [brochureSearch, setBrochureSearch] = React.useState<BrochureResult[]>([]);
    const [activeButtonSlug, setActiveButtonSlug] = React.useState('all');

    useEffect(() => {
        if (dataReady && search != null && search.length > 0) {
            searchCosgrove(search);
        }
    }, [dataReady]);

    const buttonLabels = [
        { name: "Show All",    slug: 'all'       },
        { name: "Projects",    slug: 'projects'  },
        { name: "House Types", slug: 'houses'    },
        { name: "Brochures",   slug: 'brochures' },
    ];

    const back = { background: "#FBBD00", color: "#000" };

    function deepSearch(object: unknown, term: string): boolean {
        if (typeof object === 'string') return object.toLowerCase().includes(term.toLowerCase());
        if (Array.isArray(object)) return object.some(item => deepSearch(item, term));
        if (typeof object === 'object' && object !== null) {
            return Object.values(object).some(value => deepSearch(value, term));
        }
        return false;
    }

    const searchCosgrove = (val: string) => {
        setProjectSearch(allProjects.filter(p => deepSearch(p, val)));
        setHouseSearch(allHouseTypes.filter(h => deepSearch(h, val)));
        setBrochureSearch(allBrochures.filter(b => deepSearch(b, val)));
    };

    const disabledStyle = !dataReady ? { opacity: 0.5, pointerEvents: 'none' as const } : {};

    return (
        <section className={styles.searchHeader}>
            <div className={styles.searchBar} style={disabledStyle}>
                <form action="">
                    <input
                        type="text"
                        placeholder={"4 Bedroom"}
                        value={searchInput}
                        onChange={(event) => setSearchInput(event.target.value)}
                        onKeyDown={(evt) => {
                            if (evt.key === 'Enter') {
                                evt.preventDefault();
                                searchCosgrove(searchInput);
                            }
                        }}
                    />
                    <img src={searchSvg} alt="Cosgrove Real Estate - Search" className={styles.searchSvg} />
                    <img
                        src={closeSvg}
                        alt="Cosgrove Real Estate - Clear"
                        className={styles.searchClose}
                        onClick={() => setSearchInput('')}
                    />
                </form>
            </div>
            <Container>
                <Row className={styles.searchContent} data-aos="fade-up">
                    <Col sm={12} className={`mt-3 mb-3 ${styles.searchResult}`}>
                        <div>
                            <h4>Showing results for "{searchInput}"</h4>
                        </div>
                    </Col>
                    <Col sm={12}>
                        <div className={styles.dynamicButtonContainer} style={disabledStyle}>
                            {buttonLabels.map((label, index) => (
                                <button
                                    key={index}
                                    className={`${styles.dynamicButton}`}
                                    style={label.slug === activeButtonSlug ? back : {}}
                                    onClick={() => setActiveButtonSlug(label.slug)}
                                >
                                    {label.name}
                                </button>
                            ))}
                        </div>
                    </Col>
                </Row>

                {(activeButtonSlug === 'all' || activeButtonSlug === 'projects') && (
                    <div className={styles.searchHouse}>
                        <OtherProjectTypes
                            headerContent={`Projects (${projectSearch.length} results)`}
                            projects={projectSearch}
                        />
                    </div>
                )}

                {(activeButtonSlug === 'all' || activeButtonSlug === 'houses') && (
                    <div className={styles.searchHouse}>
                        <HouseTypes
                            headerContent={`House Types (${houseSearch.length} results)`}
                            houseTypes={houseSearch}
                        />
                    </div>
                )}

                {(activeButtonSlug === 'all' || activeButtonSlug === 'brochures') && (
                    <Row className={styles.searchBrochure}>
                        <Col data-aos="fade-right">
                            <h4>{`Brochures (${brochureSearch.length} results)`}</h4>
                            {brochureSearch.map((item, index) => (
                                <a href={item.link} key={index}>
                                    <div>
                                        <a href={item.link}>{item.name}.pdf</a>
                                        <span><img src={Download} alt="Cosgrove Real Estate - Brochures"/></span>
                                    </div>
                                </a>
                            ))}
                        </Col>
                    </Row>
                )}
            </Container>
        </section>
    );
}
