import * as React from "react";
import styles from "./styles.module.scss";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ReactNode, useEffect, useRef, useState } from "react";

export interface galleryImageProp {
    image: string;
    tag: string[];
}

interface galleryProp {
    columnsCount?: number;
    gutter?: string;
    responsive?: object;
    images: galleryImageProp[];
    tags?: string[];
}

export default function ({
    columnsCount = 4,
    gutter = "10px",
    images,
    tags = [],
    responsive = { 575: 2, 767: 2, 992: 3, 1400: 4 },
}: galleryProp) {
    const [activeTag, setActiveTag] = useState("all");
    const [currentTags, setCurrentTags] = useState<string[]>(tags);
    const [selectedImages, setSelectedImages] =
        useState<galleryImageProp[]>(images);
    const [galleryHeight, setGalleryHeight] = useState("auto");
    const ref = useRef(null);
    useEffect(() => {
        tags.unshift("all");
        setCurrentTags(tags);
    }, []);
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const handleTagClick = (item: string) => {
        setSelectedImages([]);
        setGalleryHeight(ref.current.clientHeight + "px");
        let select = images;
        if (item != "all") {
            select = images.filter((image) => image.tag.includes(item));
        }
        setActiveTag(item);
        setTimeout(() => {
            setSelectedImages(select);
        }, 100);
        setTimeout(() => {
            setGalleryHeight("auto");
        }, 400);
    };

    return (
        <div
            className={styles.gallery}
            ref={ref}
            style={{ height: galleryHeight }}
        >
            {tags.length > 0 && (
                <div className={styles.tagsCtx}>
                    <div className={styles.tagBg}>
                        {currentTags.map((item, index) => (
                            <div
                                key={index}
                                className={`textWhite ${styles.tag}
                                  ${
                                      activeTag == item.toLocaleLowerCase()
                                          ? styles.active
                                          : ""
                                  }`}
                                onClick={() => handleTagClick(item)}
                            >
                                {capitalizeFirstLetter(item.toLowerCase())}
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <ResponsiveMasonry columnsCountBreakPoints={responsive}>
                <Masonry
                    columnsCount={columnsCount}
                    gutter={gutter}
                    style={{ transition: "all 0.5s ease" }}
                >
                    {selectedImages.map((image, i) => (
                        <img
                            key={i}
                            src={image.image}
                            className={styles.display}
                            alt={"Cosgrove Real Estate - Gallery"}
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    );
}
