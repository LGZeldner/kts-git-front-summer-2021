import React from "react";

import styles from './PageTitle.module.scss'

export type PageTitleProps = {
    title: string;
};

const PageTitle: React.FC<PageTitleProps> = ({
    title
}) => <h2 className={styles.pageTitle}>{title}</h2>

export default PageTitle;