import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import * as React from "react";
import Gallery, { galleryImageProp } from "../../Gallery/index";

interface GalleryHeadProps {
    headerContent: string;
}

export default function ({ headerContent }: GalleryHeadProps) {
    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const baseImgPath = "/assets/images/gallery/";
    const images: galleryImageProp[] = [
        { image: baseImgPath + "CGV7.png", tag: ["oak"] },
        { image: baseImgPath + "CGV11.png", tag: ["oak", "pine"] },
        { image: baseImgPath + "CGV12.png", tag: ["oak"] },
        { image: baseImgPath + "CGV13.png", tag: [] },
        { image: baseImgPath + "CGV18.png", tag: ["oak", "pine"] },
        { image: baseImgPath + "CGV19.png", tag: ["oak"] },
        { image: baseImgPath + "CGV24.png", tag: [] },
    ];
    const tags = ["oak", "pine"];
    return (
        <section className={styles.gallerySection} data-aos="fade-up">
            <Container>
                <h5 className={`subHeader`}>Gallery</h5>
                <h2 className={`headerDark mb-5`}>{headerContent}</h2>
                <Gallery images={images} tags={tags} />
            </Container>
        </section>
    );
}
