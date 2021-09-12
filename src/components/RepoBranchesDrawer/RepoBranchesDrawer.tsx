import React, { PropsWithChildren } from 'react';

import GitHubStore from '@store/GitHubStore';
import { BranchItem, RepoItem } from '@store/GitHubStore/types';
import { Drawer } from 'antd';
import './RepoBranchesDrawer.css';

export type RepoBranchesDrawerProps = PropsWithChildren<{
    selectedRepo: RepoItem | undefined;
    onClose: () => void;
    visible: boolean;
}>;

const RepoBranchesDrawer: React.FC<RepoBranchesDrawerProps> = ({
    selectedRepo,
    onClose,
    visible,
    children
}) => {
    const [branchesList, setBranchesList] = React.useState<BranchItem[]>([]);
    const gitHubStore = new GitHubStore();

    React.useEffect(() => {
        if (selectedRepo) try {
            gitHubStore
                .getRepoBranchesList({
                    ownerName: selectedRepo.owner.login,
                    repoName: selectedRepo.name,
                })
                .then((branch) => setBranchesList(branch.data));
        }
            catch (err) { }

    }, [selectedRepo]);

    return <Drawer title="Репозиторий и ветки" placement="top" onClose={onClose} visible={visible}>
        {children}
        {branchesList && branchesList.map((branch) => (
            <p>{branch.name}</p>
        ))}
    </Drawer>;
};

export default RepoBranchesDrawer;