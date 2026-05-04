// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Parallax } from "react-parallax";
import { ApiPageSection } from "../../../types/cms";

interface Props {
    cmsSection?: ApiPageSection;
}

export default function ({ cmsSection }: Props) {
    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const heading = (cmsSection?.data?.heading as string) ?? "The Industry Leader in Smart Home Innovation in Africa";
    const attribution = (cmsSection?.data?.attribution as string) ?? "-The Sunday Times";
    const bgImage = cmsSection?.image_url || "assets/images/DJI_0540.JPG";

    return (
        <section className={styles.parallaxSection} data-aos="fade-up">
            <div className={styles.parallaxCtx}>
                <Parallax
                    bgImage={bgImage}
                    bgImageAlt="Cosgrove Real Estate - Parallax"
                    strength={200}
                    className={styles.parallaxElement}
                    contentClassName={styles.parallaxContent}
                >
                    <h2 className='headerWhite'>
                        {heading}
                    </h2>
                    <div className={'subHeader'}>{attribution}</div>
                </Parallax>
            </div>
        </section>
    );
}
