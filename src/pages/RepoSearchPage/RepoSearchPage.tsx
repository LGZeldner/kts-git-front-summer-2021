import React from "react";

import Button from "@components/Button";
import Input from "@components/Input";
import Loader from "@components/Loader";
import RepoTile from "@components/RepoTile";
import SearchIcon from "@components/SearchIcon";
import RepoItemWithBranches from "@pages/RepoItemWithBranches";
import GitHubStore from "@store/GitHubStore";
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link, Route } from "react-router-dom";

import { useReposContext } from "../../App/App";
import styles from "./RepoSearchPage.module.scss";


const RepoSearchPage = () => {
  const reposContext = useReposContext();
  const [gitHubStore] = React.useState<GitHubStore>(new GitHubStore());
  const [query, setQuery] = React.useState({
    per_page: 5,
    page: 1
  });
  const [hasMoreRepos, setHasMoreRepos] = React.useState<boolean>(true);
  const [inputValue, setInputValue] = React.useState<string>("");
  const handleInput = (value: string) => {
    setInputValue(value);
  };

  const reposLoad = () => {
    gitHubStore
      .getOrganizationReposList({
        organizationName: inputValue,
        data: query
      })
      .then((result) => {
        reposContext.setIsLoading(false);
        if (result.data.length) reposContext.setList(reposContext.list.concat(result.data));
        else setHasMoreRepos(false);
      });

  }
  reposContext.load = reposLoad;

  React.useEffect(() => {
    if (reposContext.isLoading) reposContext.load();

  }, [reposContext]);

  const handleSearchButton = (inputValue: string) => {
    reposContext.setIsLoading(true);
  };

  const fetchMoreData = () => {
    setQuery({ per_page: query.per_page, page: query.page + 1 });
    reposContext.setIsLoading(true);
  };

  return (
    <main className={styles.lightGrayBackground}>
      <div className={styles.reposListComponent}>
        <div className={styles.searchBar}>
          <form action="" method="get" className={styles.searchBar__form}>
            <Input value={inputValue} placeholder="Введите название организации" onChange={handleInput}></Input>
            <Button onClick={() => handleSearchButton(inputValue)} disabled={reposContext.isLoading}>
              <SearchIcon />
            </Button>
          </form>
        </div>
        {(reposContext.list.length === 0 && reposContext.isLoading) && <Loader name="Загружаем список..." />}
        {(reposContext.list.length !== 0) &&
          <InfiniteScroll
            dataLength={reposContext.list.length}
            next={fetchMoreData}
            hasMore={hasMoreRepos}
            loader={<Loader name="Загружаем еще репозитории..." />}
            endMessage={
              <Loader name="Загружены все репозитории" />
            }
          >
            <div className={styles.reposList}>
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
          </InfiniteScroll>

        }
        <Route path="/repos/:id" component={RepoItemWithBranches} />

      </div>
    </main>

  );
};

export default RepoSearchPage;