import axios, {AxiosInstance} from "axios";

export class BaseApiService {
    private readonly axiosInstance: AxiosInstance;

    constructor(axiosInstance?: AxiosInstance) {
        if (axiosInstance) {
            this.axiosInstance = axiosInstance;
        } else {
            this.axiosInstance = this.createAxiosInstance();
        }
    }

    protected getBaseUrl(): string {
        return import.meta.env.VITE_APP_API_URL ?? '';
    }

    protected createAxiosInstance(): AxiosInstance {
        return axios.create({
            baseURL: this.getBaseUrl()
        });
    }

    getAxiosInstance(): AxiosInstance {
        return this.axiosInstance;
    }
}
