import axios from 'axios';
import {BaseApiService} from "./baseApiService";

export default class CosgroveApiServiced extends BaseApiService{
    async sendContactDetails(data:any){
        const url = '/v1/contact-details';
        const response = await this.getAxiosInstance().post(url, data);
        return  response.data;
    }
    async sendAgentDetails(data:any){
        const url = '/v1/agent-details';
        const response = await this.getAxiosInstance().post(url, data);
        return  response.data;
    }
}

// ── Typed API shapes ──────────────────────────────────────────────────────────

export interface ApiProject {
    id: number;
    name: string;
    slug: string;
    location: string;
    status: string;
    show_in_home: boolean;
    sort_order: number;
    hero_image: string;
    thumbnail: string;
    description: string | null;
    meta_title: string;
    meta_description: string | null;
    updated_at: string;
}

export interface ApiGalleryItem {
    url: string;
    name: string;
}

export interface ApiHouseType {
    id: number;
    name: string;
    slug: string;
    beds: number | null;
    baths: number | null;
    area: string | null;
    price: string | null;
    sort_order: number;
    description: string | null;
    surface_area: string | null;
    parking_spaces: number | null;
    maids_quarters: number | null;
    living_rooms: number | null;
    hero_image: string;
    thumbnail: string;
    gallery: ApiGalleryItem[];
    floorplan_url: string;
}

export interface ApiProjectBrochure {
    id: number;
    title: string;
    sort_order: number;
    brochure_url: string;
    cover_url: string;
}

export interface ApiTeamMember {
    id: number;
    name: string;
    position: string;
    bio: string | null;
    bio_extended: string | null;
    sort_order: number;
    photo_url: string;
    photo_thumb: string;
}

export interface ApiProjectDetail extends ApiProject {
    description: string;
    gallery: ApiGalleryItem[];
    house_types: ApiHouseType[];
    brochures: ApiProjectBrochure[];
}

export interface ApiSmartFeature {
    id: number;
    name: string;
    icon_key: string | null;
    description: string;
    sort_order: number;
}

export interface ApiPressArticle {
    id: number;
    headline: string;
    publication: string;
    published_date: string;
    external_url: string | null;
    sort_order: number;
}

export interface ApiSocialLink {
    id: number;
    platform: string;
    url: string;
    sort_order: number;
}

export interface ApiHomepageStat {
    id: number;
    label: string;
    count_value: string;
    icon: string | null;
    sort_order: number;
}

export interface ApiJobListing {
    id:          number;
    slug:        number;
    title:       string;
    department:  string | null;
    location:    string | null;
    description: any;
    is_active:   boolean;
    sort_order:  number;
}

// ── Named API functions ───────────────────────────────────────────────────────

const api = axios.create({ baseURL: import.meta.env.VITE_APP_API_URL ?? '' });

export const getProjects       = (): Promise<ApiProject[]>        => api.get('/v1/projects').then(r => r.data.data);

let _allProjectDetailsCache: ApiProjectDetail[] | null = null;
export const getAllProjectDetails = async (): Promise<ApiProjectDetail[]> => {
    if (_allProjectDetailsCache) return _allProjectDetailsCache;
    const projects = await getProjects();
    const details  = await Promise.all(projects.map(p => getProjectBySlug(p.slug)));
    _allProjectDetailsCache = details;
    return details;
};
export const getHomeProjects   = (): Promise<ApiProject[]>        => api.get('/v1/projects/home').then(r => r.data.data);
export const getProjectBySlug  = (slug: string): Promise<ApiProjectDetail> => api.get(`/v1/projects/${slug}`).then(r => r.data.data);

export const getTeamMembers    = (): Promise<ApiTeamMember[]>     => api.get('/v1/team').then(r => r.data.data);
export const getPressArticles  = (): Promise<ApiPressArticle[]>   => api.get('/v1/press').then(r => r.data.data);

export const getHomepageStats  = (): Promise<ApiHomepageStat[]>   => api.get('/v1/homepage/stats').then(r => r.data.data);
export interface ApiContactInfo {
    phone_1?: string;
    phone_2?: string;
    email?: string;
    address?: string;
    maps_url?: string;
    [key: string]: string | undefined;
}

export const getContactInfo    = (): Promise<ApiContactInfo>      => api.get('/v1/homepage/contact').then(r => r.data.data);

export interface ApiContactPerson {
    id: number;
    name: string;
    title: string;
    email: string | null;
    sort_order: number;
    photo_url: string | null;
}

export const getContactPersons = (): Promise<ApiContactPerson[]>  => api.get('/v1/contact-persons').then(r => r.data.data);
export const getSocialLinks    = (): Promise<ApiSocialLink[]>     => api.get('/v1/homepage/social').then(r => r.data.data);
export const getSmartFeatures  = (): Promise<ApiSmartFeature[]>   => api.get('/v1/homepage/features').then(r => r.data.data);
export const getJobListings    = (): Promise<ApiJobListing[]>     => api.get('/v1/jobs').then(r => r.data.data);
export const getPage           = (slug: string): Promise<import('../types/cms').ApiPage> => api.get(`/v1/pages/${slug}`).then(r => r.data.data);
