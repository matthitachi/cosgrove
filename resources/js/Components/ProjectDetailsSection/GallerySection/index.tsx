import {Col, Container, Row} from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
import Gallery, {galleryImageProp} from "../../Gallery/index"

export default function () {
    const baseImgPath = '/assets/images/gallery/';
    const images: galleryImageProp[] = [
        { image : baseImgPath+'CGV7.png', tag:['oak']},
        { image : baseImgPath+'CGV11.png', tag:['oak', 'pine']},
        { image : baseImgPath+'CGV12.png', tag:['oak']},
        { image : baseImgPath+'CGV13.png', tag:[]},
        { image : baseImgPath+'CGV18.png', tag:['oak', 'pine']},
        { image : baseImgPath+'CGV19.png', tag:['oak']},
        { image : baseImgPath+'CGV24.png', tag:[]},
    ];
    const tags = [
        'oak',
        'pine'
    ];
    return (
      <section className={styles.gallerySection}>
          <Container>
              <h5 className={`subHeader`}>Gallery</h5>
              <h2 className={`headerDark mb-5`}>Sights from the Project</h2>
             <Gallery images={images} tags={tags}  />

          </Container>



      </section>
    );
}


