import React from "react";

import styles from './Loader.module.scss';

export type loaderProps = {
  name: string;
};

const Loader: React.FC<loaderProps> = ({ name }) =>
  <div className={styles.loader}>{name}</div>;

export default Loader;