"use strict";
exports.__esModule = true;
exports.StatusHTTP = exports.HTTPMethod = void 0;
// Перечисление методов HTTP-запроса
var HTTPMethod;
(function (HTTPMethod) {
    // TODO: заполнить
    HTTPMethod["get"] = "GET";
    // TODO: добавить post = 'POST'
})(HTTPMethod = exports.HTTPMethod || (exports.HTTPMethod = {}));
// Перечисление статусов ответа
var StatusHTTP;
(function (StatusHTTP) {
    // TODO: заполнить
    StatusHTTP[StatusHTTP["ok"] = 200] = "ok";
    StatusHTTP[StatusHTTP["badRequest"] = 400] = "badRequest";
    StatusHTTP[StatusHTTP["notFound"] = 404] = "notFound";
    StatusHTTP[StatusHTTP["internalServerError"] = 500] = "internalServerError";
})(StatusHTTP = exports.StatusHTTP || (exports.StatusHTTP = {}));
