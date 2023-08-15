
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
// @ts-ignore
import  { ReactComponent as ArrowRight2Svg} from "/public/assets/svg/arrow-right-2.svg";
// @ts-ignore
import arrowRightSvg from "/public/assets/svg/arrow-right.svg";
// @ts-ignore
import { ReactComponent as MapPinSvg} from "/public/assets/svg/map-pin.svg";

export default function () {
    return (<div className={styles.projectItem}
                 style={{background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%), url("/assets/images/projects/wuye.png")'}}>
        <div className={styles.projectsInner}>
            <h2>Cosgrove Smart Estate, Guzape</h2>
            <div className={styles.location}>
                {/*<img  className={styles.mapPinSvg} src={mapPinSvg} alt="Your SVG" />*/}
                <MapPinSvg/>
                <b>Mabushi</b>
            </div>

            <p>
                Lorem ipsum dolor sit amet consetur. Turpis mollis viverra sollicitud esque dictumst et orci.
                Lorem ipsum dolor sit amet consetur. Turpis mollis viverra sollicitud esque dictumst et orci.
                Lorem ipsum dolor sit amet consetur. Turpis mollis viverra sollicitud esque dictumst et orci.
            </p>
            <a href={''}>View Project <ArrowRight2Svg/></a>

        </div>

    </div>)

}


