import React from "react";

import Avatar from "@components/Avatar";
import StarIcon from "@components/StarIcon";
import { RepoItem } from "@store/GitHubStore/types";
import Moment from "moment";
import "./RepoTile.css";

export type RepoTileProps = {
    onClick?: (e: React.MouseEvent) => void;
    item: RepoItem;
};

const RepoTile: React.FC<RepoTileProps> = ({ onClick, item: repo }) => (
    <div className="git-repo-tile" onClick={onClick}>
        <div className="git-repo-tile__container">
            <Avatar src={repo.owner.avatar_url} alt="owner avatar" letter={repo.owner.login[0].toUpperCase()} />
            <div className="git-repo-tile__content">
                <a className="git-repo-tile__repo-name">{repo.name}</a>
                <a className="git-repo-tile__org-link git-repo-tile__info-text" href={repo.owner.url}> {repo.owner.login}</a>
                <div className="git-repo-tile__info">
                    <StarIcon></StarIcon>
                    <p className="git-repo-tile__stars git-repo-tile__info-text">{repo.stargazers_count}</p>
                    <p className="git-repo-tile__updated git-repo-tile__info-text">Updated {Moment(repo.updated_at).format("D MMM")}</p>
                </div>
            </div>
        </div>
    </div>
);

export default React.memo(RepoTile);