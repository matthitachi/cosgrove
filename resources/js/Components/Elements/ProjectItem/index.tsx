
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
// @ts-ignore
import  { ReactComponent as ArrowRight2Svg} from "/public/assets/svg/arrow-right-2.svg";
// @ts-ignore
import arrowRightSvg from "/public/assets/svg/arrow-right.svg";
// @ts-ignore
import { ReactComponent as MapPinSvg} from "/public/assets/svg/map-pin.svg";
import {RecordItemProp} from "../RecordList";

export interface ProjectItemProp {
    name: string;
    slug: string;
    location: string;
    description: string;
    mainImg: string;
    detailsImg: string;
    distFeature: RecordItemProp[],
    galleryBasePath: string;
    gallery: string[];
    showInHome?: boolean

}

export default function (props:ProjectItemProp) {
    return (<div className={styles.projectItem}
                 style={{background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%), url("${props.mainImg}")`}}>
        <div className={styles.projectsInner}>
            <h2 className={'headerWhite'}>{props.name}</h2>
            <div className={styles.location}>
                {/*<img  className={styles.mapPinSvg} src={mapPinSvg} alt="Your SVG" />*/}
                <MapPinSvg/>
                <b>{props.location}</b>
            </div>

            <p className={'textDark'}>
               {props.description.substring(0, 200)} ...
            </p>
            <a href={`/projects/${props.slug}`}>View Project <ArrowRight2Svg/></a>

        </div>

    </div>)

}


