import React from "react";

import styles from './Avatar.module.scss'

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
    if (!src) return <div className={styles.gitRepoTile__avatarContainer}>{letter}</div>;
    else return <div className={styles.gitRepoTile__avatarContainer}>
        <img src={src} alt={alt} className={styles.gitRepoTile__avatarImg}></img>
    </div>
}

export default React.memo(Avatar);