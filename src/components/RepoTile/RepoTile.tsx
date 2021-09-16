import React from "react";

import Avatar from "@components/Avatar";
import StarIcon from "@components/StarIcon";
import { RepoItem } from "@store/GitHubStore/types";
import Moment from "moment";

import styles from './RepoTile.module.scss';

export type RepoTileProps = {
    item: RepoItem;
};

const RepoTile: React.FC<RepoTileProps> = ({ item: repo }) => (
    <div className={styles.gitRepoTile} >
        <div className={styles.gitRepoTile__container}>
            <Avatar src={repo.owner.avatar_url} alt="owner avatar" letter={repo.owner.login[0].toUpperCase()} />
            <div className={styles.gitRepoTile__content}>
                <a className={styles.gitRepoTile__repoName}>{repo.name}</a>
                <a className={`${styles.gitRepoTile__orgLink}${styles.gitRepoTile__infoText}`} href={repo.owner.url}> {repo.owner.login}</a>
                <div className={styles.gitRepoTile__info}>
                    <StarIcon></StarIcon>
                    <p className={`${styles.gitRepoTile__stars} ${styles.gitRepoTile__infoText}`}>{repo.stargazers_count}</p>
                    <p className={`${styles.gitRepoTile__updated} ${styles.gitRepoTile__infoText}`}>
                        Updated {Moment(repo.updated_at).format("D MMM")}
                    </p>
                </div>
            </div>
        </div >
    </div >
);

export default React.memo(RepoTile);