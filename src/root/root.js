"use strict";
//import fetch from 'node-fetch';
// Здесь необходимо продемонстрировать создание и использование GitHubStore
exports.__esModule = true;
var GitHubStore_1 = require("../store/GitHubStore/GitHubStore");
var gitHubStore = new GitHubStore_1["default"]();
var EXAMPLE_ORGANIZATION = 'ktsstudio';
// const baseUrl = 'https://api.github.com/';
// const reqUrl = `${baseUrl}orgs/${EXAMPLE_ORGANIZATION}/repos`;
// async function f () {
//   let promise = await fetch(reqUrl); // для простого GET запроса не подключаем пока параметры
// return promise;
// }
// f().then(result => {
//   console.log(result);
// }); 
gitHubStore.getOrganizationReposList({
    organizationName: EXAMPLE_ORGANIZATION
}).then(function (result) {
    console.log(result); // в консоли появится список репозиториев в ktsstudio
});
// В ДЗ 1 Не требуется визуально в разметке отображать результат запроса к сети. Достаточно вывести в console.log
