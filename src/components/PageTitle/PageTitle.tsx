import React from "react";

import './PageTitle.css'

export type PageTitleProps = {
    title: string;
};

const PageTitle: React.FC<PageTitleProps> = ({
    title
}) => <h2 className="page-title">{title}</h2>

export default PageTitle;