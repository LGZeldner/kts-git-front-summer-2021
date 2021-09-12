import React from "react";

import Button from "@components/Button";
import Input from "@components/Input";
import Loader from "@components/Loader";
import RepoTile from "@components/RepoTile";
import SearchIcon from "@components/SearchIcon";
import RepoItemWithBranches from "@pages/RepoItemWithBranches";
import GitHubStore from "@store/GitHubStore";
import { Link, Route } from "react-router-dom";

import "./RepoSearchPage.scss";
import { useReposContext } from "../../App/App";

const gitHubStore = new GitHubStore();

const QUERY = {
  per_page: '5',
  page: '1'
}

const RepoSearchPage = () => {
  const reposContext = useReposContext();

  const [inputValue, setInputValue] = React.useState<string>("");
  const handleInput = (value: string) => {
    setInputValue(value);
  };

  const [disabled, setDisabled] = React.useState(false);

  const reposLoad = () => {
    if (reposContext.isLoading) {
      gitHubStore
        .getOrganizationReposList({
          organizationName: inputValue,
          data: QUERY
        })
        .then((result) => {
          reposContext.setList(result.data);
          reposContext.setIsLoading(false);
          setDisabled(false);
        });
    }
  }
  reposContext.load = reposLoad;

  React.useEffect(() => {
    reposContext.load();
  }, [reposContext]);

  const handleSearchButton = (inputValue: string) => {
    setDisabled(true);
    reposContext.setIsLoading(true);
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
        {reposContext.isLoading && <Loader name="Загружаем список..." />}
        {(!reposContext.isLoading) && <div className="repos-list">
          {reposContext.list.map((repo) => (
            <React.Fragment key={repo.id}>
              <Link to={`/repos/${repo.id}`}>
                <RepoTile
                  onClick={() => { }}
                  item={repo}
                />
              </Link>
            </React.Fragment>
          ))}
        </div>
        }
        <Route path="/repos/:id" component={RepoItemWithBranches} />

      </div>
    </main>

  );
};

export default RepoSearchPage;