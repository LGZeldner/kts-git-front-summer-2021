import React from "react";

import './Avatar.scss'

export type AvatarProps = {
    src?: string;
    alt?: string;
    letter?: string;
};

const Avatar: React.FC<AvatarProps> = ({
    src,
    alt = "owner avatar",
    letter
}) => {
    if (!src) return <div className="git-repo-tile__avatar-container">{letter}</div>;
    else return <div className="git-repo-tile__avatar-container">
        <img src={src} alt={alt} className="git-repo-tile__avatar-img"></img>
    </div>
}

export default React.memo(Avatar);