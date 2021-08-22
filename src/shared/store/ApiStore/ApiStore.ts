import {IApiStore} from "./types";
import {RequestParams} from "./types";
import {ApiResponse} from "./types";
import fetch from 'node-fetch';

export default class ApiStore implements IApiStore {
    // TODO: реализовать
    readonly baseUrl: String; //  = 'https://api.github.com/';
    
    request<SuccessT, ErrorT = any, ReqT = {}>(params: RequestParams<ReqT>): any {
        /*Promise<ApiResponse<SuccessT, ErrorT>> - подскажите, пожалуйста, как разобраться со сложными типами*/
        return fetch(params.endpoint); // для простого GET запроса укажем только endpoint;        
    }
    constructor(baseUrl: String){
        this.baseUrl = baseUrl;
    }
}