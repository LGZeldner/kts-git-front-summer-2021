import { ApiResponse } from "../../shared/store/ApiStore/types";
/** Интерфейс класса для работы с GitHub API
 * названия getSomeData и postSomeData
 * (а также типов GetSomeDataParams и PostSomeDataPrams)
 * поменяйте в соответствии с выполняемым запросом.
 * Выберите любой запрос из публичного API GitHub.
 */
export type GetRepoBranchesListParams = {
    ownerName: string; // Имя владельца
    repoName: string; // Название репозитория
    data?: {
        protected?: boolean; // true-protected branches        
        per_page?: number; // Результатов на странице
        page?: number; // номер страницы
    }
}
export type GetOrganizationReposListParams = {
    organizationName: string; // Имя организации
    data?: {
        type?: string; // Типы репозиториев
        sort?: string; // Сортировка по
        direction?: string; // Направление сортировки
        per_page?: number; // Результатов на странице
        page?: number; // номер страницы
    }
}
export type GetRepoParams = {
    id: string; // Id репозитория    
}

export type GitHubRepoOwner = {
    id: number;
    login: string;
    avatar_url: string;
    url: string;
};

export type RepoItem = {
    id: string;
    name: string;
    url: string;
    owner: GitHubRepoOwner;
    private: boolean;
    updated_at: Date;
    stargazers_count: number;
};
export type BranchItem = {
    name: string;
    protected: boolean;
    protection_url: string;
};

export interface IGitHubStore {

    getOrganizationReposList(params: GetOrganizationReposListParams): Promise<ApiResponse<RepoItem[], any>>;
    getRepoBranchesList(params: GetRepoBranchesListParams): Promise<ApiResponse<BranchItem[], any>>;
    getRepo(params: GetRepoParams): Promise<ApiResponse<RepoItem, any>>;

    // Необязательный пункт, т.к. требует авторизации. Понадобится в будущем
    // TODO метод POST
    // postSomeData(params: PostSomeDataParams): Promise<ApiResp<PostSomeDataResp>>;
}