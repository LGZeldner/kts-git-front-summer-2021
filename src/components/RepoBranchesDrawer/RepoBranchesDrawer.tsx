import React from 'react';

import GitHubStore from '@store/GitHubStore';
import { BranchItem, RepoItem } from '@store/GitHubStore/types';
import { Drawer } from 'antd';

import "./RepoBranchesDrawer.css";

export type RepoBranchesDrawerProps = {
    selectedRepo: RepoItem | undefined;
    onClose: () => void;
    visible: boolean;
};

const RepoBranchesDrawer: React.FC<RepoBranchesDrawerProps> = ({
    selectedRepo,
    onClose,
    visible,
}) => {
    const [branchesList, setBranchesList] = React.useState<BranchItem[]>([]);

    React.useEffect(() => {
        const getBranches = async () => {
            if (selectedRepo) try {
                await new GitHubStore()
                    .getRepoBranchesList({
                        ownerName: selectedRepo.owner.login,
                        repoName: selectedRepo.name,
                    })
                    .then((branch) => setBranchesList(branch.data));
            } catch (err) { }
        };
        getBranches();
    }, [selectedRepo]);

    return <Drawer title="Ветки" placement="right" onClose={onClose} visible={visible}>
        {branchesList.map((branch) => (
            <p>{branch.name}</p>
        ))}
    </Drawer>;
};

export default RepoBranchesDrawer;