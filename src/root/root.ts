// Здесь необходимо продемонстрировать создание и использование GitHubStore

import GitHubStore from '../store/GitHubStore/GitHubStore';

const gitHubStore = new GitHubStore();

const EXAMPLE_ORGANIZATION = 'ktsstudio';
const QUERY = {
  per_page: '5',
  page: '1'
}

gitHubStore.getOrganizationReposList({
  organizationName: EXAMPLE_ORGANIZATION,
  data: QUERY
}).then(result => {
  /* eslint-disable no-console */
  console.log(result); // в консоли появится список репозиториев в ktsstudio
})

