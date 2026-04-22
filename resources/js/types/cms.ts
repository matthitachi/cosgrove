import { RecordItemProp } from "../Components/Elements/RecordList";

export interface houseTypeItemProps {
    img: string;
    name: string;
    desc: string;
    slug: string;
    projectSlug: string[];
    headerImg: string;
    detailsImg: string;
    moreDesc: string;
    galleryBasePath: string;
    gallery: string[];
    specs: RecordItemProp[];
}

export interface brochuresItemProp {
    link: string;
    image: string;
    name: string;
    fileType: string;
    fileTypeIcon: string;
}

export interface FeaturedListItemProp {
    date: string;
    title: string;
    link: string;
}
