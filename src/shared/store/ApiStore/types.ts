// Перечисление методов HTTP-запроса
export enum HTTPMethod {
    GET = "GET",
    POST = "POST"
}

// Параметры запроса
export type RequestParams<ReqT> = {
    method: HTTPMethod; // Метод запроса, GET или POST
    endpoint: string; // API-endpoint, на который делается запрос
    headers: Record<string, string>; // Объект с передаваемыми HTTP-заголовками

    /**
     * Объект с данными запроса.
     * - Для GET-запроса данные превращаются в query-строку и добавляются в endpoint
     * - Для POST-запроса данные преобразуются к формату JSON и добавляются в тело запроса (необязательное требование)
     */
    data: ReqT;
}

// Перечисление статусов ответа
enum StatusHTTP {
    OK = 200,
    Created,
    Accepted,
    No_Content = 204,
    Moved_Permanently = 301,
    Found,
    See_Other,
    Not_Modified,
    Temporary_Redirect = 307,
    Bad_Request = 400,
    Unauthorized,
    Forbidden = 403,
    Not_Found,
    Method_Not_Allowed,
    Not_Acceptable,
    Precondition_Failed = 412,
    Unsupported_Media_Type = 415,
    Internal_Server_Error = 500,
    Not_Implemented
}

// Ответ API
export type ApiResponse<SuccessT, ErrorT> =
    | {
        success: true;
        data: SuccessT;
        status: StatusHTTP;
    }
    | {
        success: false;
        data?: ErrorT;
        status?: StatusHTTP;
    };

// Интерфейс для класса, с помощью которого можно делать запросы к API
export interface IApiStore {
    // базовый url для выполнения запросов. 
    readonly baseUrl: String;

    // Метод, с помощью которого делается запрос. 
    request<SuccessT, ErrorT = any, ReqT = {}>(params: RequestParams<ReqT>): Promise<ApiResponse<SuccessT, ErrorT>>
}