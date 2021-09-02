import { ApiResponse, HTTPMethod } from "../../shared/store/ApiStore/types";
import ApiStore from '../../shared/store/ApiStore';
import { IGitHubStore, GetOrganizationReposListParams, RepoItem } from "./types";

export default class GitHubStore implements IGitHubStore {
    private baseUrl: string = 'https://api.github.com/';
    private readonly apiStore = new ApiStore(this.baseUrl);

    async getOrganizationReposList(params: GetOrganizationReposListParams): Promise<ApiResponse<RepoItem[], any>> {

        const gitOrgRepoReqUrl = `orgs/${params.organizationName}/repos`;

        const reqResponse = await this.apiStore.request({
            method: HTTPMethod.GET,
            endpoint: gitOrgRepoReqUrl, // API-endpoint, на который делается запрос
            headers: {
                "Content-Type": "application/json"
            },
            data: params.data

        });
        return reqResponse.data;
        // Документация github: https://docs.github.com/en/rest/reference/repos#list-organization-repositories
    }
}
