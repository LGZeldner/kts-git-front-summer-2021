import ApiStore from '../../shared/store/ApiStore';
import { ApiResponse, HTTPMethod } from "../../shared/store/ApiStore/types";
import { IGitHubStore, GetOrganizationReposListParams, RepoItem, GetRepoBranchesListParams, BranchItem, GetRepoParams } from "./types";

export default class GitHubStore implements IGitHubStore {
    private baseUrl: string = 'https://api.github.com/';
    private readonly apiStore = new ApiStore(this.baseUrl);

    private getGitOrgRepoReqUrl(params: GetOrganizationReposListParams): string {
        return `orgs/${params.organizationName}/repos`;
    }
    private getGitRepoBranchReqUrl(params: GetRepoBranchesListParams): string {
        return `repos/${params.ownerName}/${params.repoName}/branches`;
    }
    private getGitRepoReqUrl(params: GetRepoParams): string {
        return `repositories/${params.id}`;
    }

    async getOrganizationReposList(params: GetOrganizationReposListParams): Promise<ApiResponse<RepoItem[], any>> {
        return await this.apiStore.request({
            method: HTTPMethod.GET,
            endpoint: this.getGitOrgRepoReqUrl(params), // API-endpoint, на который делается запрос
            headers: {},
            data: params.data
        });
        // Документация github: https://docs.github.com/en/rest/reference/repos#list-organization-repositories
    }
    async getRepoBranchesList(params: GetRepoBranchesListParams): Promise<ApiResponse<BranchItem[], any>> {
        return await this.apiStore.request({
            method: HTTPMethod.GET,
            endpoint: this.getGitRepoBranchReqUrl(params), // API-endpoint, на который делается запрос
            headers: {},
            data: params.data
        });
        // Документация github: https://docs.github.com/en/rest/reference/repos#list-branches
    }
    async getRepo(params: GetRepoParams): Promise<ApiResponse<RepoItem, any>> {
        return await this.apiStore.request({
            method: HTTPMethod.GET,
            endpoint: this.getGitRepoReqUrl(params), // API-endpoint, на который делается запрос
            headers: {},
            data: {}
        });
        // Пример https://api.github.com/repositories/25694602
    }
}
