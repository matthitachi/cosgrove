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

export interface ApiPageSection {
    id: number;
    type: string;
    label: string;
    sort_order: number;
    is_active: boolean;
    data: Record<string, unknown>;
    image_url: string;
}

export interface ApiPage {
    id: number;
    title: string;
    slug: string;
    template: string;
    status: string;
    meta_title: string | null;
    meta_description: string | null;
    sections: ApiPageSection[];
}
