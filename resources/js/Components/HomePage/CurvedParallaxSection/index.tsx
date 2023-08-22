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
                    bgImage={"assets/images/parallax.png"}
                    bgImageAlt="the cat"
                    strength={200}
                    className={styles.parallaxElement}
                    contentClassName={styles.parallaxContent}
                >
                    <h2>
                        The <b>Industry Leader</b> in Smart Home Innovation in
                        Africa
                    </h2>
                    <div>-The Sunday Times</div>
                </Parallax>
            </div>
        </section>
    );
}
