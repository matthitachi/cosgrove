// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Parallax } from "react-parallax";

export default function () {
    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <section className={styles.parallaxSection} data-aos="fade-up">
            <div className={styles.parallaxCtx}>
                <Parallax
                    bgImage={"assets/images/parallax.jpeg"}
                    bgImageAlt="the cat"
                    strength={200}
                    className={styles.parallaxElement}
                    contentClassName={styles.parallaxContent}
                >
                    <h2 className='headerWhite'>
                        The <b>Industry Leader</b> in Smart Home Innovation in
                        Africa
                    </h2>
                    <div className={'subHeader'}>-The Sunday Times</div>
                </Parallax>
            </div>
        </section>
    );
}
