import {IApiStore} from "./types";
import {RequestParams} from "./types";
import {ApiResponse} from "./types";
import fetch from 'node-fetch';
const qs = require('qs');

export default class ApiStore implements IApiStore {
    // TODO: реализовать
    readonly baseUrl: String; //  = 'https://api.github.com/';

    constructor(baseUrl: String){
        this.baseUrl = baseUrl;
    }

    async request<SuccessT, ErrorT = any, ReqT = {}>(params: RequestParams<ReqT>): Promise<ApiResponse<SuccessT, ErrorT>> {
        const query = qs.stringify(params.data);
        const reqUrl = `${this.baseUrl}${params.endpoint}?${query}`;
                
        try {
            const fetchResponse = await fetch(reqUrl, {method: params.method});
            return {
                success: true,
                data: await fetchResponse.json(),
                status: fetchResponse.status
            }
        } catch (error) {
            return {
                success: true,
                data: error,
                status: error.status
            }
        }              
    }    
}