import React from "react";

import Button from "@components/Button";
import Input from "@components/Input";
import PageTitle from "@components/PageTitle";
import RepoTile from "@components/RepoTile";
import SearchIcon from "@components/SearchIcon";
import { RepoItem } from "@store/GitHubStore/types";

import "./RepoSearchPage.css";

const repoEx = {
  id: "string",
  name: "string",
  url: "string",
  owner: {
    id: 1,
    login: "string",
    avatar_url: "string",
    url: "string"
  },
  private: true,
  updated: new Date("2019-01-16"),
  stargazers_count: 123
};
const repoItemsEx = [repoEx, repoEx, repoEx, repoEx, repoEx];
export type RepoSearchPageProps = {
  repoItems: RepoItem[];
  isLoading?: Boolean;
};
let inputValue = "";
const isLoading = false;
const RepoSearchPage = ({ repoItems = repoItemsEx }) => {
  //const [inputValue, setInputValue] = React.useState<string>("");
  //const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const handleInput = (value: string) => {
    //setInputValue(value);
    inputValue = value;
  }
  const handleClick = (inputValue: string) => {

  };
  return (
    <main className="light-gray-background">
      <div className="repos-list-component">
        <div className="search-bar">
          <form action="" method="get" className="search-bar__form">
            <Input value={inputValue} placeholder="Введите название организации" onChange={(e: any) => handleInput(e.target.value)}></Input>
            <Button onClick={() => handleClick(inputValue)} disabled={isLoading}>
              <SearchIcon />
            </Button>
          </form>
        </div>
        <div className="repos-list">
          <RepoTile repo={repoEx} />
          <RepoTile repo={repoEx} />
          <RepoTile repo={repoEx} />
          <RepoTile repo={repoEx} />
          <RepoTile repo={repoEx} />
        </div>
      </div>
    </main>
  );
};

export default RepoSearchPage;