import React from 'react';

import PageTitle from '@components/PageTitle';
import RepoSearchPage from '@pages/RepoSearchPage';
import { RepoItem } from '@store/GitHubStore/types';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import styles from './App.module.scss';

type ReposContextProps = {
  list: RepoItem[];
  setList: (list: RepoItem[]) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  load: () => void;
};
export const ReposContext = React.createContext<ReposContextProps>({
  list: [],
  setList: () => { },
  isLoading: false,
  setIsLoading: () => { },
  load: () => { }
});

export const useReposContext = () => React.useContext(ReposContext);

function App() {
  const [list, setList] = React.useState<RepoItem[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const load = () => { };
  return (
    <div className={styles.App}>
      <header className={styles.lightGrayBackground}>
        <PageTitle title="Cписок репозиториев"></PageTitle>
      </header>
      <ReposContext.Provider value={{ list, setList, isLoading, setIsLoading, load }}>
        <BrowserRouter>
          <Switch>
            <Route path="/repos" component={RepoSearchPage} />
            <Redirect to="/repos" />
          </Switch>
        </BrowserRouter>
      </ReposContext.Provider>
    </div>
  );
}

export default App;
