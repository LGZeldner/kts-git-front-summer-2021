import React from "react";

import Button from "@components/Button";
import Input from "@components/Input";
import Loader from "@components/Loader";
import RepoBranchesDrawer from "@components/RepoBranchesDrawer";
import RepoTile from "@components/RepoTile";
import SearchIcon from "@components/SearchIcon";
import GitHubStore from "@store/GitHubStore";
import { RepoItem } from "@store/GitHubStore/types";

import "./RepoSearchPage.css";

const gitHubStore = new GitHubStore();

const QUERY = {
  per_page: '5',
  page: '1'
}

const RepoSearchPage = () => {

  const [inputValue, setInputValue] = React.useState<string>("");
  const handleInput = (value: string) => {
    setInputValue(value);
  };

  const [disabled, setDisabled] = React.useState(false);
  const [reposList, setReposList] = React.useState<RepoItem[]>([]);
  React.useEffect(() => {
    // если введено значение и нажата кнопка - делаем запрос
    if (inputValue !== "" && disabled) {
      gitHubStore
        .getOrganizationReposList({
          organizationName: inputValue,
          data: QUERY
        })
        .then((result) => {
          setReposList(result.data);
          setIsLoading(false);
        });
    }
  }, [inputValue, disabled]);

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const handleSearchButton = (inputValue: string) => {
    setDisabled(true);
    setIsLoading(true);
  };
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const handleDrawer = () => {
    setIsVisible(false);
  }
  const handleRepoTile = (): void => {
    // TODO: открытие боковой панели RepoBranchesDrawer
    setIsVisible(true);
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
        {isLoading && <Loader name="Загружаем список..." />}
        {(disabled && !isLoading) && <div className="repos-list">
          {reposList.map((repo) => (
            <React.Fragment key={repo.id}>
              <RepoTile
                onClick={handleRepoTile}
                item={repo}
              />
              <RepoBranchesDrawer selectedRepo={repo} visible={isVisible} onClose={handleDrawer} />
            </React.Fragment>
          ))}

        </div>
        }
      </div>
    </main>
  );
};

export default RepoSearchPage;