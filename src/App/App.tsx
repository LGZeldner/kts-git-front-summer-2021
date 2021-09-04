import PageTitle from '@components/PageTitle';
import RepoSearchPage from '@pages/RepoSearchPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="light-gray-background">
        <PageTitle title="Cписок репозиториев"></PageTitle>
      </header>
      <RepoSearchPage />
    </div>
  );
}

export default App;
