import React from "react";

import './Avatar.css'

export type AvatarProps = {
    src?: string;
    alt?: string;
    letter?: string;
};

export type ImgProps = {
    src: string;
    alt: string;
};

const Img: React.FC<ImgProps> = ({
    src,
    alt
}) => <img src={src} alt={alt} className="git-repo-tile__avatar-img" />;

const Avatar: React.FC<AvatarProps> = ({
    src,
    alt = "owner avatar",
    letter
}) => {
    if (src === undefined || src === "") return <div className="git-repo-tile__avatar-container">{letter}</div>;
    else return <div className="git-repo-tile__avatar-container"><Img src={src} alt={alt}></Img></div>
}

export default Avatar;