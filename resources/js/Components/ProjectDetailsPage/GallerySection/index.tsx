import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import * as React from "react";
import Gallery, { galleryImageProp } from "../../Elements/Gallery/index";
import {useState} from "react";

interface GalleryHeadProps {
    headerContent: string;
    basePath: string;
    gallery: string[];
}

export default function ({ headerContent,basePath='/assets/images/gallery/',  gallery = [] }: GalleryHeadProps) {
    const [fileNames, setFileNames] = useState([]);
    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const images: galleryImageProp[] = [];
    let tags = [];

    gallery.forEach((item, index) =>{
        const splitExtension = item.split('.');
        const splitItem = splitExtension[0].split('_');
        let newImg: galleryImageProp = {image:'', tag: []};
        newImg['image'] = basePath + item;
        if(splitItem.length > 1){
            splitItem.splice(0, 1);
            newImg['tag'] = splitItem;
            const mergedSet = new Set([...tags, ...splitItem]);
            tags = Array.from(mergedSet);
        }else{
            newImg['image'] = basePath + item;
            newImg['tag'] = [];
        }
        images.push(newImg)
    });
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
