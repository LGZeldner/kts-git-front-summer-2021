
import React from 'react';

import Avatar from '@components/Avatar';
import PageTitle from '@components/PageTitle'; 
import RepoTile from '@components/RepoTile';

import avatarImg from './avatar.png';
import logo from './logo.svg';

import './App.css';
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
}

function App() {
  return (
    <div className="App">
      <header className="light-gray-background">
        <PageTitle title="Cписок репозиториев"></PageTitle>
      </header>
      <Avatar src={avatarImg} alt="" letter="F" />
      <RepoTile repo={repoEx} />
    </div>
  );
}

export default App;
