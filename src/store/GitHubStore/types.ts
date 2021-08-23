import { Http2SecureServer } from "http2";
import { type } from "os";

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
    name: String;
    description: String;
}
export type ApiResp<RepoItem> = {
    data: RepoItem;
}
export interface IGitHubStore {
    getOrganizationReposList(params: GetOrganizationReposListParams): any/*<ApiResp<RepoItem[]>>*/;
    // getSomeData(params: GetSomeDataParams): Promise<ApiResp<GetSomeDataResp>>;

    // Необязательный пункт, т.к. требует авторизации. Понадобится в будущем
    // postSomeData(params: PostSomeDataParams): Promise<ApiResp<PostSomeDataResp>>;
}