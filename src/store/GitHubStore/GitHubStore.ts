import fetch from 'node-fetch';
import ApiStore from '../../shared/store/ApiStore';
//import {HTTPMethod, StatusHTTP} from '../../shared/store/ApiStore/types';
import {IGitHubStore, GetOrganizationReposListParams, RepoItem, ApiResp} from "./types";

export default class GitHubStore implements IGitHubStore {
    private baseUrl: string = 'https://api.github.com/';
    private readonly apiStore = new ApiStore(this.baseUrl); // TODO: не забудьте передать baseUrl в конструктор

    // TODO: реализовать интерфейс IGitHubStore

    async getOrganizationReposList(params: GetOrganizationReposListParams) /*: Promise<ApiResp<RepoItem[]>>*/ {
        // TODO: Здесь сделайте вызов из this.apiStore и верните результат
        const gitOrgRepoReqUrl = `orgs/${params.organizationName}/repos`;
        
        let promise = await this.apiStore.request({
            method: 'GET',
            endpoint: gitOrgRepoReqUrl, // API-endpoint, на который делается запрос
            data: params.data
                
        }); 
        return promise;
        //let repoItem: RepoItem = [{}, {}];
        // let apiResp = new(repoItem) ApiResp<RepoItem[]>;
        // let result = new  Promise<ApiResp<RepoItem[]>>;
        //return await this.apiStore.request(params)
        // Документация github: https://docs.github.com/en/rest/reference/repos#list-organization-repositories
    }
}
