import React from 'react';

import GitHubStore from '@store/GitHubStore';
import RepoBranchesDrawer from "@components/RepoBranchesDrawer";
import RepoTile from "@components/RepoTile";
import { BranchItem, RepoItem } from '@store/GitHubStore/types';
import { Drawer } from 'antd';
import { ReposContext, useReposContext } from "../../App/App";
import { useHistory, useParams } from "react-router";

const RepoItemWithBranches = () => {
    const reposContext = useReposContext();
    const linkParams = useParams<{ id?: string }>();

    const [selectedRepo, setSelectedRepo] = React.useState<RepoItem>();
    const [isVisible, setIsVisible] = React.useState<boolean>(true);
    const handleDrawer = () => {
        setIsVisible(false);
    }

    React.useEffect(() => {
        if (reposContext.list)
            setSelectedRepo(reposContext.list.filter(
                (repo: RepoItem) => repo.id === linkParams.id)[0]);


    }, [reposContext]);

    return (
        <RepoBranchesDrawer selectedRepo={selectedRepo} visible={isVisible} onClose={handleDrawer}>

        </RepoBranchesDrawer>);
};

export default RepoItemWithBranches;