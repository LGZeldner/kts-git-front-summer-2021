import React from "react";

import './Avatar.css'

export type AvatarProps = {
    src: string;
    alt?: string;
    letter?: string;
};

const Img: React.FC<AvatarProps> = ({
    src,
    alt
}) => <img src={src} alt={alt} />;


const Avatar: React.FC<AvatarProps> = ({
    src,
    alt = "repo avatar",
    letter
}) => {
    if (src === "") return <div className=".git-repo-tile__avatar">{letter}</div>;
    else return <div className=".git-repo-tile__avatar"><Img src={src} alt={alt}></Img></div>
}

export default Avatar;