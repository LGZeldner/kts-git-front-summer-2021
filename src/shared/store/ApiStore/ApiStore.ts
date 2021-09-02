import { IApiStore, RequestParams, ApiResponse, HTTPMethod } from "./types";
import fetch, { RequestInit } from 'node-fetch';
const qs = require('qs');

export default class ApiStore implements IApiStore {
    readonly baseUrl: String; //  = 'https://api.github.com/';

    constructor(baseUrl: String) {
        this.baseUrl = baseUrl;
    }

    private getRequestData<ReqT>(
        params: RequestParams<ReqT>
    ): [string, RequestInit] {
        let url: string = `${this.baseUrl}${params.endpoint}`;
        const req: RequestInit = {
            method: params.method,
            headers: { ...params.headers }
        };

        if (params.method === HTTPMethod.GET) {
            url = `${url}?${qs.stringify(params.data)}`;
        } else {
            req.body = JSON.stringify(params.data);
            req.headers = {
                ...req.headers,
                "Content-Type": "application/json;charset=UTF-8"
            };
        }
        return [url, req];
    }

    async request<SuccessT, ErrorT = any, ReqT = {}>(
        params: RequestParams<ReqT>
    ): Promise<ApiResponse<SuccessT, ErrorT>> {
        try {
            const [endpoint, req] = this.getRequestData(params);
            const response = await fetch(endpoint, req);

            if (response.ok) {
                return {
                    success: true,
                    data: await response.json(),
                    status: response.status
                };
            } else {
                return {
                    success: false,
                    data: await response.json(),
                    status: response.status
                };
            }
        } catch (error) {

            return {
                success: false
                // data: error
            };
        }
    }
}