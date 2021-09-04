import ApiStore from '../../shared/store/ApiStore';
import { ApiResponse, HTTPMethod } from "../../shared/store/ApiStore/types";
import { IGitHubStore, GetOrganizationReposListParams, RepoItem } from "./types";

export default class GitHubStore implements IGitHubStore {
    private baseUrl: string = 'https://api.github.com/';
    private readonly apiStore = new ApiStore(this.baseUrl);

    private getGitOrgRepoReqUrl(params: GetOrganizationReposListParams): string {
        return `orgs/${params.organizationName}/repos`;
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
}
