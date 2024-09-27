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
