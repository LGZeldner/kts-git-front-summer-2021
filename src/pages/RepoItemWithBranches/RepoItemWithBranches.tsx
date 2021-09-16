import React from 'react';

import Loader from '@components/Loader';
import RepoBranchesDrawer from "@components/RepoBranchesDrawer";
import RepoTile from "@components/RepoTile";
import GitHubStore from '@store/GitHubStore';
import { RepoItem } from '@store/GitHubStore/types';
import { useHistory, useParams } from "react-router-dom";

import { useReposContext } from "../../App/App";

const RepoItemWithBranches = () => {
    const reposContext = useReposContext();
    const linkParams = useParams<{ id?: string }>();
    const history = useHistory();
    const [gitHubStore] = React.useState<GitHubStore>(new GitHubStore());

    const [selectedRepo, setSelectedRepo] = React.useState<RepoItem>();
    const [isVisible, setIsVisible] = React.useState<boolean>(true);
    const [notFound, setNotFound] = React.useState<boolean>(false);

    const handleDrawer = () => {
        setIsVisible(false);
        history.push('/repos');
    }

    React.useEffect(() => {

        const reposListFiltered = reposContext.list.filter(
            (repo: RepoItem) => repo.id === linkParams.id)[0];

        if (reposListFiltered) {
            setSelectedRepo(reposListFiltered);
        }
        else if (linkParams.id) {
            try {
                gitHubStore
                    .getRepo({
                        id: linkParams.id,
                    })
                    .then((result) => {
                        if (result.success) setSelectedRepo(result.data);
                        else setNotFound(true);
                    });
            } catch (err) {
            }
        }

    }, [reposContext, linkParams, gitHubStore]);

    return (
        <RepoBranchesDrawer selectedRepo={selectedRepo} visible={isVisible} onClose={handleDrawer}>
            {(selectedRepo) && <RepoTile item={selectedRepo} />}
            {notFound && <Loader name={'Репозиторий не найден'}></Loader>}
        </RepoBranchesDrawer>);
};

export default RepoItemWithBranches;