"use strict";
exports.__esModule = true;
var node_fetch_1 = require("node-fetch");
var ApiStore = /** @class */ (function () {
    function ApiStore(baseUrl) {
        this.baseUrl = baseUrl;
    }
    ApiStore.prototype.request = function (params) {
        //пример api
        //
        //query: string; // '/search/repositories?q='+'stars:>=10000+language:go'+'&page=1&per_page=10&sort=stars&order=desc';
        return node_fetch_1["default"](params.endpoint); // для простого GET запроса укажем только endpoint;
    };
    return ApiStore;
}());
exports["default"] = ApiStore;
