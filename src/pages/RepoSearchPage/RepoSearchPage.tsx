import React from "react";

import Button from "@components/Button";
import Input from "@components/Input";
import Loader from "@components/Loader";
import RepoTile from "@components/RepoTile";
import SearchIcon from "@components/SearchIcon";
import GitHubStore from "@store/GitHubStore";
import { RepoItem } from "@store/GitHubStore/types";

import "./RepoSearchPage.css";

const gitHubStore = new GitHubStore();

const EXAMPLE_ORGANIZATION = 'ktsstudio';
const QUERY = {
  per_page: '5',
  page: '1'
}

const RepoSearchPage = () => {

  const [inputValue, setInputValue] = React.useState<string>("");
  const handleInput = (value: string) => {
    setInputValue(value);
  };

  const [reposList, setReposList] = React.useState<RepoItem[]>([]);
  React.useEffect(() => {
    gitHubStore
      .getOrganizationReposList({
        organizationName: EXAMPLE_ORGANIZATION,
        data: QUERY
      })
      .then((result) => {
        setReposList(result.data);
        setIsLoading(false);
      });
  }, []);

  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const [disabled, setDisabled] = React.useState(false);
  const handleSearchButton = (inputValue: string) => {
    setDisabled(true);
  };
  const handleRepoTile = (): void => {
    // TODO: открытие боковой панели RepoBranchesDrawer
  };

  return (
    <main className="light-gray-background">
      <div className="repos-list-component">
        <div className="search-bar">
          <form action="" method="get" className="search-bar__form">
            <Input value={inputValue} placeholder="Введите название организации" onChange={handleInput}></Input>
            <Button onClick={() => handleSearchButton(inputValue)} disabled={disabled}>
              <SearchIcon />
            </Button>
          </form>
        </div>
        <div className="repos-list">
          {isLoading && <Loader name="Загружаем список..." />}
          {reposList.map((repo) => (
            <React.Fragment key={repo.id}>
              <RepoTile
                onClick={handleRepoTile}
                item={repo}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </main>
  );
};

export default RepoSearchPage;