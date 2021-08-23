
/** Интерфейс класса для работы с GitHub API
 * названия getSomeData и postSomeData
 * (а также типов GetSomeDataParams и PostSomeDataPrams)
 * поменяйте в соответствии с выполняемым запросом.
 * Выберите любой запрос из публичного API GitHub.
 */
export type GetOrganizationReposListParams = {
    organizationName: string; // Имя организации
    data?: {    
        type?: string; // Типы репозиториев
        sort?: string; // Сортировка по
        direction?: string; // Направление сортировки
        per_page?: string; // Результатов на странице
        page?: string; // номер страницы
    }

}
export type RepoItem = {
    data: String;
    
}
export type ApiResp<DataT> = {    
    data: DataT;    
};

export interface IGitHubStore {
    getOrganizationReposList(params: GetOrganizationReposListParams): Promise<ApiResp<RepoItem[]>>;
    
    // Необязательный пункт, т.к. требует авторизации. Понадобится в будущем
    // TODO метод POST
    // postSomeData(params: PostSomeDataParams): Promise<ApiResp<PostSomeDataResp>>;
}